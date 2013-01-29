
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/OstatkiOtpuskovOrganizacijj")]
	[Route("/Catalogs/OstatkiOtpuskovOrganizacijj/{Code}")]
	public class OstatkiOtpuskovOrganizacijjRequest/*ќстаткиќтпусковќрганизаций«апрос*/: V82.—правочники—сылка.ќстаткиќтпусковќрганизаций,IReturn<OstatkiOtpuskovOrganizacijjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OstatkiOtpuskovOrganizacijjResponse//ќстаткиќтпусковќрганизацийќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OstatkiOtpuskovOrganizacijjs")]
	[Route("/Catalogs/OstatkiOtpuskovOrganizacijjs/{Codes}")]
	public class OstatkiOtpuskovOrganizacijjsRequest/*ќстаткиќтпусковќрганизаций«апрос*/: IReturn<List<OstatkiOtpuskovOrganizacijjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OstatkiOtpuskovOrganizacijjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OstatkiOtpuskovOrganizacijjsResponse//ќстаткиќтпусковќрганизацийќтвет
	{
		public string Result {get;set;}
	}


	public class OstatkiOtpuskovOrganizacijjService /*ќстаткиќтпусковќрганизаций—ервис*/ : Service
	{
		public object Any(OstatkiOtpuskovOrganizacijjRequest request)
		{
			return new OstatkiOtpuskovOrganizacijjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OstatkiOtpuskovOrganizacijjRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ќстаткиќтпусковќрганизаций.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new OstatkiOtpuskovOrganizacijjResponse() {Result = "ќстаткиќтпусковќрганизаций c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ќстаткиќтпусковќрганизаций.Ќайтиѕо оду(1);
			}
		}

		public object Get(OstatkiOtpuskovOrganizacijjsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ќстаткиќтпусковќрганизаций>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ќстаткиќтпусковќрганизаций.Ќайтиѕо оду(—трока од);
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
