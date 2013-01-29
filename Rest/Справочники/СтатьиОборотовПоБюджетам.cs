
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/StatiOborotovPoByudzhetam")]
	[Route("/Catalogs/StatiOborotovPoByudzhetam/{Code}")]
	public class StatiOborotovPoByudzhetamRequest/*—татьиќборотовѕоЅюджетам«апрос*/: V82.—правочники—сылка.—татьиќборотовѕоЅюджетам,IReturn<StatiOborotovPoByudzhetamRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StatiOborotovPoByudzhetamResponse//—татьиќборотовѕоЅюджетамќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StatiOborotovPoByudzhetams")]
	[Route("/Catalogs/StatiOborotovPoByudzhetams/{Codes}")]
	public class StatiOborotovPoByudzhetamsRequest/*—татьиќборотовѕоЅюджетам«апрос*/: IReturn<List<StatiOborotovPoByudzhetamRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StatiOborotovPoByudzhetamsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StatiOborotovPoByudzhetamsResponse//—татьиќборотовѕоЅюджетамќтвет
	{
		public string Result {get;set;}
	}


	public class StatiOborotovPoByudzhetamService /*—татьиќборотовѕоЅюджетам—ервис*/ : Service
	{
		public object Any(StatiOborotovPoByudzhetamRequest request)
		{
			return new StatiOborotovPoByudzhetamResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StatiOborotovPoByudzhetamRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—татьиќборотовѕоЅюджетам.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new StatiOborotovPoByudzhetamResponse() {Result = "—татьиќборотовѕоЅюджетам c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—татьиќборотовѕоЅюджетам.Ќайтиѕо оду(1);
			}
		}

		public object Get(StatiOborotovPoByudzhetamsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—татьиќборотовѕоЅюджетам>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—татьиќборотовѕоЅюджетам.Ќайтиѕо оду(—трока од);
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
