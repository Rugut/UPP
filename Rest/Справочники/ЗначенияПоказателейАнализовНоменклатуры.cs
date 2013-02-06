
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ZnacheniyaPokazatelejjAnalizovNomenklatury")]
	[Route("/Catalogs/ZnacheniyaPokazatelejjAnalizovNomenklatury/{Code}")]
	public class ZnacheniyaPokazatelejjAnalizovNomenklaturyRequest/*ЗначенияПоказателейАнализовНоменклатурыЗапрос*/: V82.СправочникиСсылка.ЗначенияПоказателейАнализовНоменклатуры,IReturn<ZnacheniyaPokazatelejjAnalizovNomenklaturyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ZnacheniyaPokazatelejjAnalizovNomenklaturyResponse//ЗначенияПоказателейАнализовНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ZnacheniyaPokazatelejjAnalizovNomenklaturys")]
	[Route("/Catalogs/ZnacheniyaPokazatelejjAnalizovNomenklaturys/{Codes}")]
	public class ZnacheniyaPokazatelejjAnalizovNomenklaturysRequest/*ЗначенияПоказателейАнализовНоменклатурыЗапрос*/: IReturn<List<ZnacheniyaPokazatelejjAnalizovNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ZnacheniyaPokazatelejjAnalizovNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ZnacheniyaPokazatelejjAnalizovNomenklaturysResponse//ЗначенияПоказателейАнализовНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class ZnacheniyaPokazatelejjAnalizovNomenklaturyService /*ЗначенияПоказателейАнализовНоменклатурыСервис*/ : Service
	{
		public object Any(ZnacheniyaPokazatelejjAnalizovNomenklaturyRequest request)
		{
			return new ZnacheniyaPokazatelejjAnalizovNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ZnacheniyaPokazatelejjAnalizovNomenklaturyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ЗначенияПоказателейАнализовНоменклатуры.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ZnacheniyaPokazatelejjAnalizovNomenklaturyResponse() {Result = "ЗначенияПоказателейАнализовНоменклатуры c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ZnacheniyaPokazatelejjAnalizovNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЗначенияПоказателейАнализовНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ЗначенияПоказателейАнализовНоменклатуры.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
