
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ParametryVyrabotkiOS")]
	[Route("/Catalogs/ParametryVyrabotkiOS/{Code}")]
	public class ParametryVyrabotkiOSRequest/*ПараметрыВыработкиОСЗапрос*/: V82.СправочникиСсылка.ПараметрыВыработкиОС,IReturn<ParametryVyrabotkiOSRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ParametryVyrabotkiOSResponse//ПараметрыВыработкиОСОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ParametryVyrabotkiOSs")]
	[Route("/Catalogs/ParametryVyrabotkiOSs/{Codes}")]
	public class ParametryVyrabotkiOSsRequest/*ПараметрыВыработкиОСЗапрос*/: IReturn<List<ParametryVyrabotkiOSRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ParametryVyrabotkiOSsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ParametryVyrabotkiOSsResponse//ПараметрыВыработкиОСОтвет
	{
		public string Result {get;set;}
	}


	public class ParametryVyrabotkiOSService /*ПараметрыВыработкиОССервис*/ : Service
	{
		public object Any(ParametryVyrabotkiOSRequest request)
		{
			return new ParametryVyrabotkiOSResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ParametryVyrabotkiOSRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ПараметрыВыработкиОС.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new ParametryVyrabotkiOSResponse() {Result = "ПараметрыВыработкиОС c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ПараметрыВыработкиОС.НайтиПоКоду(1);
			}
		}

		public object Get(ParametryVyrabotkiOSsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПараметрыВыработкиОС>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ПараметрыВыработкиОС.НайтиПоКоду(СтрокаКод);
					if (Ссылка != null)
					{
						Коллекция.Add(Ссылка);
					}
				}
			}
			return Коллекция;
		}

	}
}
