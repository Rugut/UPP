
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlyuchiAnalitikiUchetaProchikhZatrat")]
	[Route("/Catalogs/KlyuchiAnalitikiUchetaProchikhZatrat/{Code}")]
	public class KlyuchiAnalitikiUchetaProchikhZatratRequest/*КлючиАналитикиУчетаПрочихЗатратЗапрос*/: V82.СправочникиСсылка.КлючиАналитикиУчетаПрочихЗатрат,IReturn<KlyuchiAnalitikiUchetaProchikhZatratRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlyuchiAnalitikiUchetaProchikhZatratResponse//КлючиАналитикиУчетаПрочихЗатратОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlyuchiAnalitikiUchetaProchikhZatrats")]
	[Route("/Catalogs/KlyuchiAnalitikiUchetaProchikhZatrats/{Codes}")]
	public class KlyuchiAnalitikiUchetaProchikhZatratsRequest/*КлючиАналитикиУчетаПрочихЗатратЗапрос*/: IReturn<List<KlyuchiAnalitikiUchetaProchikhZatratRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlyuchiAnalitikiUchetaProchikhZatratsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlyuchiAnalitikiUchetaProchikhZatratsResponse//КлючиАналитикиУчетаПрочихЗатратОтвет
	{
		public string Result {get;set;}
	}


	public class KlyuchiAnalitikiUchetaProchikhZatratService /*КлючиАналитикиУчетаПрочихЗатратСервис*/ : Service
	{
		public object Any(KlyuchiAnalitikiUchetaProchikhZatratRequest request)
		{
			return new KlyuchiAnalitikiUchetaProchikhZatratResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlyuchiAnalitikiUchetaProchikhZatratRequest request)
		{
			return null;
		}

		public object Get(KlyuchiAnalitikiUchetaProchikhZatratsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлючиАналитикиУчетаПрочихЗатрат>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					Коллекция.Add(null);
				}
			}
			return Коллекция;
		}

	}
}
