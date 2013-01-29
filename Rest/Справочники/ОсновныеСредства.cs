
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/OsnovnyeSredstva")]
	[Route("/Catalogs/OsnovnyeSredstva/{Code}")]
	public class OsnovnyeSredstvaRequest/*ќсновные—редства«апрос*/: V82.—правочники—сылка.ќсновные—редства,IReturn<OsnovnyeSredstvaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsnovnyeSredstvaResponse//ќсновные—редстваќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsnovnyeSredstvas")]
	[Route("/Catalogs/OsnovnyeSredstvas/{Codes}")]
	public class OsnovnyeSredstvasRequest/*ќсновные—редства«апрос*/: IReturn<List<OsnovnyeSredstvaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsnovnyeSredstvasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsnovnyeSredstvasResponse//ќсновные—редстваќтвет
	{
		public string Result {get;set;}
	}


	public class OsnovnyeSredstvaService /*ќсновные—редства—ервис*/ : Service
	{
		public object Any(OsnovnyeSredstvaRequest request)
		{
			return new OsnovnyeSredstvaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsnovnyeSredstvaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ќсновные—редства.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new OsnovnyeSredstvaResponse() {Result = "ќсновные—редства c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ќсновные—редства.Ќайтиѕо оду(1);
			}
		}

		public object Get(OsnovnyeSredstvasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ќсновные—редства>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ќсновные—редства.Ќайтиѕо оду(—трока од);
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
