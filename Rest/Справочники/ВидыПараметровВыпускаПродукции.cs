
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyParametrovVypuskaProdukcii")]
	[Route("/Catalogs/VidyParametrovVypuskaProdukcii/FindById/{Id}")]
	[Route("/Catalogs/VidyParametrovVypuskaProdukcii/FindByCode/{Code}")]
	[Route("/Catalogs/VidyParametrovVypuskaProdukcii/FindByDescr/{Descr}")]
	public class VidyParametrovVypuskaProdukciiRequest/*ВидыПараметровВыпускаПродукцииЗапрос*/: V82.СправочникиСсылка.ВидыПараметровВыпускаПродукции,IReturn<VidyParametrovVypuskaProdukciiRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyParametrovVypuskaProdukciiResponse//ВидыПараметровВыпускаПродукцииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyParametrovVypuskaProdukciis")]
	[Route("/Catalogs/VidyParametrovVypuskaProdukciis/{Codes}")]
	public class VidyParametrovVypuskaProdukciisRequest/*ВидыПараметровВыпускаПродукцииЗапрос*/: IReturn<List<VidyParametrovVypuskaProdukciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyParametrovVypuskaProdukciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyParametrovVypuskaProdukciisResponse//ВидыПараметровВыпускаПродукцииОтвет
	{
		public string Result {get;set;}
	}


	public class VidyParametrovVypuskaProdukciiService /*ВидыПараметровВыпускаПродукцииСервис*/ : Service
	{
		public object Any(VidyParametrovVypuskaProdukciiRequest request)
		{
			return new VidyParametrovVypuskaProdukciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyParametrovVypuskaProdukciiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ВидыПараметровВыпускаПродукции.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyParametrovVypuskaProdukciiResponse() {Result = "ВидыПараметровВыпускаПродукции c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyParametrovVypuskaProdukciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыПараметровВыпускаПродукции>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ВидыПараметровВыпускаПродукции.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}