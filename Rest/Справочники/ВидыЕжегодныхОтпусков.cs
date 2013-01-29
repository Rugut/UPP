
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/VidyEzhegodnykhOtpuskov")]
	[Route("/Catalogs/VidyEzhegodnykhOtpuskov/{Code}")]
	public class VidyEzhegodnykhOtpuskovRequest/*¬иды≈жегодныхќтпусков«апрос*/: V82.—правочники—сылка.¬иды≈жегодныхќтпусков,IReturn<VidyEzhegodnykhOtpuskovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyEzhegodnykhOtpuskovResponse//¬иды≈жегодныхќтпусковќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyEzhegodnykhOtpuskovs")]
	[Route("/Catalogs/VidyEzhegodnykhOtpuskovs/{Codes}")]
	public class VidyEzhegodnykhOtpuskovsRequest/*¬иды≈жегодныхќтпусков«апрос*/: IReturn<List<VidyEzhegodnykhOtpuskovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyEzhegodnykhOtpuskovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyEzhegodnykhOtpuskovsResponse//¬иды≈жегодныхќтпусковќтвет
	{
		public string Result {get;set;}
	}


	public class VidyEzhegodnykhOtpuskovService /*¬иды≈жегодныхќтпусков—ервис*/ : Service
	{
		public object Any(VidyEzhegodnykhOtpuskovRequest request)
		{
			return new VidyEzhegodnykhOtpuskovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyEzhegodnykhOtpuskovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.¬иды≈жегодныхќтпусков.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new VidyEzhegodnykhOtpuskovResponse() {Result = "¬иды≈жегодныхќтпусков c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.¬иды≈жегодныхќтпусков.Ќайтиѕо оду(1);
			}
		}

		public object Get(VidyEzhegodnykhOtpuskovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.¬иды≈жегодныхќтпусков>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.¬иды≈жегодныхќтпусков.Ќайтиѕо оду(—трока од);
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
