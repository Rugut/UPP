
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/SostavOcenochnykhSHkalKompetencijj")]
	[Route("/Catalogs/SostavOcenochnykhSHkalKompetencijj/{Code}")]
	public class SostavOcenochnykhSHkalKompetencijjRequest/*—оставќценочныхЎкал омпетенций«апрос*/: V82.—правочники—сылка.—оставќценочныхЎкал омпетенций,IReturn<SostavOcenochnykhSHkalKompetencijjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SostavOcenochnykhSHkalKompetencijjResponse//—оставќценочныхЎкал омпетенцийќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SostavOcenochnykhSHkalKompetencijjs")]
	[Route("/Catalogs/SostavOcenochnykhSHkalKompetencijjs/{Codes}")]
	public class SostavOcenochnykhSHkalKompetencijjsRequest/*—оставќценочныхЎкал омпетенций«апрос*/: IReturn<List<SostavOcenochnykhSHkalKompetencijjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SostavOcenochnykhSHkalKompetencijjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SostavOcenochnykhSHkalKompetencijjsResponse//—оставќценочныхЎкал омпетенцийќтвет
	{
		public string Result {get;set;}
	}


	public class SostavOcenochnykhSHkalKompetencijjService /*—оставќценочныхЎкал омпетенций—ервис*/ : Service
	{
		public object Any(SostavOcenochnykhSHkalKompetencijjRequest request)
		{
			return new SostavOcenochnykhSHkalKompetencijjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SostavOcenochnykhSHkalKompetencijjRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—оставќценочныхЎкал омпетенций.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new SostavOcenochnykhSHkalKompetencijjResponse() {Result = "—оставќценочныхЎкал омпетенций c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—оставќценочныхЎкал омпетенций.Ќайтиѕо оду(1);
			}
		}

		public object Get(SostavOcenochnykhSHkalKompetencijjsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—оставќценочныхЎкал омпетенций>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—оставќценочныхЎкал омпетенций.Ќайтиѕо оду(—трока од);
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
