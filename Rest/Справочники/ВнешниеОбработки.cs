
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/VneshnieObrabotki")]
	[Route("/Catalogs/VneshnieObrabotki/{Code}")]
	public class VneshnieObrabotkiRequest/*¬нешниеќбработки«апрос*/: V82.—правочники—сылка.¬нешниеќбработки,IReturn<VneshnieObrabotkiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VneshnieObrabotkiResponse//¬нешниеќбработкиќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VneshnieObrabotkis")]
	[Route("/Catalogs/VneshnieObrabotkis/{Codes}")]
	public class VneshnieObrabotkisRequest/*¬нешниеќбработки«апрос*/: IReturn<List<VneshnieObrabotkiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VneshnieObrabotkisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VneshnieObrabotkisResponse//¬нешниеќбработкиќтвет
	{
		public string Result {get;set;}
	}


	public class VneshnieObrabotkiService /*¬нешниеќбработки—ервис*/ : Service
	{
		public object Any(VneshnieObrabotkiRequest request)
		{
			return new VneshnieObrabotkiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VneshnieObrabotkiRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.¬нешниеќбработки.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new VneshnieObrabotkiResponse() {Result = "¬нешниеќбработки c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.¬нешниеќбработки.Ќайтиѕо оду(1);
			}
		}

		public object Get(VneshnieObrabotkisRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.¬нешниеќбработки>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.¬нешниеќбработки.Ќайтиѕо оду(—трока од);
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
