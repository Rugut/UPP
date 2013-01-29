
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/CennyeBumagi")]
	[Route("/Catalogs/CennyeBumagi/{Code}")]
	public class CennyeBumagiRequest/*÷енныеЅумаги«апрос*/: V82.—правочники—сылка.÷енныеЅумаги,IReturn<CennyeBumagiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class CennyeBumagiResponse//÷енныеЅумагиќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/CennyeBumagis")]
	[Route("/Catalogs/CennyeBumagis/{Codes}")]
	public class CennyeBumagisRequest/*÷енныеЅумаги«апрос*/: IReturn<List<CennyeBumagiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public CennyeBumagisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class CennyeBumagisResponse//÷енныеЅумагиќтвет
	{
		public string Result {get;set;}
	}


	public class CennyeBumagiService /*÷енныеЅумаги—ервис*/ : Service
	{
		public object Any(CennyeBumagiRequest request)
		{
			return new CennyeBumagiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(CennyeBumagiRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.÷енныеЅумаги.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new CennyeBumagiResponse() {Result = "÷енныеЅумаги c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.÷енныеЅумаги.Ќайтиѕо оду(1);
			}
		}

		public object Get(CennyeBumagisRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.÷енныеЅумаги>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.÷енныеЅумаги.Ќайтиѕо оду(—трока од);
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
