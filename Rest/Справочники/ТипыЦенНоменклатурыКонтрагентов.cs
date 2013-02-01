
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TipyCenNomenklaturyKontragentov")]
	[Route("/Catalogs/TipyCenNomenklaturyKontragentov/{Code}")]
	public class TipyCenNomenklaturyKontragentovRequest/*ТипыЦенНоменклатурыКонтрагентовЗапрос*/: V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов,IReturn<TipyCenNomenklaturyKontragentovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipyCenNomenklaturyKontragentovResponse//ТипыЦенНоменклатурыКонтрагентовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipyCenNomenklaturyKontragentovs")]
	[Route("/Catalogs/TipyCenNomenklaturyKontragentovs/{Codes}")]
	public class TipyCenNomenklaturyKontragentovsRequest/*ТипыЦенНоменклатурыКонтрагентовЗапрос*/: IReturn<List<TipyCenNomenklaturyKontragentovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipyCenNomenklaturyKontragentovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipyCenNomenklaturyKontragentovsResponse//ТипыЦенНоменклатурыКонтрагентовОтвет
	{
		public string Result {get;set;}
	}


	public class TipyCenNomenklaturyKontragentovService /*ТипыЦенНоменклатурыКонтрагентовСервис*/ : Service
	{
		public object Any(TipyCenNomenklaturyKontragentovRequest request)
		{
			return new TipyCenNomenklaturyKontragentovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipyCenNomenklaturyKontragentovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ТипыЦенНоменклатурыКонтрагентов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new TipyCenNomenklaturyKontragentovResponse() {Result = "ТипыЦенНоменклатурыКонтрагентов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ТипыЦенНоменклатурыКонтрагентов.НайтиПоКоду(1);
			}
		}

		public object Get(TipyCenNomenklaturyKontragentovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ТипыЦенНоменклатурыКонтрагентов.НайтиПоКоду(СтрокаКод);
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
