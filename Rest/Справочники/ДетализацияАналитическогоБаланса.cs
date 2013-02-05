
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DetalizaciyaAnaliticheskogoBalansa")]
	[Route("/Catalogs/DetalizaciyaAnaliticheskogoBalansa/{Code}")]
	public class DetalizaciyaAnaliticheskogoBalansaRequest/*ДетализацияАналитическогоБалансаЗапрос*/: V82.СправочникиСсылка.ДетализацияАналитическогоБаланса,IReturn<DetalizaciyaAnaliticheskogoBalansaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DetalizaciyaAnaliticheskogoBalansaResponse//ДетализацияАналитическогоБалансаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DetalizaciyaAnaliticheskogoBalansas")]
	[Route("/Catalogs/DetalizaciyaAnaliticheskogoBalansas/{Codes}")]
	public class DetalizaciyaAnaliticheskogoBalansasRequest/*ДетализацияАналитическогоБалансаЗапрос*/: IReturn<List<DetalizaciyaAnaliticheskogoBalansaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DetalizaciyaAnaliticheskogoBalansasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DetalizaciyaAnaliticheskogoBalansasResponse//ДетализацияАналитическогоБалансаОтвет
	{
		public string Result {get;set;}
	}


	public class DetalizaciyaAnaliticheskogoBalansaService /*ДетализацияАналитическогоБалансаСервис*/ : Service
	{
		public object Any(DetalizaciyaAnaliticheskogoBalansaRequest request)
		{
			return new DetalizaciyaAnaliticheskogoBalansaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DetalizaciyaAnaliticheskogoBalansaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ДетализацияАналитическогоБаланса.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new DetalizaciyaAnaliticheskogoBalansaResponse() {Result = "ДетализацияАналитическогоБаланса c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(DetalizaciyaAnaliticheskogoBalansasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДетализацияАналитическогоБаланса>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ДетализацияАналитическогоБаланса.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
