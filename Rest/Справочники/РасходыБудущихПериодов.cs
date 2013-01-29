
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/RaskhodyBudushhikhPeriodov")]
	[Route("/Catalogs/RaskhodyBudushhikhPeriodov/{Code}")]
	public class RaskhodyBudushhikhPeriodovRequest/*–асходыЅудущихѕериодов«апрос*/: V82.—правочники—сылка.–асходыЅудущихѕериодов,IReturn<RaskhodyBudushhikhPeriodovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RaskhodyBudushhikhPeriodovResponse//–асходыЅудущихѕериодовќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/RaskhodyBudushhikhPeriodovs")]
	[Route("/Catalogs/RaskhodyBudushhikhPeriodovs/{Codes}")]
	public class RaskhodyBudushhikhPeriodovsRequest/*–асходыЅудущихѕериодов«апрос*/: IReturn<List<RaskhodyBudushhikhPeriodovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RaskhodyBudushhikhPeriodovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RaskhodyBudushhikhPeriodovsResponse//–асходыЅудущихѕериодовќтвет
	{
		public string Result {get;set;}
	}


	public class RaskhodyBudushhikhPeriodovService /*–асходыЅудущихѕериодов—ервис*/ : Service
	{
		public object Any(RaskhodyBudushhikhPeriodovRequest request)
		{
			return new RaskhodyBudushhikhPeriodovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RaskhodyBudushhikhPeriodovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.–асходыЅудущихѕериодов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new RaskhodyBudushhikhPeriodovResponse() {Result = "–асходыЅудущихѕериодов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.–асходыЅудущихѕериодов.Ќайтиѕо оду(1);
			}
		}

		public object Get(RaskhodyBudushhikhPeriodovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.–асходыЅудущихѕериодов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.–асходыЅудущихѕериодов.Ќайтиѕо оду(—трока од);
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
