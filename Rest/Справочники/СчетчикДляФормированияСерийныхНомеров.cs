
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/SchetchikDlyaFormirovaniyaSerijjnykhNomerov")]
	[Route("/Catalogs/SchetchikDlyaFormirovaniyaSerijjnykhNomerov/{Code}")]
	public class SchetchikDlyaFormirovaniyaSerijjnykhNomerovRequest/*—четчикƒл€‘ормировани€—ерийныхЌомеров«апрос*/: V82.—правочники—сылка.—четчикƒл€‘ормировани€—ерийныхЌомеров,IReturn<SchetchikDlyaFormirovaniyaSerijjnykhNomerovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SchetchikDlyaFormirovaniyaSerijjnykhNomerovResponse//—четчикƒл€‘ормировани€—ерийныхЌомеровќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SchetchikDlyaFormirovaniyaSerijjnykhNomerovs")]
	[Route("/Catalogs/SchetchikDlyaFormirovaniyaSerijjnykhNomerovs/{Codes}")]
	public class SchetchikDlyaFormirovaniyaSerijjnykhNomerovsRequest/*—четчикƒл€‘ормировани€—ерийныхЌомеров«апрос*/: IReturn<List<SchetchikDlyaFormirovaniyaSerijjnykhNomerovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SchetchikDlyaFormirovaniyaSerijjnykhNomerovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SchetchikDlyaFormirovaniyaSerijjnykhNomerovsResponse//—четчикƒл€‘ормировани€—ерийныхЌомеровќтвет
	{
		public string Result {get;set;}
	}


	public class SchetchikDlyaFormirovaniyaSerijjnykhNomerovService /*—четчикƒл€‘ормировани€—ерийныхЌомеров—ервис*/ : Service
	{
		public object Any(SchetchikDlyaFormirovaniyaSerijjnykhNomerovRequest request)
		{
			return new SchetchikDlyaFormirovaniyaSerijjnykhNomerovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SchetchikDlyaFormirovaniyaSerijjnykhNomerovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—четчикƒл€‘ормировани€—ерийныхЌомеров.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new SchetchikDlyaFormirovaniyaSerijjnykhNomerovResponse() {Result = "—четчикƒл€‘ормировани€—ерийныхЌомеров c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—четчикƒл€‘ормировани€—ерийныхЌомеров.Ќайтиѕо оду(1);
			}
		}

		public object Get(SchetchikDlyaFormirovaniyaSerijjnykhNomerovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—четчикƒл€‘ормировани€—ерийныхЌомеров>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—четчикƒл€‘ормировани€—ерийныхЌомеров.Ќайтиѕо оду(—трока од);
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
