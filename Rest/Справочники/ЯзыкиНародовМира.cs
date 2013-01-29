
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/YAzykiNarodovMira")]
	[Route("/Catalogs/YAzykiNarodovMira/{Code}")]
	public class YAzykiNarodovMiraRequest/*языкиЌародовћира«апрос*/: V82.—правочники—сылка.языкиЌародовћира,IReturn<YAzykiNarodovMiraRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class YAzykiNarodovMiraResponse//языкиЌародовћираќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/YAzykiNarodovMiras")]
	[Route("/Catalogs/YAzykiNarodovMiras/{Codes}")]
	public class YAzykiNarodovMirasRequest/*языкиЌародовћира«апрос*/: IReturn<List<YAzykiNarodovMiraRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public YAzykiNarodovMirasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class YAzykiNarodovMirasResponse//языкиЌародовћираќтвет
	{
		public string Result {get;set;}
	}


	public class YAzykiNarodovMiraService /*языкиЌародовћира—ервис*/ : Service
	{
		public object Any(YAzykiNarodovMiraRequest request)
		{
			return new YAzykiNarodovMiraResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(YAzykiNarodovMiraRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.языкиЌародовћира.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new YAzykiNarodovMiraResponse() {Result = "языкиЌародовћира c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.языкиЌародовћира.Ќайтиѕо оду(1);
			}
		}

		public object Get(YAzykiNarodovMirasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.языкиЌародовћира>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.языкиЌародовћира.Ќайтиѕо оду(—трока од);
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
