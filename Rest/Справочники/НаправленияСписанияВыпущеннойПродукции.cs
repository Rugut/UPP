
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NapravleniyaSpisaniyaVypushhennojjProdukcii")]
	[Route("/Catalogs/NapravleniyaSpisaniyaVypushhennojjProdukcii/{Code}")]
	public class NapravleniyaSpisaniyaVypushhennojjProdukciiRequest/*НаправленияСписанияВыпущеннойПродукцииЗапрос*/: V82.СправочникиСсылка.НаправленияСписанияВыпущеннойПродукции,IReturn<NapravleniyaSpisaniyaVypushhennojjProdukciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NapravleniyaSpisaniyaVypushhennojjProdukciiResponse//НаправленияСписанияВыпущеннойПродукцииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NapravleniyaSpisaniyaVypushhennojjProdukciis")]
	[Route("/Catalogs/NapravleniyaSpisaniyaVypushhennojjProdukciis/{Codes}")]
	public class NapravleniyaSpisaniyaVypushhennojjProdukciisRequest/*НаправленияСписанияВыпущеннойПродукцииЗапрос*/: IReturn<List<NapravleniyaSpisaniyaVypushhennojjProdukciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NapravleniyaSpisaniyaVypushhennojjProdukciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NapravleniyaSpisaniyaVypushhennojjProdukciisResponse//НаправленияСписанияВыпущеннойПродукцииОтвет
	{
		public string Result {get;set;}
	}


	public class NapravleniyaSpisaniyaVypushhennojjProdukciiService /*НаправленияСписанияВыпущеннойПродукцииСервис*/ : Service
	{
		public object Any(NapravleniyaSpisaniyaVypushhennojjProdukciiRequest request)
		{
			return new NapravleniyaSpisaniyaVypushhennojjProdukciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NapravleniyaSpisaniyaVypushhennojjProdukciiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.НаправленияСписанияВыпущеннойПродукции.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NapravleniyaSpisaniyaVypushhennojjProdukciiResponse() {Result = "НаправленияСписанияВыпущеннойПродукции c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NapravleniyaSpisaniyaVypushhennojjProdukciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НаправленияСписанияВыпущеннойПродукции>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.НаправленияСписанияВыпущеннойПродукции.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
