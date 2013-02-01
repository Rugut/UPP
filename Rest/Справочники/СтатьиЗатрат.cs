
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/StatiZatrat")]
	[Route("/Catalogs/StatiZatrat/{Code}")]
	public class StatiZatratRequest/*СтатьиЗатратЗапрос*/: V82.СправочникиСсылка.СтатьиЗатрат,IReturn<StatiZatratRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StatiZatratResponse//СтатьиЗатратОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StatiZatrats")]
	[Route("/Catalogs/StatiZatrats/{Codes}")]
	public class StatiZatratsRequest/*СтатьиЗатратЗапрос*/: IReturn<List<StatiZatratRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StatiZatratsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StatiZatratsResponse//СтатьиЗатратОтвет
	{
		public string Result {get;set;}
	}


	public class StatiZatratService /*СтатьиЗатратСервис*/ : Service
	{
		public object Any(StatiZatratRequest request)
		{
			return new StatiZatratResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StatiZatratRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СтатьиЗатрат.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new StatiZatratResponse() {Result = "СтатьиЗатрат c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СтатьиЗатрат.НайтиПоКоду(1);
			}
		}

		public object Get(StatiZatratsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СтатьиЗатрат>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СтатьиЗатрат.НайтиПоКоду(СтрокаКод);
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
