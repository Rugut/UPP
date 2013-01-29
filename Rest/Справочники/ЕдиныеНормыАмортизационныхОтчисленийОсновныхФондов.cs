
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondov")]
	[Route("/Catalogs/EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondov/{Code}")]
	public class EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovRequest/*≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондов«апрос*/: V82.—правочники—сылка.≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондов,IReturn<EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovResponse//≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондовќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovs")]
	[Route("/Catalogs/EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovs/{Codes}")]
	public class EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovsRequest/*≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондов«апрос*/: IReturn<List<EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovsResponse//≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондовќтвет
	{
		public string Result {get;set;}
	}


	public class EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovService /*≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондов—ервис*/ : Service
	{
		public object Any(EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovRequest request)
		{
			return new EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovResponse() {Result = "≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондов.Ќайтиѕо оду(1);
			}
		}

		public object Get(EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.≈диныеЌормыјмортизационныхќтчисленийќсновных‘ондов.Ќайтиѕо оду(—трока од);
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
