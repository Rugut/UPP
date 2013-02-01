
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Valyuty")]
	[Route("/Catalogs/Valyuty/{Code}")]
	public class ValyutyRequest/*ВалютыЗапрос*/: V82.СправочникиСсылка.Валюты,IReturn<ValyutyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ValyutyResponse//ВалютыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Valyutys")]
	[Route("/Catalogs/Valyutys/{Codes}")]
	public class ValyutysRequest/*ВалютыЗапрос*/: IReturn<List<ValyutyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ValyutysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ValyutysResponse//ВалютыОтвет
	{
		public string Result {get;set;}
	}


	public class ValyutyService /*ВалютыСервис*/ : Service
	{
		public object Any(ValyutyRequest request)
		{
			return new ValyutyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ValyutyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.Валюты.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new ValyutyResponse() {Result = "Валюты c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.Валюты.НайтиПоКоду(1);
			}
		}

		public object Get(ValyutysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Валюты>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.Валюты.НайтиПоКоду(СтрокаКод);
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
