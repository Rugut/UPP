
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/TipovyeAnkety")]
	[Route("/Catalogs/TipovyeAnkety/{Code}")]
	public class TipovyeAnketyRequest/*“иповыејнкеты«апрос*/: V82.—правочники—сылка.“иповыејнкеты,IReturn<TipovyeAnketyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipovyeAnketyResponse//“иповыејнкетыќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipovyeAnketys")]
	[Route("/Catalogs/TipovyeAnketys/{Codes}")]
	public class TipovyeAnketysRequest/*“иповыејнкеты«апрос*/: IReturn<List<TipovyeAnketyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipovyeAnketysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipovyeAnketysResponse//“иповыејнкетыќтвет
	{
		public string Result {get;set;}
	}


	public class TipovyeAnketyService /*“иповыејнкеты—ервис*/ : Service
	{
		public object Any(TipovyeAnketyRequest request)
		{
			return new TipovyeAnketyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipovyeAnketyRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.“иповыејнкеты.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new TipovyeAnketyResponse() {Result = "“иповыејнкеты c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.“иповыејнкеты.Ќайтиѕо оду(1);
			}
		}

		public object Get(TipovyeAnketysRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.“иповыејнкеты>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.“иповыејнкеты.Ќайтиѕо оду(—трока од);
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
