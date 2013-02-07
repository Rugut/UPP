
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TipovyeAnalizyNomenklatury")]
	[Route("/Catalogs/TipovyeAnalizyNomenklatury/FindById/{Id}")]
	[Route("/Catalogs/TipovyeAnalizyNomenklatury/FindByCode/{Code}")]
	[Route("/Catalogs/TipovyeAnalizyNomenklatury/FindByDescr/{Descr}")]
	public class TipovyeAnalizyNomenklaturyRequest/*ТиповыеАнализыНоменклатурыЗапрос*/: V82.СправочникиСсылка.ТиповыеАнализыНоменклатуры,IReturn<TipovyeAnalizyNomenklaturyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipovyeAnalizyNomenklaturyResponse//ТиповыеАнализыНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipovyeAnalizyNomenklaturys")]
	[Route("/Catalogs/TipovyeAnalizyNomenklaturys/{Codes}")]
	public class TipovyeAnalizyNomenklaturysRequest/*ТиповыеАнализыНоменклатурыЗапрос*/: IReturn<List<TipovyeAnalizyNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipovyeAnalizyNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipovyeAnalizyNomenklaturysResponse//ТиповыеАнализыНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class TipovyeAnalizyNomenklaturyService /*ТиповыеАнализыНоменклатурыСервис*/ : Service
	{
		public object Any(TipovyeAnalizyNomenklaturyRequest request)
		{
			return new TipovyeAnalizyNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipovyeAnalizyNomenklaturyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ТиповыеАнализыНоменклатуры.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TipovyeAnalizyNomenklaturyResponse() {Result = "ТиповыеАнализыНоменклатуры c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TipovyeAnalizyNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТиповыеАнализыНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ТиповыеАнализыНоменклатуры.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}