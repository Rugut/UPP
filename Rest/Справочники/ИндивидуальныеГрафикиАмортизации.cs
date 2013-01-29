
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/IndividualnyeGrafikiAmortizacii")]
	[Route("/Catalogs/IndividualnyeGrafikiAmortizacii/{Code}")]
	public class IndividualnyeGrafikiAmortizaciiRequest/*»ндивидуальные√рафикијмортизации«апрос*/: V82.—правочники—сылка.»ндивидуальные√рафикијмортизации,IReturn<IndividualnyeGrafikiAmortizaciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class IndividualnyeGrafikiAmortizaciiResponse//»ндивидуальные√рафикијмортизацииќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/IndividualnyeGrafikiAmortizaciis")]
	[Route("/Catalogs/IndividualnyeGrafikiAmortizaciis/{Codes}")]
	public class IndividualnyeGrafikiAmortizaciisRequest/*»ндивидуальные√рафикијмортизации«апрос*/: IReturn<List<IndividualnyeGrafikiAmortizaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public IndividualnyeGrafikiAmortizaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class IndividualnyeGrafikiAmortizaciisResponse//»ндивидуальные√рафикијмортизацииќтвет
	{
		public string Result {get;set;}
	}


	public class IndividualnyeGrafikiAmortizaciiService /*»ндивидуальные√рафикијмортизации—ервис*/ : Service
	{
		public object Any(IndividualnyeGrafikiAmortizaciiRequest request)
		{
			return new IndividualnyeGrafikiAmortizaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(IndividualnyeGrafikiAmortizaciiRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.»ндивидуальные√рафикијмортизации.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new IndividualnyeGrafikiAmortizaciiResponse() {Result = "»ндивидуальные√рафикијмортизации c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.»ндивидуальные√рафикијмортизации.Ќайтиѕо оду(1);
			}
		}

		public object Get(IndividualnyeGrafikiAmortizaciisRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.»ндивидуальные√рафикијмортизации>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.»ндивидуальные√рафикијмортизации.Ќайтиѕо оду(—трока од);
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
