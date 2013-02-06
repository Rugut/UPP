
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ObshherossijjskijjKlassifikatorProdukcii")]
	[Route("/Catalogs/ObshherossijjskijjKlassifikatorProdukcii/{Code}")]
	public class ObshherossijjskijjKlassifikatorProdukciiRequest/*ОбщероссийскийКлассификаторПродукцииЗапрос*/: V82.СправочникиСсылка.ОбщероссийскийКлассификаторПродукции,IReturn<ObshherossijjskijjKlassifikatorProdukciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ObshherossijjskijjKlassifikatorProdukciiResponse//ОбщероссийскийКлассификаторПродукцииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ObshherossijjskijjKlassifikatorProdukciis")]
	[Route("/Catalogs/ObshherossijjskijjKlassifikatorProdukciis/{Codes}")]
	public class ObshherossijjskijjKlassifikatorProdukciisRequest/*ОбщероссийскийКлассификаторПродукцииЗапрос*/: IReturn<List<ObshherossijjskijjKlassifikatorProdukciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ObshherossijjskijjKlassifikatorProdukciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ObshherossijjskijjKlassifikatorProdukciisResponse//ОбщероссийскийКлассификаторПродукцииОтвет
	{
		public string Result {get;set;}
	}


	public class ObshherossijjskijjKlassifikatorProdukciiService /*ОбщероссийскийКлассификаторПродукцииСервис*/ : Service
	{
		public object Any(ObshherossijjskijjKlassifikatorProdukciiRequest request)
		{
			return new ObshherossijjskijjKlassifikatorProdukciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ObshherossijjskijjKlassifikatorProdukciiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ОбщероссийскийКлассификаторПродукции.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ObshherossijjskijjKlassifikatorProdukciiResponse() {Result = "ОбщероссийскийКлассификаторПродукции c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ObshherossijjskijjKlassifikatorProdukciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОбщероссийскийКлассификаторПродукции>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ОбщероссийскийКлассификаторПродукции.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
