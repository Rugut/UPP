
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/OsnovaniyaIschislyaemogoTrudovogoStazha")]
	[Route("/Catalogs/OsnovaniyaIschislyaemogoTrudovogoStazha/{Code}")]
	public class OsnovaniyaIschislyaemogoTrudovogoStazhaRequest/*ќсновани€»счисл€емого“рудового—тажа«апрос*/: V82.—правочники—сылка.ќсновани€»счисл€емого“рудового—тажа,IReturn<OsnovaniyaIschislyaemogoTrudovogoStazhaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsnovaniyaIschislyaemogoTrudovogoStazhaResponse//ќсновани€»счисл€емого“рудового—тажаќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsnovaniyaIschislyaemogoTrudovogoStazhas")]
	[Route("/Catalogs/OsnovaniyaIschislyaemogoTrudovogoStazhas/{Codes}")]
	public class OsnovaniyaIschislyaemogoTrudovogoStazhasRequest/*ќсновани€»счисл€емого“рудового—тажа«апрос*/: IReturn<List<OsnovaniyaIschislyaemogoTrudovogoStazhaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsnovaniyaIschislyaemogoTrudovogoStazhasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsnovaniyaIschislyaemogoTrudovogoStazhasResponse//ќсновани€»счисл€емого“рудового—тажаќтвет
	{
		public string Result {get;set;}
	}


	public class OsnovaniyaIschislyaemogoTrudovogoStazhaService /*ќсновани€»счисл€емого“рудового—тажа—ервис*/ : Service
	{
		public object Any(OsnovaniyaIschislyaemogoTrudovogoStazhaRequest request)
		{
			return new OsnovaniyaIschislyaemogoTrudovogoStazhaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsnovaniyaIschislyaemogoTrudovogoStazhaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ќсновани€»счисл€емого“рудового—тажа.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new OsnovaniyaIschislyaemogoTrudovogoStazhaResponse() {Result = "ќсновани€»счисл€емого“рудового—тажа c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ќсновани€»счисл€емого“рудового—тажа.Ќайтиѕо оду(1);
			}
		}

		public object Get(OsnovaniyaIschislyaemogoTrudovogoStazhasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ќсновани€»счисл€емого“рудового—тажа>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ќсновани€»счисл€емого“рудового—тажа.Ќайтиѕо оду(—трока од);
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
