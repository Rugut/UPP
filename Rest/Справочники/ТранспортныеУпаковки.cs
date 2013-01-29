
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/TransportnyeUpakovki")]
	[Route("/Catalogs/TransportnyeUpakovki/{Code}")]
	public class TransportnyeUpakovkiRequest/*“ранспортные”паковки«апрос*/: V82.—правочники—сылка.“ранспортные”паковки,IReturn<TransportnyeUpakovkiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TransportnyeUpakovkiResponse//“ранспортные”паковкиќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TransportnyeUpakovkis")]
	[Route("/Catalogs/TransportnyeUpakovkis/{Codes}")]
	public class TransportnyeUpakovkisRequest/*“ранспортные”паковки«апрос*/: IReturn<List<TransportnyeUpakovkiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TransportnyeUpakovkisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TransportnyeUpakovkisResponse//“ранспортные”паковкиќтвет
	{
		public string Result {get;set;}
	}


	public class TransportnyeUpakovkiService /*“ранспортные”паковки—ервис*/ : Service
	{
		public object Any(TransportnyeUpakovkiRequest request)
		{
			return new TransportnyeUpakovkiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TransportnyeUpakovkiRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.“ранспортные”паковки.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new TransportnyeUpakovkiResponse() {Result = "“ранспортные”паковки c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.“ранспортные”паковки.Ќайтиѕо оду(1);
			}
		}

		public object Get(TransportnyeUpakovkisRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.“ранспортные”паковки>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.“ранспортные”паковки.Ќайтиѕо оду(—трока од);
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
