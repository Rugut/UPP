
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/DokumentyObObrazovanii")]
	[Route("/Catalogs/DokumentyObObrazovanii/{Code}")]
	public class DokumentyObObrazovaniiRequest/*ƒокументыќбќбразовании«апрос*/: V82.—правочники—сылка.ƒокументыќбќбразовании,IReturn<DokumentyObObrazovaniiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokumentyObObrazovaniiResponse//ƒокументыќбќбразованииќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokumentyObObrazovaniis")]
	[Route("/Catalogs/DokumentyObObrazovaniis/{Codes}")]
	public class DokumentyObObrazovaniisRequest/*ƒокументыќбќбразовании«апрос*/: IReturn<List<DokumentyObObrazovaniiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokumentyObObrazovaniisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokumentyObObrazovaniisResponse//ƒокументыќбќбразованииќтвет
	{
		public string Result {get;set;}
	}


	public class DokumentyObObrazovaniiService /*ƒокументыќбќбразовании—ервис*/ : Service
	{
		public object Any(DokumentyObObrazovaniiRequest request)
		{
			return new DokumentyObObrazovaniiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokumentyObObrazovaniiRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ƒокументыќбќбразовании.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new DokumentyObObrazovaniiResponse() {Result = "ƒокументыќбќбразовании c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ƒокументыќбќбразовании.Ќайтиѕо оду(1);
			}
		}

		public object Get(DokumentyObObrazovaniisRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ƒокументыќбќбразовании>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ƒокументыќбќбразовании.Ќайтиѕо оду(—трока од);
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
