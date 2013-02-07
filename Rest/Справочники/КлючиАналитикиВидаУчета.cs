
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlyuchiAnalitikiVidaUcheta")]
	[Route("/Catalogs/KlyuchiAnalitikiVidaUcheta/FindById/{Id}")]
	[Route("/Catalogs/KlyuchiAnalitikiVidaUcheta/FindByCode/{Code}")]
	[Route("/Catalogs/KlyuchiAnalitikiVidaUcheta/FindByDescr/{Descr}")]
	public class KlyuchiAnalitikiVidaUchetaRequest/*КлючиАналитикиВидаУчетаЗапрос*/: V82.СправочникиСсылка.КлючиАналитикиВидаУчета,IReturn<KlyuchiAnalitikiVidaUchetaRequest>
	{
		public string Id { get; set; }
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
			return null;
		}

		public object Get(KlyuchiAnalitikiVidaUchetasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлючиАналитикиВидаУчета>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}