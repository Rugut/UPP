
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/KlassifikatorSpecialnostejjPoObrazovaniyu")]
	[Route("/Catalogs/KlassifikatorSpecialnostejjPoObrazovaniyu/{Code}")]
	public class KlassifikatorSpecialnostejjPoObrazovaniyuRequest/* лассификатор—пециальностейѕоќбразованию«апрос*/: V82.—правочники—сылка. лассификатор—пециальностейѕоќбразованию,IReturn<KlassifikatorSpecialnostejjPoObrazovaniyuRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlassifikatorSpecialnostejjPoObrazovaniyuResponse// лассификатор—пециальностейѕоќбразованиюќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlassifikatorSpecialnostejjPoObrazovaniyus")]
	[Route("/Catalogs/KlassifikatorSpecialnostejjPoObrazovaniyus/{Codes}")]
	public class KlassifikatorSpecialnostejjPoObrazovaniyusRequest/* лассификатор—пециальностейѕоќбразованию«апрос*/: IReturn<List<KlassifikatorSpecialnostejjPoObrazovaniyuRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlassifikatorSpecialnostejjPoObrazovaniyusRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlassifikatorSpecialnostejjPoObrazovaniyusResponse// лассификатор—пециальностейѕоќбразованиюќтвет
	{
		public string Result {get;set;}
	}


	public class KlassifikatorSpecialnostejjPoObrazovaniyuService /* лассификатор—пециальностейѕоќбразованию—ервис*/ : Service
	{
		public object Any(KlassifikatorSpecialnostejjPoObrazovaniyuRequest request)
		{
			return new KlassifikatorSpecialnostejjPoObrazovaniyuResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlassifikatorSpecialnostejjPoObrazovaniyuRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники. лассификатор—пециальностейѕоќбразованию.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new KlassifikatorSpecialnostejjPoObrazovaniyuResponse() {Result = " лассификатор—пециальностейѕоќбразованию c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники. лассификатор—пециальностейѕоќбразованию.Ќайтиѕо оду(1);
			}
		}

		public object Get(KlassifikatorSpecialnostejjPoObrazovaniyusRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка. лассификатор—пециальностейѕоќбразованию>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники. лассификатор—пециальностейѕоќбразованию.Ќайтиѕо оду(—трока од);
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
