
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/EHDPrisoedinennyeFajjly")]
	[Route("/Catalogs/EHDPrisoedinennyeFajjly/{Code}")]
	public class EHDPrisoedinennyeFajjlyRequest/*Ёƒѕрисоединенные‘айлы«апрос*/: V82.—правочники—сылка.Ёƒѕрисоединенные‘айлы,IReturn<EHDPrisoedinennyeFajjlyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class EHDPrisoedinennyeFajjlyResponse//Ёƒѕрисоединенные‘айлыќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/EHDPrisoedinennyeFajjlys")]
	[Route("/Catalogs/EHDPrisoedinennyeFajjlys/{Codes}")]
	public class EHDPrisoedinennyeFajjlysRequest/*Ёƒѕрисоединенные‘айлы«апрос*/: IReturn<List<EHDPrisoedinennyeFajjlyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public EHDPrisoedinennyeFajjlysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class EHDPrisoedinennyeFajjlysResponse//Ёƒѕрисоединенные‘айлыќтвет
	{
		public string Result {get;set;}
	}


	public class EHDPrisoedinennyeFajjlyService /*Ёƒѕрисоединенные‘айлы—ервис*/ : Service
	{
		public object Any(EHDPrisoedinennyeFajjlyRequest request)
		{
			return new EHDPrisoedinennyeFajjlyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(EHDPrisoedinennyeFajjlyRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.Ёƒѕрисоединенные‘айлы.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new EHDPrisoedinennyeFajjlyResponse() {Result = "Ёƒѕрисоединенные‘айлы c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.Ёƒѕрисоединенные‘айлы.Ќайтиѕо оду(1);
			}
		}

		public object Get(EHDPrisoedinennyeFajjlysRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.Ёƒѕрисоединенные‘айлы>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.Ёƒѕрисоединенные‘айлы.Ќайтиѕо оду(—трока од);
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
