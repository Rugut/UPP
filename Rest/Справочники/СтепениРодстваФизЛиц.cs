
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/StepeniRodstvaFizLic")]
	[Route("/Catalogs/StepeniRodstvaFizLic/{Code}")]
	public class StepeniRodstvaFizLicRequest/*—тепени–одства‘изЋиц«апрос*/: V82.—правочники—сылка.—тепени–одства‘изЋиц,IReturn<StepeniRodstvaFizLicRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StepeniRodstvaFizLicResponse//—тепени–одства‘изЋицќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StepeniRodstvaFizLics")]
	[Route("/Catalogs/StepeniRodstvaFizLics/{Codes}")]
	public class StepeniRodstvaFizLicsRequest/*—тепени–одства‘изЋиц«апрос*/: IReturn<List<StepeniRodstvaFizLicRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StepeniRodstvaFizLicsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StepeniRodstvaFizLicsResponse//—тепени–одства‘изЋицќтвет
	{
		public string Result {get;set;}
	}


	public class StepeniRodstvaFizLicService /*—тепени–одства‘изЋиц—ервис*/ : Service
	{
		public object Any(StepeniRodstvaFizLicRequest request)
		{
			return new StepeniRodstvaFizLicResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StepeniRodstvaFizLicRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—тепени–одства‘изЋиц.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new StepeniRodstvaFizLicResponse() {Result = "—тепени–одства‘изЋиц c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—тепени–одства‘изЋиц.Ќайтиѕо оду(1);
			}
		}

		public object Get(StepeniRodstvaFizLicsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—тепени–одства‘изЋиц>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—тепени–одства‘изЋиц.Ќайтиѕо оду(—трока од);
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
