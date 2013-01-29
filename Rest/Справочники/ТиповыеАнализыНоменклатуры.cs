
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/TipovyeAnalizyNomenklatury")]
	[Route("/Catalogs/TipovyeAnalizyNomenklatury/{Code}")]
	public class TipovyeAnalizyNomenklaturyRequest/*“иповыејнализыЌоменклатуры«апрос*/: V82.—правочники—сылка.“иповыејнализыЌоменклатуры,IReturn<TipovyeAnalizyNomenklaturyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipovyeAnalizyNomenklaturyResponse//“иповыејнализыЌоменклатурыќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipovyeAnalizyNomenklaturys")]
	[Route("/Catalogs/TipovyeAnalizyNomenklaturys/{Codes}")]
	public class TipovyeAnalizyNomenklaturysRequest/*“иповыејнализыЌоменклатуры«апрос*/: IReturn<List<TipovyeAnalizyNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipovyeAnalizyNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipovyeAnalizyNomenklaturysResponse//“иповыејнализыЌоменклатурыќтвет
	{
		public string Result {get;set;}
	}


	public class TipovyeAnalizyNomenklaturyService /*“иповыејнализыЌоменклатуры—ервис*/ : Service
	{
		public object Any(TipovyeAnalizyNomenklaturyRequest request)
		{
			return new TipovyeAnalizyNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipovyeAnalizyNomenklaturyRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.“иповыејнализыЌоменклатуры.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new TipovyeAnalizyNomenklaturyResponse() {Result = "“иповыејнализыЌоменклатуры c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.“иповыејнализыЌоменклатуры.Ќайтиѕо оду(1);
			}
		}

		public object Get(TipovyeAnalizyNomenklaturysRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.“иповыејнализыЌоменклатуры>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.“иповыејнализыЌоменклатуры.Ќайтиѕо оду(—трока од);
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
