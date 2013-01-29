
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/TipySkidokNacenok")]
	[Route("/Catalogs/TipySkidokNacenok/{Code}")]
	public class TipySkidokNacenokRequest/*“ипы—кидокЌаценок«апрос*/: V82.—правочники—сылка.“ипы—кидокЌаценок,IReturn<TipySkidokNacenokRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipySkidokNacenokResponse//“ипы—кидокЌаценокќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipySkidokNacenoks")]
	[Route("/Catalogs/TipySkidokNacenoks/{Codes}")]
	public class TipySkidokNacenoksRequest/*“ипы—кидокЌаценок«апрос*/: IReturn<List<TipySkidokNacenokRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipySkidokNacenoksRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipySkidokNacenoksResponse//“ипы—кидокЌаценокќтвет
	{
		public string Result {get;set;}
	}


	public class TipySkidokNacenokService /*“ипы—кидокЌаценок—ервис*/ : Service
	{
		public object Any(TipySkidokNacenokRequest request)
		{
			return new TipySkidokNacenokResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipySkidokNacenokRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.“ипы—кидокЌаценок.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new TipySkidokNacenokResponse() {Result = "“ипы—кидокЌаценок c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.“ипы—кидокЌаценок.Ќайтиѕо оду(1);
			}
		}

		public object Get(TipySkidokNacenoksRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.“ипы—кидокЌаценок>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.“ипы—кидокЌаценок.Ќайтиѕо оду(—трока од);
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
