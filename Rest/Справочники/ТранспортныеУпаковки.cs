
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TransportnyeUpakovki")]
	[Route("/Catalogs/TransportnyeUpakovki/FindById/{Id}")]
	[Route("/Catalogs/TransportnyeUpakovki/FindByCode/{Code}")]
	[Route("/Catalogs/TransportnyeUpakovki/FindByDescr/{Descr}")]
	public class TransportnyeUpakovkiRequest/*ТранспортныеУпаковкиЗапрос*/: V82.СправочникиСсылка.ТранспортныеУпаковки,IReturn<TransportnyeUpakovkiRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TransportnyeUpakovkiResponse//ТранспортныеУпаковкиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TransportnyeUpakovkis")]
	[Route("/Catalogs/TransportnyeUpakovkis/{Codes}")]
	public class TransportnyeUpakovkisRequest/*ТранспортныеУпаковкиЗапрос*/: IReturn<List<TransportnyeUpakovkiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TransportnyeUpakovkisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TransportnyeUpakovkisResponse//ТранспортныеУпаковкиОтвет
	{
		public string Result {get;set;}
	}


	public class TransportnyeUpakovkiService /*ТранспортныеУпаковкиСервис*/ : Service
	{
		public object Any(TransportnyeUpakovkiRequest request)
		{
			return new TransportnyeUpakovkiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TransportnyeUpakovkiRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				return new TransportnyeUpakovkiResponse() {Result = "ТранспортныеУпаковки c кодом '" + request.Code+"' не найдено."};
			}
			var Ссылка = V82.Справочники.ТранспортныеУпаковки.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TransportnyeUpakovkiResponse() {Result = "ТранспортныеУпаковки c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TransportnyeUpakovkisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТранспортныеУпаковки>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
				continue;//ToDo: Регестрация ошибки.
				}
				var Ссылка = V82.Справочники.ТранспортныеУпаковки.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}