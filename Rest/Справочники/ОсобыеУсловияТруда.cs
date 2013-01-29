
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/OsobyeUsloviyaTruda")]
	[Route("/Catalogs/OsobyeUsloviyaTruda/{Code}")]
	public class OsobyeUsloviyaTrudaRequest/*ќсобые”слови€“руда«апрос*/: V82.—правочники—сылка.ќсобые”слови€“руда,IReturn<OsobyeUsloviyaTrudaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsobyeUsloviyaTrudaResponse//ќсобые”слови€“рудаќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsobyeUsloviyaTrudas")]
	[Route("/Catalogs/OsobyeUsloviyaTrudas/{Codes}")]
	public class OsobyeUsloviyaTrudasRequest/*ќсобые”слови€“руда«апрос*/: IReturn<List<OsobyeUsloviyaTrudaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsobyeUsloviyaTrudasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsobyeUsloviyaTrudasResponse//ќсобые”слови€“рудаќтвет
	{
		public string Result {get;set;}
	}


	public class OsobyeUsloviyaTrudaService /*ќсобые”слови€“руда—ервис*/ : Service
	{
		public object Any(OsobyeUsloviyaTrudaRequest request)
		{
			return new OsobyeUsloviyaTrudaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsobyeUsloviyaTrudaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ќсобые”слови€“руда.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new OsobyeUsloviyaTrudaResponse() {Result = "ќсобые”слови€“руда c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ќсобые”слови€“руда.Ќайтиѕо оду(1);
			}
		}

		public object Get(OsobyeUsloviyaTrudasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ќсобые”слови€“руда>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ќсобые”слови€“руда.Ќайтиѕо оду(—трока од);
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
