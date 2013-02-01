
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NapravleniyaIspolzovaniyaPribyli")]
	[Route("/Catalogs/NapravleniyaIspolzovaniyaPribyli/{Code}")]
	public class NapravleniyaIspolzovaniyaPribyliRequest/*НаправленияИспользованияПрибылиЗапрос*/: V82.СправочникиСсылка.НаправленияИспользованияПрибыли,IReturn<NapravleniyaIspolzovaniyaPribyliRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NapravleniyaIspolzovaniyaPribyliResponse//НаправленияИспользованияПрибылиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NapravleniyaIspolzovaniyaPribylis")]
	[Route("/Catalogs/NapravleniyaIspolzovaniyaPribylis/{Codes}")]
	public class NapravleniyaIspolzovaniyaPribylisRequest/*НаправленияИспользованияПрибылиЗапрос*/: IReturn<List<NapravleniyaIspolzovaniyaPribyliRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NapravleniyaIspolzovaniyaPribylisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NapravleniyaIspolzovaniyaPribylisResponse//НаправленияИспользованияПрибылиОтвет
	{
		public string Result {get;set;}
	}


	public class NapravleniyaIspolzovaniyaPribyliService /*НаправленияИспользованияПрибылиСервис*/ : Service
	{
		public object Any(NapravleniyaIspolzovaniyaPribyliRequest request)
		{
			return new NapravleniyaIspolzovaniyaPribyliResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NapravleniyaIspolzovaniyaPribyliRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.НаправленияИспользованияПрибыли.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NapravleniyaIspolzovaniyaPribyliResponse() {Result = "НаправленияИспользованияПрибыли c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.НаправленияИспользованияПрибыли.НайтиПоКоду(1);
			}
		}

		public object Get(NapravleniyaIspolzovaniyaPribylisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НаправленияИспользованияПрибыли>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.НаправленияИспользованияПрибыли.НайтиПоКоду(СтрокаКод);
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
