
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/UchebnyeZavedeniya")]
	[Route("/Catalogs/UchebnyeZavedeniya/{Code}")]
	public class UchebnyeZavedeniyaRequest/*УчебныеЗаведенияЗапрос*/: V82.СправочникиСсылка.УчебныеЗаведения,IReturn<UchebnyeZavedeniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class UchebnyeZavedeniyaResponse//УчебныеЗаведенияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/UchebnyeZavedeniyas")]
	[Route("/Catalogs/UchebnyeZavedeniyas/{Codes}")]
	public class UchebnyeZavedeniyasRequest/*УчебныеЗаведенияЗапрос*/: IReturn<List<UchebnyeZavedeniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public UchebnyeZavedeniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class UchebnyeZavedeniyasResponse//УчебныеЗаведенияОтвет
	{
		public string Result {get;set;}
	}


	public class UchebnyeZavedeniyaService /*УчебныеЗаведенияСервис*/ : Service
	{
		public object Any(UchebnyeZavedeniyaRequest request)
		{
			return new UchebnyeZavedeniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(UchebnyeZavedeniyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.УчебныеЗаведения.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new UchebnyeZavedeniyaResponse() {Result = "УчебныеЗаведения c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(UchebnyeZavedeniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.УчебныеЗаведения>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.УчебныеЗаведения.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
