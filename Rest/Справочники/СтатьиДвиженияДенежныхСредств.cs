
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/StatiDvizheniyaDenezhnykhSredstv")]
	[Route("/Catalogs/StatiDvizheniyaDenezhnykhSredstv/FindById/{Id}")]
	[Route("/Catalogs/StatiDvizheniyaDenezhnykhSredstv/FindByCode/{Code}")]
	[Route("/Catalogs/StatiDvizheniyaDenezhnykhSredstv/FindByDescr/{Descr}")]
	public class StatiDvizheniyaDenezhnykhSredstvRequest/*СтатьиДвиженияДенежныхСредствЗапрос*/: V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств,IReturn<StatiDvizheniyaDenezhnykhSredstvRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StatiDvizheniyaDenezhnykhSredstvResponse//СтатьиДвиженияДенежныхСредствОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StatiDvizheniyaDenezhnykhSredstvs")]
	[Route("/Catalogs/StatiDvizheniyaDenezhnykhSredstvs/{Codes}")]
	public class StatiDvizheniyaDenezhnykhSredstvsRequest/*СтатьиДвиженияДенежныхСредствЗапрос*/: IReturn<List<StatiDvizheniyaDenezhnykhSredstvRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StatiDvizheniyaDenezhnykhSredstvsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StatiDvizheniyaDenezhnykhSredstvsResponse//СтатьиДвиженияДенежныхСредствОтвет
	{
		public string Result {get;set;}
	}


	public class StatiDvizheniyaDenezhnykhSredstvService /*СтатьиДвиженияДенежныхСредствСервис*/ : Service
	{
		public object Any(StatiDvizheniyaDenezhnykhSredstvRequest request)
		{
			return new StatiDvizheniyaDenezhnykhSredstvResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StatiDvizheniyaDenezhnykhSredstvRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СтатьиДвиженияДенежныхСредств.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new StatiDvizheniyaDenezhnykhSredstvResponse() {Result = "СтатьиДвиженияДенежныхСредств c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(StatiDvizheniyaDenezhnykhSredstvsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СтатьиДвиженияДенежныхСредств.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}