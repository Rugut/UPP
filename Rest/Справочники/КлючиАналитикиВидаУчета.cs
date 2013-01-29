
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlyuchiAnalitikiVidaUcheta")]
	[Route("/Catalogs/KlyuchiAnalitikiVidaUcheta/{Code}")]
	public class KlyuchiAnalitikiVidaUchetaRequest/*КлючиАналитикиВидаУчетаЗапрос*/: V82.СправочникиСсылка.КлючиАналитикиВидаУчета,IReturn<KlyuchiAnalitikiVidaUchetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlyuchiAnalitikiVidaUchetaResponse//КлючиАналитикиВидаУчетаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlyuchiAnalitikiVidaUchetas")]
	[Route("/Catalogs/KlyuchiAnalitikiVidaUchetas/{Codes}")]
	public class KlyuchiAnalitikiVidaUchetasRequest/*КлючиАналитикиВидаУчетаЗапрос*/: IReturn<List<KlyuchiAnalitikiVidaUchetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlyuchiAnalitikiVidaUchetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlyuchiAnalitikiVidaUchetasResponse//КлючиАналитикиВидаУчетаОтвет
	{
		public string Result {get;set;}
	}


	public class KlyuchiAnalitikiVidaUchetaService /*КлючиАналитикиВидаУчетаСервис*/ : Service
	{
		public object Any(KlyuchiAnalitikiVidaUchetaRequest request)
		{
			return new KlyuchiAnalitikiVidaUchetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlyuchiAnalitikiVidaUchetaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КлючиАналитикиВидаУчета.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KlyuchiAnalitikiVidaUchetaResponse() {Result = "КлючиАналитикиВидаУчета c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КлючиАналитикиВидаУчета.НайтиПоКоду(1);
			}
		}

		public object Get(KlyuchiAnalitikiVidaUchetasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлючиАналитикиВидаУчета>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КлючиАналитикиВидаУчета.НайтиПоКоду(СтрокаКод);
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
