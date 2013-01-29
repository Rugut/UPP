
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/EHlektronnyePredstavleniyaReglamentirovannykhOtchetov")]
	[Route("/Catalogs/EHlektronnyePredstavleniyaReglamentirovannykhOtchetov/{Code}")]
	public class EHlektronnyePredstavleniyaReglamentirovannykhOtchetovRequest/*Ёлектронныеѕредставлени€–егламентированныхќтчетов«апрос*/: V82.—правочники—сылка.Ёлектронныеѕредставлени€–егламентированныхќтчетов,IReturn<EHlektronnyePredstavleniyaReglamentirovannykhOtchetovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class EHlektronnyePredstavleniyaReglamentirovannykhOtchetovResponse//Ёлектронныеѕредставлени€–егламентированныхќтчетовќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/EHlektronnyePredstavleniyaReglamentirovannykhOtchetovs")]
	[Route("/Catalogs/EHlektronnyePredstavleniyaReglamentirovannykhOtchetovs/{Codes}")]
	public class EHlektronnyePredstavleniyaReglamentirovannykhOtchetovsRequest/*Ёлектронныеѕредставлени€–егламентированныхќтчетов«апрос*/: IReturn<List<EHlektronnyePredstavleniyaReglamentirovannykhOtchetovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public EHlektronnyePredstavleniyaReglamentirovannykhOtchetovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class EHlektronnyePredstavleniyaReglamentirovannykhOtchetovsResponse//Ёлектронныеѕредставлени€–егламентированныхќтчетовќтвет
	{
		public string Result {get;set;}
	}


	public class EHlektronnyePredstavleniyaReglamentirovannykhOtchetovService /*Ёлектронныеѕредставлени€–егламентированныхќтчетов—ервис*/ : Service
	{
		public object Any(EHlektronnyePredstavleniyaReglamentirovannykhOtchetovRequest request)
		{
			return new EHlektronnyePredstavleniyaReglamentirovannykhOtchetovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(EHlektronnyePredstavleniyaReglamentirovannykhOtchetovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.Ёлектронныеѕредставлени€–егламентированныхќтчетов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new EHlektronnyePredstavleniyaReglamentirovannykhOtchetovResponse() {Result = "Ёлектронныеѕредставлени€–егламентированныхќтчетов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.Ёлектронныеѕредставлени€–егламентированныхќтчетов.Ќайтиѕо оду(1);
			}
		}

		public object Get(EHlektronnyePredstavleniyaReglamentirovannykhOtchetovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.Ёлектронныеѕредставлени€–егламентированныхќтчетов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.Ёлектронныеѕредставлени€–егламентированныхќтчетов.Ќайтиѕо оду(—трока од);
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
