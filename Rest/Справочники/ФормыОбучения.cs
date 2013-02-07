
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/FormyObucheniya")]
	[Route("/Catalogs/FormyObucheniya/FindById/{Id}")]
	[Route("/Catalogs/FormyObucheniya/FindByCode/{Code}")]
	[Route("/Catalogs/FormyObucheniya/FindByDescr/{Descr}")]
	public class FormyObucheniyaRequest/*ФормыОбученияЗапрос*/: V82.СправочникиСсылка.ФормыОбучения,IReturn<FormyObucheniyaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class FormyObucheniyaResponse//ФормыОбученияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/FormyObucheniyas")]
	[Route("/Catalogs/FormyObucheniyas/{Codes}")]
	public class FormyObucheniyasRequest/*ФормыОбученияЗапрос*/: IReturn<List<FormyObucheniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public FormyObucheniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class FormyObucheniyasResponse//ФормыОбученияОтвет
	{
		public string Result {get;set;}
	}


	public class FormyObucheniyaService /*ФормыОбученияСервис*/ : Service
	{
		public object Any(FormyObucheniyaRequest request)
		{
			return new FormyObucheniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(FormyObucheniyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ФормыОбучения.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new FormyObucheniyaResponse() {Result = "ФормыОбучения c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(FormyObucheniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ФормыОбучения>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ФормыОбучения.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}