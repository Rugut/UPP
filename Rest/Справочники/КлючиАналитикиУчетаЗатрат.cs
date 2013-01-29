
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlyuchiAnalitikiUchetaZatrat")]
	[Route("/Catalogs/KlyuchiAnalitikiUchetaZatrat/{Code}")]
	public class KlyuchiAnalitikiUchetaZatratRequest/*КлючиАналитикиУчетаЗатратЗапрос*/: V82.СправочникиСсылка.КлючиАналитикиУчетаЗатрат,IReturn<KlyuchiAnalitikiUchetaZatratRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlyuchiAnalitikiUchetaZatratResponse//КлючиАналитикиУчетаЗатратОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlyuchiAnalitikiUchetaZatrats")]
	[Route("/Catalogs/KlyuchiAnalitikiUchetaZatrats/{Codes}")]
	public class KlyuchiAnalitikiUchetaZatratsRequest/*КлючиАналитикиУчетаЗатратЗапрос*/: IReturn<List<KlyuchiAnalitikiUchetaZatratRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlyuchiAnalitikiUchetaZatratsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlyuchiAnalitikiUchetaZatratsResponse//КлючиАналитикиУчетаЗатратОтвет
	{
		public string Result {get;set;}
	}


	public class KlyuchiAnalitikiUchetaZatratService /*КлючиАналитикиУчетаЗатратСервис*/ : Service
	{
		public object Any(KlyuchiAnalitikiUchetaZatratRequest request)
		{
			return new KlyuchiAnalitikiUchetaZatratResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlyuchiAnalitikiUchetaZatratRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КлючиАналитикиУчетаЗатрат.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KlyuchiAnalitikiUchetaZatratResponse() {Result = "КлючиАналитикиУчетаЗатрат c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КлючиАналитикиУчетаЗатрат.НайтиПоКоду(1);
			}
		}

		public object Get(KlyuchiAnalitikiUchetaZatratsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлючиАналитикиУчетаЗатрат>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КлючиАналитикиУчетаЗатрат.НайтиПоКоду(СтрокаКод);
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
