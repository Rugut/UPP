
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/KlassifikatorIspolzovaniyaRabochegoVremeni")]
	[Route("/Catalogs/KlassifikatorIspolzovaniyaRabochegoVremeni/{Code}")]
	public class KlassifikatorIspolzovaniyaRabochegoVremeniRequest/* лассификатор»спользовани€–абочего¬ремени«апрос*/: V82.—правочники—сылка. лассификатор»спользовани€–абочего¬ремени,IReturn<KlassifikatorIspolzovaniyaRabochegoVremeniRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlassifikatorIspolzovaniyaRabochegoVremeniResponse// лассификатор»спользовани€–абочего¬ремениќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlassifikatorIspolzovaniyaRabochegoVremenis")]
	[Route("/Catalogs/KlassifikatorIspolzovaniyaRabochegoVremenis/{Codes}")]
	public class KlassifikatorIspolzovaniyaRabochegoVremenisRequest/* лассификатор»спользовани€–абочего¬ремени«апрос*/: IReturn<List<KlassifikatorIspolzovaniyaRabochegoVremeniRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlassifikatorIspolzovaniyaRabochegoVremenisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlassifikatorIspolzovaniyaRabochegoVremenisResponse// лассификатор»спользовани€–абочего¬ремениќтвет
	{
		public string Result {get;set;}
	}


	public class KlassifikatorIspolzovaniyaRabochegoVremeniService /* лассификатор»спользовани€–абочего¬ремени—ервис*/ : Service
	{
		public object Any(KlassifikatorIspolzovaniyaRabochegoVremeniRequest request)
		{
			return new KlassifikatorIspolzovaniyaRabochegoVremeniResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlassifikatorIspolzovaniyaRabochegoVremeniRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники. лассификатор»спользовани€–абочего¬ремени.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new KlassifikatorIspolzovaniyaRabochegoVremeniResponse() {Result = " лассификатор»спользовани€–абочего¬ремени c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники. лассификатор»спользовани€–абочего¬ремени.Ќайтиѕо оду(1);
			}
		}

		public object Get(KlassifikatorIspolzovaniyaRabochegoVremenisRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка. лассификатор»спользовани€–абочего¬ремени>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники. лассификатор»спользовани€–абочего¬ремени.Ќайтиѕо оду(—трока од);
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
