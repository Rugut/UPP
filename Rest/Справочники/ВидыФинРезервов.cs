
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/VidyFinRezervov")]
	[Route("/Catalogs/VidyFinRezervov/{Code}")]
	public class VidyFinRezervovRequest/*¬иды‘ин–езервов«апрос*/: V82.—правочники—сылка.¬иды‘ин–езервов,IReturn<VidyFinRezervovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyFinRezervovResponse//¬иды‘ин–езервовќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyFinRezervovs")]
	[Route("/Catalogs/VidyFinRezervovs/{Codes}")]
	public class VidyFinRezervovsRequest/*¬иды‘ин–езервов«апрос*/: IReturn<List<VidyFinRezervovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyFinRezervovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyFinRezervovsResponse//¬иды‘ин–езервовќтвет
	{
		public string Result {get;set;}
	}


	public class VidyFinRezervovService /*¬иды‘ин–езервов—ервис*/ : Service
	{
		public object Any(VidyFinRezervovRequest request)
		{
			return new VidyFinRezervovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyFinRezervovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.¬иды‘ин–езервов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new VidyFinRezervovResponse() {Result = "¬иды‘ин–езервов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.¬иды‘ин–езервов.Ќайтиѕо оду(1);
			}
		}

		public object Get(VidyFinRezervovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.¬иды‘ин–езервов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.¬иды‘ин–езервов.Ќайтиѕо оду(—трока од);
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
