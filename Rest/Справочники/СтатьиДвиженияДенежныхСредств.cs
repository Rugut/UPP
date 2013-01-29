
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/StatiDvizheniyaDenezhnykhSredstv")]
	[Route("/Catalogs/StatiDvizheniyaDenezhnykhSredstv/{Code}")]
	public class StatiDvizheniyaDenezhnykhSredstvRequest/*—татьиƒвижени€ƒенежных—редств«апрос*/: V82.—правочники—сылка.—татьиƒвижени€ƒенежных—редств,IReturn<StatiDvizheniyaDenezhnykhSredstvRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StatiDvizheniyaDenezhnykhSredstvResponse//—татьиƒвижени€ƒенежных—редствќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StatiDvizheniyaDenezhnykhSredstvs")]
	[Route("/Catalogs/StatiDvizheniyaDenezhnykhSredstvs/{Codes}")]
	public class StatiDvizheniyaDenezhnykhSredstvsRequest/*—татьиƒвижени€ƒенежных—редств«апрос*/: IReturn<List<StatiDvizheniyaDenezhnykhSredstvRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StatiDvizheniyaDenezhnykhSredstvsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StatiDvizheniyaDenezhnykhSredstvsResponse//—татьиƒвижени€ƒенежных—редствќтвет
	{
		public string Result {get;set;}
	}


	public class StatiDvizheniyaDenezhnykhSredstvService /*—татьиƒвижени€ƒенежных—редств—ервис*/ : Service
	{
		public object Any(StatiDvizheniyaDenezhnykhSredstvRequest request)
		{
			return new StatiDvizheniyaDenezhnykhSredstvResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StatiDvizheniyaDenezhnykhSredstvRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—татьиƒвижени€ƒенежных—редств.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new StatiDvizheniyaDenezhnykhSredstvResponse() {Result = "—татьиƒвижени€ƒенежных—редств c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—татьиƒвижени€ƒенежных—редств.Ќайтиѕо оду(1);
			}
		}

		public object Get(StatiDvizheniyaDenezhnykhSredstvsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—татьиƒвижени€ƒенежных—редств>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—татьиƒвижени€ƒенежных—редств.Ќайтиѕо оду(—трока од);
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
