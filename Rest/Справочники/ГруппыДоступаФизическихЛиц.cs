
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/GruppyDostupaFizicheskikhLic")]
	[Route("/Catalogs/GruppyDostupaFizicheskikhLic/{Code}")]
	public class GruppyDostupaFizicheskikhLicRequest/*√руппыƒоступа‘изическихЋиц«апрос*/: V82.—правочники—сылка.√руппыƒоступа‘изическихЋиц,IReturn<GruppyDostupaFizicheskikhLicRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppyDostupaFizicheskikhLicResponse//√руппыƒоступа‘изическихЋицќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppyDostupaFizicheskikhLics")]
	[Route("/Catalogs/GruppyDostupaFizicheskikhLics/{Codes}")]
	public class GruppyDostupaFizicheskikhLicsRequest/*√руппыƒоступа‘изическихЋиц«апрос*/: IReturn<List<GruppyDostupaFizicheskikhLicRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppyDostupaFizicheskikhLicsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppyDostupaFizicheskikhLicsResponse//√руппыƒоступа‘изическихЋицќтвет
	{
		public string Result {get;set;}
	}


	public class GruppyDostupaFizicheskikhLicService /*√руппыƒоступа‘изическихЋиц—ервис*/ : Service
	{
		public object Any(GruppyDostupaFizicheskikhLicRequest request)
		{
			return new GruppyDostupaFizicheskikhLicResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppyDostupaFizicheskikhLicRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.√руппыƒоступа‘изическихЋиц.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new GruppyDostupaFizicheskikhLicResponse() {Result = "√руппыƒоступа‘изическихЋиц c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.√руппыƒоступа‘изическихЋиц.Ќайтиѕо оду(1);
			}
		}

		public object Get(GruppyDostupaFizicheskikhLicsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.√руппыƒоступа‘изическихЋиц>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.√руппыƒоступа‘изическихЋиц.Ќайтиѕо оду(—трока од);
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
