
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DokhodyBudushhikhPeriodov")]
	[Route("/Catalogs/DokhodyBudushhikhPeriodov/FindById/{Id}")]
	[Route("/Catalogs/DokhodyBudushhikhPeriodov/FindByCode/{Code}")]
	[Route("/Catalogs/DokhodyBudushhikhPeriodov/FindByDescr/{Descr}")]
	public class DokhodyBudushhikhPeriodovRequest/*ДоходыБудущихПериодовЗапрос*/: V82.СправочникиСсылка.ДоходыБудущихПериодов,IReturn<DokhodyBudushhikhPeriodovRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokhodyBudushhikhPeriodovResponse//ДоходыБудущихПериодовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokhodyBudushhikhPeriodovs")]
	[Route("/Catalogs/DokhodyBudushhikhPeriodovs/{Codes}")]
	public class DokhodyBudushhikhPeriodovsRequest/*ДоходыБудущихПериодовЗапрос*/: IReturn<List<DokhodyBudushhikhPeriodovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokhodyBudushhikhPeriodovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokhodyBudushhikhPeriodovsResponse//ДоходыБудущихПериодовОтвет
	{
		public string Result {get;set;}
	}


	public class DokhodyBudushhikhPeriodovService /*ДоходыБудущихПериодовСервис*/ : Service
	{
		public object Any(DokhodyBudushhikhPeriodovRequest request)
		{
			return new DokhodyBudushhikhPeriodovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokhodyBudushhikhPeriodovRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ДоходыБудущихПериодов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new DokhodyBudushhikhPeriodovResponse() {Result = "ДоходыБудущихПериодов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(DokhodyBudushhikhPeriodovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДоходыБудущихПериодов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ДоходыБудущихПериодов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}