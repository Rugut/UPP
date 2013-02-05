
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TipyCenNomenklatury")]
	[Route("/Catalogs/TipyCenNomenklatury/{Code}")]
	public class TipyCenNomenklaturyRequest/*ТипыЦенНоменклатурыЗапрос*/: V82.СправочникиСсылка.ТипыЦенНоменклатуры,IReturn<TipyCenNomenklaturyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipyCenNomenklaturyResponse//ТипыЦенНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipyCenNomenklaturys")]
	[Route("/Catalogs/TipyCenNomenklaturys/{Codes}")]
	public class TipyCenNomenklaturysRequest/*ТипыЦенНоменклатурыЗапрос*/: IReturn<List<TipyCenNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipyCenNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipyCenNomenklaturysResponse//ТипыЦенНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class TipyCenNomenklaturyService /*ТипыЦенНоменклатурыСервис*/ : Service
	{
		public object Any(TipyCenNomenklaturyRequest request)
		{
			return new TipyCenNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipyCenNomenklaturyRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ТипыЦенНоменклатуры.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TipyCenNomenklaturyResponse() {Result = "ТипыЦенНоменклатуры c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TipyCenNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТипыЦенНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ТипыЦенНоменклатуры.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
