
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/ObshherossijjskijjKlassifikatorOsnovnykhFondov")]
	[Route("/Catalogs/ObshherossijjskijjKlassifikatorOsnovnykhFondov/{Code}")]
	public class ObshherossijjskijjKlassifikatorOsnovnykhFondovRequest/*ќбщероссийский лассификаторќсновных‘ондов«апрос*/: V82.—правочники—сылка.ќбщероссийский лассификаторќсновных‘ондов,IReturn<ObshherossijjskijjKlassifikatorOsnovnykhFondovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ObshherossijjskijjKlassifikatorOsnovnykhFondovResponse//ќбщероссийский лассификаторќсновных‘ондовќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ObshherossijjskijjKlassifikatorOsnovnykhFondovs")]
	[Route("/Catalogs/ObshherossijjskijjKlassifikatorOsnovnykhFondovs/{Codes}")]
	public class ObshherossijjskijjKlassifikatorOsnovnykhFondovsRequest/*ќбщероссийский лассификаторќсновных‘ондов«апрос*/: IReturn<List<ObshherossijjskijjKlassifikatorOsnovnykhFondovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ObshherossijjskijjKlassifikatorOsnovnykhFondovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ObshherossijjskijjKlassifikatorOsnovnykhFondovsResponse//ќбщероссийский лассификаторќсновных‘ондовќтвет
	{
		public string Result {get;set;}
	}


	public class ObshherossijjskijjKlassifikatorOsnovnykhFondovService /*ќбщероссийский лассификаторќсновных‘ондов—ервис*/ : Service
	{
		public object Any(ObshherossijjskijjKlassifikatorOsnovnykhFondovRequest request)
		{
			return new ObshherossijjskijjKlassifikatorOsnovnykhFondovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ObshherossijjskijjKlassifikatorOsnovnykhFondovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ќбщероссийский лассификаторќсновных‘ондов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new ObshherossijjskijjKlassifikatorOsnovnykhFondovResponse() {Result = "ќбщероссийский лассификаторќсновных‘ондов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ќбщероссийский лассификаторќсновных‘ондов.Ќайтиѕо оду(1);
			}
		}

		public object Get(ObshherossijjskijjKlassifikatorOsnovnykhFondovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ќбщероссийский лассификаторќсновных‘ондов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ќбщероссийский лассификаторќсновных‘ондов.Ќайтиѕо оду(—трока од);
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
