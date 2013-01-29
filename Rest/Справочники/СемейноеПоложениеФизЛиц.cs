
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/SemejjnoePolozhenieFizLic")]
	[Route("/Catalogs/SemejjnoePolozhenieFizLic/{Code}")]
	public class SemejjnoePolozhenieFizLicRequest/*—емейноеѕоложение‘изЋиц«апрос*/: V82.—правочники—сылка.—емейноеѕоложение‘изЋиц,IReturn<SemejjnoePolozhenieFizLicRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SemejjnoePolozhenieFizLicResponse//—емейноеѕоложение‘изЋицќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SemejjnoePolozhenieFizLics")]
	[Route("/Catalogs/SemejjnoePolozhenieFizLics/{Codes}")]
	public class SemejjnoePolozhenieFizLicsRequest/*—емейноеѕоложение‘изЋиц«апрос*/: IReturn<List<SemejjnoePolozhenieFizLicRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SemejjnoePolozhenieFizLicsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SemejjnoePolozhenieFizLicsResponse//—емейноеѕоложение‘изЋицќтвет
	{
		public string Result {get;set;}
	}


	public class SemejjnoePolozhenieFizLicService /*—емейноеѕоложение‘изЋиц—ервис*/ : Service
	{
		public object Any(SemejjnoePolozhenieFizLicRequest request)
		{
			return new SemejjnoePolozhenieFizLicResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SemejjnoePolozhenieFizLicRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—емейноеѕоложение‘изЋиц.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new SemejjnoePolozhenieFizLicResponse() {Result = "—емейноеѕоложение‘изЋиц c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—емейноеѕоложение‘изЋиц.Ќайтиѕо оду(1);
			}
		}

		public object Get(SemejjnoePolozhenieFizLicsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—емейноеѕоложение‘изЋиц>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—емейноеѕоложение‘изЋиц.Ќайтиѕо оду(—трока од);
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
