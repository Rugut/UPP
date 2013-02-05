
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TarifyPochtovogoSbora")]
	[Route("/Catalogs/TarifyPochtovogoSbora/{Code}")]
	public class TarifyPochtovogoSboraRequest/*ТарифыПочтовогоСбораЗапрос*/: V82.СправочникиСсылка.ТарифыПочтовогоСбора,IReturn<TarifyPochtovogoSboraRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TarifyPochtovogoSboraResponse//ТарифыПочтовогоСбораОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TarifyPochtovogoSboras")]
	[Route("/Catalogs/TarifyPochtovogoSboras/{Codes}")]
	public class TarifyPochtovogoSborasRequest/*ТарифыПочтовогоСбораЗапрос*/: IReturn<List<TarifyPochtovogoSboraRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TarifyPochtovogoSborasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TarifyPochtovogoSborasResponse//ТарифыПочтовогоСбораОтвет
	{
		public string Result {get;set;}
	}


	public class TarifyPochtovogoSboraService /*ТарифыПочтовогоСбораСервис*/ : Service
	{
		public object Any(TarifyPochtovogoSboraRequest request)
		{
			return new TarifyPochtovogoSboraResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TarifyPochtovogoSboraRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ТарифыПочтовогоСбора.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TarifyPochtovogoSboraResponse() {Result = "ТарифыПочтовогоСбора c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TarifyPochtovogoSborasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТарифыПочтовогоСбора>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ТарифыПочтовогоСбора.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
