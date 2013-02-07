
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/CennyeBumagi")]
	[Route("/Catalogs/CennyeBumagi/FindById/{Id}")]
	[Route("/Catalogs/CennyeBumagi/FindByCode/{Code}")]
	[Route("/Catalogs/CennyeBumagi/FindByDescr/{Descr}")]
	public class CennyeBumagiRequest/*ЦенныеБумагиЗапрос*/: V82.СправочникиСсылка.ЦенныеБумаги,IReturn<CennyeBumagiRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class CennyeBumagiResponse//ЦенныеБумагиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/CennyeBumagis")]
	[Route("/Catalogs/CennyeBumagis/{Codes}")]
	public class CennyeBumagisRequest/*ЦенныеБумагиЗапрос*/: IReturn<List<CennyeBumagiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public CennyeBumagisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class CennyeBumagisResponse//ЦенныеБумагиОтвет
	{
		public string Result {get;set;}
	}


	public class CennyeBumagiService /*ЦенныеБумагиСервис*/ : Service
	{
		public object Any(CennyeBumagiRequest request)
		{
			return new CennyeBumagiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(CennyeBumagiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ЦенныеБумаги.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new CennyeBumagiResponse() {Result = "ЦенныеБумаги c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(CennyeBumagisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЦенныеБумаги>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ЦенныеБумаги.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}