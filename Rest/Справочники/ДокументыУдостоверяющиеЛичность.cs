
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnost")]
	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnost/{Code}")]
	public class DokumentyUdostoveryayushhieLichnostRequest/*ƒокументы”достовер€ющиеЋичность«апрос*/: V82.—правочники—сылка.ƒокументы”достовер€ющиеЋичность,IReturn<DokumentyUdostoveryayushhieLichnostRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokumentyUdostoveryayushhieLichnostResponse//ƒокументы”достовер€ющиеЋичностьќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnosts")]
	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnosts/{Codes}")]
	public class DokumentyUdostoveryayushhieLichnostsRequest/*ƒокументы”достовер€ющиеЋичность«апрос*/: IReturn<List<DokumentyUdostoveryayushhieLichnostRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokumentyUdostoveryayushhieLichnostsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokumentyUdostoveryayushhieLichnostsResponse//ƒокументы”достовер€ющиеЋичностьќтвет
	{
		public string Result {get;set;}
	}


	public class DokumentyUdostoveryayushhieLichnostService /*ƒокументы”достовер€ющиеЋичность—ервис*/ : Service
	{
		public object Any(DokumentyUdostoveryayushhieLichnostRequest request)
		{
			return new DokumentyUdostoveryayushhieLichnostResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokumentyUdostoveryayushhieLichnostRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ƒокументы”достовер€ющиеЋичность.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new DokumentyUdostoveryayushhieLichnostResponse() {Result = "ƒокументы”достовер€ющиеЋичность c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ƒокументы”достовер€ющиеЋичность.Ќайтиѕо оду(1);
			}
		}

		public object Get(DokumentyUdostoveryayushhieLichnostsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ƒокументы”достовер€ющиеЋичность>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ƒокументы”достовер€ющиеЋичность.Ќайтиѕо оду(—трока од);
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
