
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KontaktnyeLica")]
	[Route("/Catalogs/KontaktnyeLica/{Code}")]
	public class KontaktnyeLicaRequest/*КонтактныеЛицаЗапрос*/: V82.СправочникиСсылка.КонтактныеЛица,IReturn<KontaktnyeLicaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KontaktnyeLicaResponse//КонтактныеЛицаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KontaktnyeLicas")]
	[Route("/Catalogs/KontaktnyeLicas/{Codes}")]
	public class KontaktnyeLicasRequest/*КонтактныеЛицаЗапрос*/: IReturn<List<KontaktnyeLicaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KontaktnyeLicasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KontaktnyeLicasResponse//КонтактныеЛицаОтвет
	{
		public string Result {get;set;}
	}


	public class KontaktnyeLicaService /*КонтактныеЛицаСервис*/ : Service
	{
		public object Any(KontaktnyeLicaRequest request)
		{
			return new KontaktnyeLicaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KontaktnyeLicaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.КонтактныеЛица.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new KontaktnyeLicaResponse() {Result = "КонтактныеЛица c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(KontaktnyeLicasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КонтактныеЛица>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.КонтактныеЛица.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
