
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlyuchiAnalitikiRaspredeleniyaZatrat")]
	[Route("/Catalogs/KlyuchiAnalitikiRaspredeleniyaZatrat/{Code}")]
	public class KlyuchiAnalitikiRaspredeleniyaZatratRequest/*КлючиАналитикиРаспределенияЗатратЗапрос*/: V82.СправочникиСсылка.КлючиАналитикиРаспределенияЗатрат,IReturn<KlyuchiAnalitikiRaspredeleniyaZatratRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlyuchiAnalitikiRaspredeleniyaZatratResponse//КлючиАналитикиРаспределенияЗатратОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlyuchiAnalitikiRaspredeleniyaZatrats")]
	[Route("/Catalogs/KlyuchiAnalitikiRaspredeleniyaZatrats/{Codes}")]
	public class KlyuchiAnalitikiRaspredeleniyaZatratsRequest/*КлючиАналитикиРаспределенияЗатратЗапрос*/: IReturn<List<KlyuchiAnalitikiRaspredeleniyaZatratRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlyuchiAnalitikiRaspredeleniyaZatratsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlyuchiAnalitikiRaspredeleniyaZatratsResponse//КлючиАналитикиРаспределенияЗатратОтвет
	{
		public string Result {get;set;}
	}


	public class KlyuchiAnalitikiRaspredeleniyaZatratService /*КлючиАналитикиРаспределенияЗатратСервис*/ : Service
	{
		public object Any(KlyuchiAnalitikiRaspredeleniyaZatratRequest request)
		{
			return new KlyuchiAnalitikiRaspredeleniyaZatratResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlyuchiAnalitikiRaspredeleniyaZatratRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КлючиАналитикиРаспределенияЗатрат.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KlyuchiAnalitikiRaspredeleniyaZatratResponse() {Result = "КлючиАналитикиРаспределенияЗатрат c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КлючиАналитикиРаспределенияЗатрат.НайтиПоКоду(1);
			}
		}

		public object Get(KlyuchiAnalitikiRaspredeleniyaZatratsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлючиАналитикиРаспределенияЗатрат>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КлючиАналитикиРаспределенияЗатрат.НайтиПоКоду(СтрокаКод);
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
