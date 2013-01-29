
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/DetalizaciyaOtchetaOPribylyakhIUbytkakh")]
	[Route("/Catalogs/DetalizaciyaOtchetaOPribylyakhIUbytkakh/{Code}")]
	public class DetalizaciyaOtchetaOPribylyakhIUbytkakhRequest/*ƒетализаци€ќтчетаќѕрибыл€х»”бытках«апрос*/: V82.—правочники—сылка.ƒетализаци€ќтчетаќѕрибыл€х»”бытках,IReturn<DetalizaciyaOtchetaOPribylyakhIUbytkakhRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DetalizaciyaOtchetaOPribylyakhIUbytkakhResponse//ƒетализаци€ќтчетаќѕрибыл€х»”быткахќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DetalizaciyaOtchetaOPribylyakhIUbytkakhs")]
	[Route("/Catalogs/DetalizaciyaOtchetaOPribylyakhIUbytkakhs/{Codes}")]
	public class DetalizaciyaOtchetaOPribylyakhIUbytkakhsRequest/*ƒетализаци€ќтчетаќѕрибыл€х»”бытках«апрос*/: IReturn<List<DetalizaciyaOtchetaOPribylyakhIUbytkakhRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DetalizaciyaOtchetaOPribylyakhIUbytkakhsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DetalizaciyaOtchetaOPribylyakhIUbytkakhsResponse//ƒетализаци€ќтчетаќѕрибыл€х»”быткахќтвет
	{
		public string Result {get;set;}
	}


	public class DetalizaciyaOtchetaOPribylyakhIUbytkakhService /*ƒетализаци€ќтчетаќѕрибыл€х»”бытках—ервис*/ : Service
	{
		public object Any(DetalizaciyaOtchetaOPribylyakhIUbytkakhRequest request)
		{
			return new DetalizaciyaOtchetaOPribylyakhIUbytkakhResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DetalizaciyaOtchetaOPribylyakhIUbytkakhRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ƒетализаци€ќтчетаќѕрибыл€х»”бытках.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new DetalizaciyaOtchetaOPribylyakhIUbytkakhResponse() {Result = "ƒетализаци€ќтчетаќѕрибыл€х»”бытках c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ƒетализаци€ќтчетаќѕрибыл€х»”бытках.Ќайтиѕо оду(1);
			}
		}

		public object Get(DetalizaciyaOtchetaOPribylyakhIUbytkakhsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ƒетализаци€ќтчетаќѕрибыл€х»”бытках>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ƒетализаци€ќтчетаќѕрибыл€х»”бытках.Ќайтиѕо оду(—трока од);
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
