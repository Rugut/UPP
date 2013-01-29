
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/SoglasheniyaObIspolzovaniiEHD")]
	[Route("/Catalogs/SoglasheniyaObIspolzovaniiEHD/{Code}")]
	public class SoglasheniyaObIspolzovaniiEHDRequest/*—оглашени€ќб»спользованииЁƒ«апрос*/: V82.—правочники—сылка.—оглашени€ќб»спользованииЁƒ,IReturn<SoglasheniyaObIspolzovaniiEHDRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SoglasheniyaObIspolzovaniiEHDResponse//—оглашени€ќб»спользованииЁƒќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SoglasheniyaObIspolzovaniiEHDs")]
	[Route("/Catalogs/SoglasheniyaObIspolzovaniiEHDs/{Codes}")]
	public class SoglasheniyaObIspolzovaniiEHDsRequest/*—оглашени€ќб»спользованииЁƒ«апрос*/: IReturn<List<SoglasheniyaObIspolzovaniiEHDRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SoglasheniyaObIspolzovaniiEHDsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SoglasheniyaObIspolzovaniiEHDsResponse//—оглашени€ќб»спользованииЁƒќтвет
	{
		public string Result {get;set;}
	}


	public class SoglasheniyaObIspolzovaniiEHDService /*—оглашени€ќб»спользованииЁƒ—ервис*/ : Service
	{
		public object Any(SoglasheniyaObIspolzovaniiEHDRequest request)
		{
			return new SoglasheniyaObIspolzovaniiEHDResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SoglasheniyaObIspolzovaniiEHDRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—оглашени€ќб»спользованииЁƒ.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new SoglasheniyaObIspolzovaniiEHDResponse() {Result = "—оглашени€ќб»спользованииЁƒ c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—оглашени€ќб»спользованииЁƒ.Ќайтиѕо оду(1);
			}
		}

		public object Get(SoglasheniyaObIspolzovaniiEHDsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—оглашени€ќб»спользованииЁƒ>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—оглашени€ќб»спользованииЁƒ.Ќайтиѕо оду(—трока од);
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
