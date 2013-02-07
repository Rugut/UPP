
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/CiklyObmena")]
	[Route("/Catalogs/CiklyObmena/FindById/{Id}")]
	[Route("/Catalogs/CiklyObmena/FindByCode/{Code}")]
	[Route("/Catalogs/CiklyObmena/FindByDescr/{Descr}")]
	public class CiklyObmenaRequest/*ЦиклыОбменаЗапрос*/: V82.СправочникиСсылка.ЦиклыОбмена,IReturn<CiklyObmenaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class CiklyObmenaResponse//ЦиклыОбменаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/CiklyObmenas")]
	[Route("/Catalogs/CiklyObmenas/{Codes}")]
	public class CiklyObmenasRequest/*ЦиклыОбменаЗапрос*/: IReturn<List<CiklyObmenaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public CiklyObmenasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class CiklyObmenasResponse//ЦиклыОбменаОтвет
	{
		public string Result {get;set;}
	}


	public class CiklyObmenaService /*ЦиклыОбменаСервис*/ : Service
	{
		public object Any(CiklyObmenaRequest request)
		{
			return new CiklyObmenaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(CiklyObmenaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ЦиклыОбмена.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new CiklyObmenaResponse() {Result = "ЦиклыОбмена c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(CiklyObmenasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЦиклыОбмена>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ЦиклыОбмена.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}