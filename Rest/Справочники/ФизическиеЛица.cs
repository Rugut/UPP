
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/FizicheskieLica")]
	[Route("/Catalogs/FizicheskieLica/FindById/{Id}")]
	[Route("/Catalogs/FizicheskieLica/FindByCode/{Code}")]
	[Route("/Catalogs/FizicheskieLica/FindByDescr/{Descr}")]
	public class FizicheskieLicaRequest/*ФизическиеЛицаЗапрос*/: V82.СправочникиСсылка.ФизическиеЛица,IReturn<FizicheskieLicaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class FizicheskieLicaResponse//ФизическиеЛицаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/FizicheskieLicas")]
	[Route("/Catalogs/FizicheskieLicas/{Codes}")]
	public class FizicheskieLicasRequest/*ФизическиеЛицаЗапрос*/: IReturn<List<FizicheskieLicaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public FizicheskieLicasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class FizicheskieLicasResponse//ФизическиеЛицаОтвет
	{
		public string Result {get;set;}
	}


	public class FizicheskieLicaService /*ФизическиеЛицаСервис*/ : Service
	{
		public object Any(FizicheskieLicaRequest request)
		{
			return new FizicheskieLicaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(FizicheskieLicaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ФизическиеЛица.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new FizicheskieLicaResponse() {Result = "ФизическиеЛица c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(FizicheskieLicasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ФизическиеЛица>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ФизическиеЛица.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}