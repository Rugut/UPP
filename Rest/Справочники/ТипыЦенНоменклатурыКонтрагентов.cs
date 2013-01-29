
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/TipyCenNomenklaturyKontragentov")]
	[Route("/Catalogs/TipyCenNomenklaturyKontragentov/{Code}")]
	public class TipyCenNomenklaturyKontragentovRequest/*“ипы÷енЌоменклатуры онтрагентов«апрос*/: V82.—правочники—сылка.“ипы÷енЌоменклатуры онтрагентов,IReturn<TipyCenNomenklaturyKontragentovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipyCenNomenklaturyKontragentovResponse//“ипы÷енЌоменклатуры онтрагентовќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipyCenNomenklaturyKontragentovs")]
	[Route("/Catalogs/TipyCenNomenklaturyKontragentovs/{Codes}")]
	public class TipyCenNomenklaturyKontragentovsRequest/*“ипы÷енЌоменклатуры онтрагентов«апрос*/: IReturn<List<TipyCenNomenklaturyKontragentovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipyCenNomenklaturyKontragentovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipyCenNomenklaturyKontragentovsResponse//“ипы÷енЌоменклатуры онтрагентовќтвет
	{
		public string Result {get;set;}
	}


	public class TipyCenNomenklaturyKontragentovService /*“ипы÷енЌоменклатуры онтрагентов—ервис*/ : Service
	{
		public object Any(TipyCenNomenklaturyKontragentovRequest request)
		{
			return new TipyCenNomenklaturyKontragentovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipyCenNomenklaturyKontragentovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.“ипы÷енЌоменклатуры онтрагентов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new TipyCenNomenklaturyKontragentovResponse() {Result = "“ипы÷енЌоменклатуры онтрагентов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.“ипы÷енЌоменклатуры онтрагентов.Ќайтиѕо оду(1);
			}
		}

		public object Get(TipyCenNomenklaturyKontragentovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.“ипы÷енЌоменклатуры онтрагентов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.“ипы÷енЌоменклатуры онтрагентов.Ќайтиѕо оду(—трока од);
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
