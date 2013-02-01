
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlyuchiAnalitikiUchetaPartijj")]
	[Route("/Catalogs/KlyuchiAnalitikiUchetaPartijj/{Code}")]
	public class KlyuchiAnalitikiUchetaPartijjRequest/*КлючиАналитикиУчетаПартийЗапрос*/: V82.СправочникиСсылка.КлючиАналитикиУчетаПартий,IReturn<KlyuchiAnalitikiUchetaPartijjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlyuchiAnalitikiUchetaPartijjResponse//КлючиАналитикиУчетаПартийОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlyuchiAnalitikiUchetaPartijjs")]
	[Route("/Catalogs/KlyuchiAnalitikiUchetaPartijjs/{Codes}")]
	public class KlyuchiAnalitikiUchetaPartijjsRequest/*КлючиАналитикиУчетаПартийЗапрос*/: IReturn<List<KlyuchiAnalitikiUchetaPartijjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlyuchiAnalitikiUchetaPartijjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlyuchiAnalitikiUchetaPartijjsResponse//КлючиАналитикиУчетаПартийОтвет
	{
		public string Result {get;set;}
	}


	public class KlyuchiAnalitikiUchetaPartijjService /*КлючиАналитикиУчетаПартийСервис*/ : Service
	{
		public object Any(KlyuchiAnalitikiUchetaPartijjRequest request)
		{
			return new KlyuchiAnalitikiUchetaPartijjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlyuchiAnalitikiUchetaPartijjRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КлючиАналитикиУчетаПартий.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KlyuchiAnalitikiUchetaPartijjResponse() {Result = "КлючиАналитикиУчетаПартий c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КлючиАналитикиУчетаПартий.НайтиПоКоду(1);
			}
		}

		public object Get(KlyuchiAnalitikiUchetaPartijjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлючиАналитикиУчетаПартий>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КлючиАналитикиУчетаПартий.НайтиПоКоду(СтрокаКод);
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
