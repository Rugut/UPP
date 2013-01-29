
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/DokhodyBudushhikhPeriodov")]
	[Route("/Catalogs/DokhodyBudushhikhPeriodov/{Code}")]
	public class DokhodyBudushhikhPeriodovRequest/*ƒоходыЅудущихѕериодов«апрос*/: V82.—правочники—сылка.ƒоходыЅудущихѕериодов,IReturn<DokhodyBudushhikhPeriodovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokhodyBudushhikhPeriodovResponse//ƒоходыЅудущихѕериодовќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokhodyBudushhikhPeriodovs")]
	[Route("/Catalogs/DokhodyBudushhikhPeriodovs/{Codes}")]
	public class DokhodyBudushhikhPeriodovsRequest/*ƒоходыЅудущихѕериодов«апрос*/: IReturn<List<DokhodyBudushhikhPeriodovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokhodyBudushhikhPeriodovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokhodyBudushhikhPeriodovsResponse//ƒоходыЅудущихѕериодовќтвет
	{
		public string Result {get;set;}
	}


	public class DokhodyBudushhikhPeriodovService /*ƒоходыЅудущихѕериодов—ервис*/ : Service
	{
		public object Any(DokhodyBudushhikhPeriodovRequest request)
		{
			return new DokhodyBudushhikhPeriodovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokhodyBudushhikhPeriodovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ƒоходыЅудущихѕериодов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new DokhodyBudushhikhPeriodovResponse() {Result = "ƒоходыЅудущихѕериодов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ƒоходыЅудущихѕериодов.Ќайтиѕо оду(1);
			}
		}

		public object Get(DokhodyBudushhikhPeriodovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ƒоходыЅудущихѕериодов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ƒоходыЅудущихѕериодов.Ќайтиѕо оду(—трока од);
					if (—сылка != null)
					{
						 оллекци€.Add(—сылка);
					}
				}
			}
			return  оллекци€;
		}

	}
}
