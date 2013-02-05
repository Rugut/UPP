
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/StatiAnaliticheskogoBalansa")]
	[Route("/Catalogs/StatiAnaliticheskogoBalansa/{Code}")]
	public class StatiAnaliticheskogoBalansaRequest/*СтатьиАналитическогоБалансаЗапрос*/: V82.СправочникиСсылка.СтатьиАналитическогоБаланса,IReturn<StatiAnaliticheskogoBalansaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StatiAnaliticheskogoBalansaResponse//СтатьиАналитическогоБалансаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StatiAnaliticheskogoBalansas")]
	[Route("/Catalogs/StatiAnaliticheskogoBalansas/{Codes}")]
	public class StatiAnaliticheskogoBalansasRequest/*СтатьиАналитическогоБалансаЗапрос*/: IReturn<List<StatiAnaliticheskogoBalansaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StatiAnaliticheskogoBalansasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StatiAnaliticheskogoBalansasResponse//СтатьиАналитическогоБалансаОтвет
	{
		public string Result {get;set;}
	}


	public class StatiAnaliticheskogoBalansaService /*СтатьиАналитическогоБалансаСервис*/ : Service
	{
		public object Any(StatiAnaliticheskogoBalansaRequest request)
		{
			return new StatiAnaliticheskogoBalansaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StatiAnaliticheskogoBalansaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.СтатьиАналитическогоБаланса.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new StatiAnaliticheskogoBalansaResponse() {Result = "СтатьиАналитическогоБаланса c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(StatiAnaliticheskogoBalansasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СтатьиАналитическогоБаланса>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.СтатьиАналитическогоБаланса.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
