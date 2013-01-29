
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/FizicheskieLica")]
	[Route("/Catalogs/FizicheskieLica/{Code}")]
	public class FizicheskieLicaRequest/*‘изическиеЋица«апрос*/: V82.—правочники—сылка.‘изическиеЋица,IReturn<FizicheskieLicaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class FizicheskieLicaResponse//‘изическиеЋицаќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/FizicheskieLicas")]
	[Route("/Catalogs/FizicheskieLicas/{Codes}")]
	public class FizicheskieLicasRequest/*‘изическиеЋица«апрос*/: IReturn<List<FizicheskieLicaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public FizicheskieLicasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class FizicheskieLicasResponse//‘изическиеЋицаќтвет
	{
		public string Result {get;set;}
	}


	public class FizicheskieLicaService /*‘изическиеЋица—ервис*/ : Service
	{
		public object Any(FizicheskieLicaRequest request)
		{
			return new FizicheskieLicaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(FizicheskieLicaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.‘изическиеЋица.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new FizicheskieLicaResponse() {Result = "‘изическиеЋица c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.‘изическиеЋица.Ќайтиѕо оду(1);
			}
		}

		public object Get(FizicheskieLicasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.‘изическиеЋица>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.‘изическиеЋица.Ќайтиѕо оду(—трока од);
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
