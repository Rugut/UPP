
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/PerepiskaSKontroliruyushhimiOrganami")]
	[Route("/Catalogs/PerepiskaSKontroliruyushhimiOrganami/{Code}")]
	public class PerepiskaSKontroliruyushhimiOrganamiRequest/*ѕереписка— онтролирующимиќрганами«апрос*/: V82.—правочники—сылка.ѕереписка— онтролирующимиќрганами,IReturn<PerepiskaSKontroliruyushhimiOrganamiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PerepiskaSKontroliruyushhimiOrganamiResponse//ѕереписка— онтролирующимиќрганамиќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/PerepiskaSKontroliruyushhimiOrganamis")]
	[Route("/Catalogs/PerepiskaSKontroliruyushhimiOrganamis/{Codes}")]
	public class PerepiskaSKontroliruyushhimiOrganamisRequest/*ѕереписка— онтролирующимиќрганами«апрос*/: IReturn<List<PerepiskaSKontroliruyushhimiOrganamiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PerepiskaSKontroliruyushhimiOrganamisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PerepiskaSKontroliruyushhimiOrganamisResponse//ѕереписка— онтролирующимиќрганамиќтвет
	{
		public string Result {get;set;}
	}


	public class PerepiskaSKontroliruyushhimiOrganamiService /*ѕереписка— онтролирующимиќрганами—ервис*/ : Service
	{
		public object Any(PerepiskaSKontroliruyushhimiOrganamiRequest request)
		{
			return new PerepiskaSKontroliruyushhimiOrganamiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PerepiskaSKontroliruyushhimiOrganamiRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ѕереписка— онтролирующимиќрганами.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new PerepiskaSKontroliruyushhimiOrganamiResponse() {Result = "ѕереписка— онтролирующимиќрганами c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ѕереписка— онтролирующимиќрганами.Ќайтиѕо оду(1);
			}
		}

		public object Get(PerepiskaSKontroliruyushhimiOrganamisRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ѕереписка— онтролирующимиќрганами>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ѕереписка— онтролирующимиќрганами.Ќайтиѕо оду(—трока од);
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
