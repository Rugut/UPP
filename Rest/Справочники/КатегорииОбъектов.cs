
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KategoriiObektov")]
	[Route("/Catalogs/KategoriiObektov/{Code}")]
	public class KategoriiObektovRequest/*КатегорииОбъектовЗапрос*/: V82.СправочникиСсылка.КатегорииОбъектов,IReturn<KategoriiObektovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KategoriiObektovResponse//КатегорииОбъектовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KategoriiObektovs")]
	[Route("/Catalogs/KategoriiObektovs/{Codes}")]
	public class KategoriiObektovsRequest/*КатегорииОбъектовЗапрос*/: IReturn<List<KategoriiObektovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KategoriiObektovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KategoriiObektovsResponse//КатегорииОбъектовОтвет
	{
		public string Result {get;set;}
	}


	public class KategoriiObektovService /*КатегорииОбъектовСервис*/ : Service
	{
		public object Any(KategoriiObektovRequest request)
		{
			return new KategoriiObektovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KategoriiObektovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КатегорииОбъектов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KategoriiObektovResponse() {Result = "КатегорииОбъектов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КатегорииОбъектов.НайтиПоКоду(1);
			}
		}

		public object Get(KategoriiObektovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КатегорииОбъектов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КатегорииОбъектов.НайтиПоКоду(СтрокаКод);
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
