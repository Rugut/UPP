
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/GodovyeGrafikiAmortizaciiOS")]
	[Route("/Catalogs/GodovyeGrafikiAmortizaciiOS/{Code}")]
	public class GodovyeGrafikiAmortizaciiOSRequest/*√одовые√рафикијмортизацииќ—«апрос*/: V82.—правочники—сылка.√одовые√рафикијмортизацииќ—,IReturn<GodovyeGrafikiAmortizaciiOSRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GodovyeGrafikiAmortizaciiOSResponse//√одовые√рафикијмортизацииќ—ќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GodovyeGrafikiAmortizaciiOSs")]
	[Route("/Catalogs/GodovyeGrafikiAmortizaciiOSs/{Codes}")]
	public class GodovyeGrafikiAmortizaciiOSsRequest/*√одовые√рафикијмортизацииќ—«апрос*/: IReturn<List<GodovyeGrafikiAmortizaciiOSRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GodovyeGrafikiAmortizaciiOSsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GodovyeGrafikiAmortizaciiOSsResponse//√одовые√рафикијмортизацииќ—ќтвет
	{
		public string Result {get;set;}
	}


	public class GodovyeGrafikiAmortizaciiOSService /*√одовые√рафикијмортизацииќ——ервис*/ : Service
	{
		public object Any(GodovyeGrafikiAmortizaciiOSRequest request)
		{
			return new GodovyeGrafikiAmortizaciiOSResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GodovyeGrafikiAmortizaciiOSRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.√одовые√рафикијмортизацииќ—.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new GodovyeGrafikiAmortizaciiOSResponse() {Result = "√одовые√рафикијмортизацииќ— c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.√одовые√рафикијмортизацииќ—.Ќайтиѕо оду(1);
			}
		}

		public object Get(GodovyeGrafikiAmortizaciiOSsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.√одовые√рафикијмортизацииќ—>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.√одовые√рафикијмортизацииќ—.Ќайтиѕо оду(—трока од);
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
