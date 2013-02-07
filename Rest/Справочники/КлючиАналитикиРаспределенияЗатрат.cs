
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlyuchiAnalitikiRaspredeleniyaZatrat")]
	[Route("/Catalogs/KlyuchiAnalitikiRaspredeleniyaZatrat/FindById/{Id}")]
	[Route("/Catalogs/KlyuchiAnalitikiRaspredeleniyaZatrat/FindByCode/{Code}")]
	[Route("/Catalogs/KlyuchiAnalitikiRaspredeleniyaZatrat/FindByDescr/{Descr}")]
	public class KlyuchiAnalitikiRaspredeleniyaZatratRequest/*КлючиАналитикиРаспределенияЗатратЗапрос*/: V82.СправочникиСсылка.КлючиАналитикиРаспределенияЗатрат,IReturn<KlyuchiAnalitikiRaspredeleniyaZatratRequest>
	{
		public string Id { get; set; }
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
			return null;
		}

		public object Get(KlyuchiAnalitikiRaspredeleniyaZatratsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлючиАналитикиРаспределенияЗатрат>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}