
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NaznacheniyaIspolzovaniyaSpecifikacijj")]
	[Route("/Catalogs/NaznacheniyaIspolzovaniyaSpecifikacijj/{Code}")]
	public class NaznacheniyaIspolzovaniyaSpecifikacijjRequest/*НазначенияИспользованияСпецификацийЗапрос*/: V82.СправочникиСсылка.НазначенияИспользованияСпецификаций,IReturn<NaznacheniyaIspolzovaniyaSpecifikacijjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NaznacheniyaIspolzovaniyaSpecifikacijjResponse//НазначенияИспользованияСпецификацийОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NaznacheniyaIspolzovaniyaSpecifikacijjs")]
	[Route("/Catalogs/NaznacheniyaIspolzovaniyaSpecifikacijjs/{Codes}")]
	public class NaznacheniyaIspolzovaniyaSpecifikacijjsRequest/*НазначенияИспользованияСпецификацийЗапрос*/: IReturn<List<NaznacheniyaIspolzovaniyaSpecifikacijjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NaznacheniyaIspolzovaniyaSpecifikacijjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NaznacheniyaIspolzovaniyaSpecifikacijjsResponse//НазначенияИспользованияСпецификацийОтвет
	{
		public string Result {get;set;}
	}


	public class NaznacheniyaIspolzovaniyaSpecifikacijjService /*НазначенияИспользованияСпецификацийСервис*/ : Service
	{
		public object Any(NaznacheniyaIspolzovaniyaSpecifikacijjRequest request)
		{
			return new NaznacheniyaIspolzovaniyaSpecifikacijjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NaznacheniyaIspolzovaniyaSpecifikacijjRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.НазначенияИспользованияСпецификаций.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NaznacheniyaIspolzovaniyaSpecifikacijjResponse() {Result = "НазначенияИспользованияСпецификаций c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.НазначенияИспользованияСпецификаций.НайтиПоКоду(1);
			}
		}

		public object Get(NaznacheniyaIspolzovaniyaSpecifikacijjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НазначенияИспользованияСпецификаций>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.НазначенияИспользованияСпецификаций.НайтиПоКоду(СтрокаКод);
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
