
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/UchetnyeZapisiEHlektronnojjPochty")]
	[Route("/Catalogs/UchetnyeZapisiEHlektronnojjPochty/{Code}")]
	public class UchetnyeZapisiEHlektronnojjPochtyRequest/*”четные«аписиЁлектроннойѕочты«апрос*/: V82.—правочники—сылка.”четные«аписиЁлектроннойѕочты,IReturn<UchetnyeZapisiEHlektronnojjPochtyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class UchetnyeZapisiEHlektronnojjPochtyResponse//”четные«аписиЁлектроннойѕочтыќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/UchetnyeZapisiEHlektronnojjPochtys")]
	[Route("/Catalogs/UchetnyeZapisiEHlektronnojjPochtys/{Codes}")]
	public class UchetnyeZapisiEHlektronnojjPochtysRequest/*”четные«аписиЁлектроннойѕочты«апрос*/: IReturn<List<UchetnyeZapisiEHlektronnojjPochtyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public UchetnyeZapisiEHlektronnojjPochtysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class UchetnyeZapisiEHlektronnojjPochtysResponse//”четные«аписиЁлектроннойѕочтыќтвет
	{
		public string Result {get;set;}
	}


	public class UchetnyeZapisiEHlektronnojjPochtyService /*”четные«аписиЁлектроннойѕочты—ервис*/ : Service
	{
		public object Any(UchetnyeZapisiEHlektronnojjPochtyRequest request)
		{
			return new UchetnyeZapisiEHlektronnojjPochtyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(UchetnyeZapisiEHlektronnojjPochtyRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.”четные«аписиЁлектроннойѕочты.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new UchetnyeZapisiEHlektronnojjPochtyResponse() {Result = "”четные«аписиЁлектроннойѕочты c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.”четные«аписиЁлектроннойѕочты.Ќайтиѕо оду(1);
			}
		}

		public object Get(UchetnyeZapisiEHlektronnojjPochtysRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.”четные«аписиЁлектроннойѕочты>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.”четные«аписиЁлектроннойѕочты.Ќайтиѕо оду(—трока од);
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
