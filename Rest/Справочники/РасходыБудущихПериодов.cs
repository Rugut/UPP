
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/RaskhodyBudushhikhPeriodov")]
	[Route("/Catalogs/RaskhodyBudushhikhPeriodov/{Code}")]
	public class RaskhodyBudushhikhPeriodovRequest/*РасходыБудущихПериодовЗапрос*/: V82.СправочникиСсылка.РасходыБудущихПериодов,IReturn<RaskhodyBudushhikhPeriodovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RaskhodyBudushhikhPeriodovResponse//РасходыБудущихПериодовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/RaskhodyBudushhikhPeriodovs")]
	[Route("/Catalogs/RaskhodyBudushhikhPeriodovs/{Codes}")]
	public class RaskhodyBudushhikhPeriodovsRequest/*РасходыБудущихПериодовЗапрос*/: IReturn<List<RaskhodyBudushhikhPeriodovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RaskhodyBudushhikhPeriodovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RaskhodyBudushhikhPeriodovsResponse//РасходыБудущихПериодовОтвет
	{
		public string Result {get;set;}
	}


	public class RaskhodyBudushhikhPeriodovService /*РасходыБудущихПериодовСервис*/ : Service
	{
		public object Any(RaskhodyBudushhikhPeriodovRequest request)
		{
			return new RaskhodyBudushhikhPeriodovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RaskhodyBudushhikhPeriodovRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.РасходыБудущихПериодов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new RaskhodyBudushhikhPeriodovResponse() {Result = "РасходыБудущихПериодов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(RaskhodyBudushhikhPeriodovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.РасходыБудущихПериодов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.РасходыБудущихПериодов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
