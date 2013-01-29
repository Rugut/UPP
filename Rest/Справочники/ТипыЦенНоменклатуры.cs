
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/TipyCenNomenklatury")]
	[Route("/Catalogs/TipyCenNomenklatury/{Code}")]
	public class TipyCenNomenklaturyRequest/*“ипы÷енЌоменклатуры«апрос*/: V82.—правочники—сылка.“ипы÷енЌоменклатуры,IReturn<TipyCenNomenklaturyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipyCenNomenklaturyResponse//“ипы÷енЌоменклатурыќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipyCenNomenklaturys")]
	[Route("/Catalogs/TipyCenNomenklaturys/{Codes}")]
	public class TipyCenNomenklaturysRequest/*“ипы÷енЌоменклатуры«апрос*/: IReturn<List<TipyCenNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipyCenNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipyCenNomenklaturysResponse//“ипы÷енЌоменклатурыќтвет
	{
		public string Result {get;set;}
	}


	public class TipyCenNomenklaturyService /*“ипы÷енЌоменклатуры—ервис*/ : Service
	{
		public object Any(TipyCenNomenklaturyRequest request)
		{
			return new TipyCenNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipyCenNomenklaturyRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.“ипы÷енЌоменклатуры.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new TipyCenNomenklaturyResponse() {Result = "“ипы÷енЌоменклатуры c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.“ипы÷енЌоменклатуры.Ќайтиѕо оду(1);
			}
		}

		public object Get(TipyCenNomenklaturysRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.“ипы÷енЌоменклатуры>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.“ипы÷енЌоменклатуры.Ќайтиѕо оду(—трока од);
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
