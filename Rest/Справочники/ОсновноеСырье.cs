
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/OsnovnoeSyre")]
	[Route("/Catalogs/OsnovnoeSyre/{Code}")]
	public class OsnovnoeSyreRequest/*ќсновное—ырье«апрос*/: V82.—правочники—сылка.ќсновное—ырье,IReturn<OsnovnoeSyreRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsnovnoeSyreResponse//ќсновное—ырьеќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsnovnoeSyres")]
	[Route("/Catalogs/OsnovnoeSyres/{Codes}")]
	public class OsnovnoeSyresRequest/*ќсновное—ырье«апрос*/: IReturn<List<OsnovnoeSyreRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsnovnoeSyresRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsnovnoeSyresResponse//ќсновное—ырьеќтвет
	{
		public string Result {get;set;}
	}


	public class OsnovnoeSyreService /*ќсновное—ырье—ервис*/ : Service
	{
		public object Any(OsnovnoeSyreRequest request)
		{
			return new OsnovnoeSyreResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsnovnoeSyreRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ќсновное—ырье.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new OsnovnoeSyreResponse() {Result = "ќсновное—ырье c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ќсновное—ырье.Ќайтиѕо оду(1);
			}
		}

		public object Get(OsnovnoeSyresRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ќсновное—ырье>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ќсновное—ырье.Ќайтиѕо оду(—трока од);
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
