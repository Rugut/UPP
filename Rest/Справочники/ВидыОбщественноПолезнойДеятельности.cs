
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/VidyObshhestvennoPoleznojjDeyatelnosti")]
	[Route("/Catalogs/VidyObshhestvennoPoleznojjDeyatelnosti/{Code}")]
	public class VidyObshhestvennoPoleznojjDeyatelnostiRequest/*¬идыќбщественноѕолезнойƒе€тельности«апрос*/: V82.—правочники—сылка.¬идыќбщественноѕолезнойƒе€тельности,IReturn<VidyObshhestvennoPoleznojjDeyatelnostiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyObshhestvennoPoleznojjDeyatelnostiResponse//¬идыќбщественноѕолезнойƒе€тельностиќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyObshhestvennoPoleznojjDeyatelnostis")]
	[Route("/Catalogs/VidyObshhestvennoPoleznojjDeyatelnostis/{Codes}")]
	public class VidyObshhestvennoPoleznojjDeyatelnostisRequest/*¬идыќбщественноѕолезнойƒе€тельности«апрос*/: IReturn<List<VidyObshhestvennoPoleznojjDeyatelnostiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyObshhestvennoPoleznojjDeyatelnostisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyObshhestvennoPoleznojjDeyatelnostisResponse//¬идыќбщественноѕолезнойƒе€тельностиќтвет
	{
		public string Result {get;set;}
	}


	public class VidyObshhestvennoPoleznojjDeyatelnostiService /*¬идыќбщественноѕолезнойƒе€тельности—ервис*/ : Service
	{
		public object Any(VidyObshhestvennoPoleznojjDeyatelnostiRequest request)
		{
			return new VidyObshhestvennoPoleznojjDeyatelnostiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyObshhestvennoPoleznojjDeyatelnostiRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.¬идыќбщественноѕолезнойƒе€тельности.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new VidyObshhestvennoPoleznojjDeyatelnostiResponse() {Result = "¬идыќбщественноѕолезнойƒе€тельности c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.¬идыќбщественноѕолезнойƒе€тельности.Ќайтиѕо оду(1);
			}
		}

		public object Get(VidyObshhestvennoPoleznojjDeyatelnostisRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.¬идыќбщественноѕолезнойƒе€тельности>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.¬идыќбщественноѕолезнойƒе€тельности.Ќайтиѕо оду(—трока од);
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
