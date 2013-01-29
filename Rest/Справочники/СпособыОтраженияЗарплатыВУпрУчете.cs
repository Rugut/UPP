
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/SposobyOtrazheniyaZarplatyVUprUchete")]
	[Route("/Catalogs/SposobyOtrazheniyaZarplatyVUprUchete/{Code}")]
	public class SposobyOtrazheniyaZarplatyVUprUcheteRequest/*—пособыќтражени€«арплаты¬”пр”чете«апрос*/: V82.—правочники—сылка.—пособыќтражени€«арплаты¬”пр”чете,IReturn<SposobyOtrazheniyaZarplatyVUprUcheteRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SposobyOtrazheniyaZarplatyVUprUcheteResponse//—пособыќтражени€«арплаты¬”пр”четеќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SposobyOtrazheniyaZarplatyVUprUchetes")]
	[Route("/Catalogs/SposobyOtrazheniyaZarplatyVUprUchetes/{Codes}")]
	public class SposobyOtrazheniyaZarplatyVUprUchetesRequest/*—пособыќтражени€«арплаты¬”пр”чете«апрос*/: IReturn<List<SposobyOtrazheniyaZarplatyVUprUcheteRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SposobyOtrazheniyaZarplatyVUprUchetesRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SposobyOtrazheniyaZarplatyVUprUchetesResponse//—пособыќтражени€«арплаты¬”пр”четеќтвет
	{
		public string Result {get;set;}
	}


	public class SposobyOtrazheniyaZarplatyVUprUcheteService /*—пособыќтражени€«арплаты¬”пр”чете—ервис*/ : Service
	{
		public object Any(SposobyOtrazheniyaZarplatyVUprUcheteRequest request)
		{
			return new SposobyOtrazheniyaZarplatyVUprUcheteResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SposobyOtrazheniyaZarplatyVUprUcheteRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—пособыќтражени€«арплаты¬”пр”чете.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new SposobyOtrazheniyaZarplatyVUprUcheteResponse() {Result = "—пособыќтражени€«арплаты¬”пр”чете c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—пособыќтражени€«арплаты¬”пр”чете.Ќайтиѕо оду(1);
			}
		}

		public object Get(SposobyOtrazheniyaZarplatyVUprUchetesRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—пособыќтражени€«арплаты¬”пр”чете>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—пособыќтражени€«арплаты¬”пр”чете.Ќайтиѕо оду(—трока од);
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
