
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/KlassifikatorEdinicIzmereniya")]
	[Route("/Catalogs/KlassifikatorEdinicIzmereniya/{Code}")]
	public class KlassifikatorEdinicIzmereniyaRequest/* лассификатор≈диниц»змерени€«апрос*/: V82.—правочники—сылка. лассификатор≈диниц»змерени€,IReturn<KlassifikatorEdinicIzmereniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlassifikatorEdinicIzmereniyaResponse// лассификатор≈диниц»змерени€ќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlassifikatorEdinicIzmereniyas")]
	[Route("/Catalogs/KlassifikatorEdinicIzmereniyas/{Codes}")]
	public class KlassifikatorEdinicIzmereniyasRequest/* лассификатор≈диниц»змерени€«апрос*/: IReturn<List<KlassifikatorEdinicIzmereniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlassifikatorEdinicIzmereniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlassifikatorEdinicIzmereniyasResponse// лассификатор≈диниц»змерени€ќтвет
	{
		public string Result {get;set;}
	}


	public class KlassifikatorEdinicIzmereniyaService /* лассификатор≈диниц»змерени€—ервис*/ : Service
	{
		public object Any(KlassifikatorEdinicIzmereniyaRequest request)
		{
			return new KlassifikatorEdinicIzmereniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlassifikatorEdinicIzmereniyaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники. лассификатор≈диниц»змерени€.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new KlassifikatorEdinicIzmereniyaResponse() {Result = " лассификатор≈диниц»змерени€ c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники. лассификатор≈диниц»змерени€.Ќайтиѕо оду(1);
			}
		}

		public object Get(KlassifikatorEdinicIzmereniyasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка. лассификатор≈диниц»змерени€>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники. лассификатор≈диниц»змерени€.Ќайтиѕо оду(—трока од);
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
