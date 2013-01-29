
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/OsnovaniyaUvolneniyaIzOrganizacii")]
	[Route("/Catalogs/OsnovaniyaUvolneniyaIzOrganizacii/{Code}")]
	public class OsnovaniyaUvolneniyaIzOrganizaciiRequest/*ќсновани€”вольнени€»зќрганизации«апрос*/: V82.—правочники—сылка.ќсновани€”вольнени€»зќрганизации,IReturn<OsnovaniyaUvolneniyaIzOrganizaciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsnovaniyaUvolneniyaIzOrganizaciiResponse//ќсновани€”вольнени€»зќрганизацииќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsnovaniyaUvolneniyaIzOrganizaciis")]
	[Route("/Catalogs/OsnovaniyaUvolneniyaIzOrganizaciis/{Codes}")]
	public class OsnovaniyaUvolneniyaIzOrganizaciisRequest/*ќсновани€”вольнени€»зќрганизации«апрос*/: IReturn<List<OsnovaniyaUvolneniyaIzOrganizaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsnovaniyaUvolneniyaIzOrganizaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsnovaniyaUvolneniyaIzOrganizaciisResponse//ќсновани€”вольнени€»зќрганизацииќтвет
	{
		public string Result {get;set;}
	}


	public class OsnovaniyaUvolneniyaIzOrganizaciiService /*ќсновани€”вольнени€»зќрганизации—ервис*/ : Service
	{
		public object Any(OsnovaniyaUvolneniyaIzOrganizaciiRequest request)
		{
			return new OsnovaniyaUvolneniyaIzOrganizaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsnovaniyaUvolneniyaIzOrganizaciiRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ќсновани€”вольнени€»зќрганизации.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new OsnovaniyaUvolneniyaIzOrganizaciiResponse() {Result = "ќсновани€”вольнени€»зќрганизации c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ќсновани€”вольнени€»зќрганизации.Ќайтиѕо оду(1);
			}
		}

		public object Get(OsnovaniyaUvolneniyaIzOrganizaciisRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ќсновани€”вольнени€»зќрганизации>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ќсновани€”вольнени€»зќрганизации.Ќайтиѕо оду(—трока од);
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
