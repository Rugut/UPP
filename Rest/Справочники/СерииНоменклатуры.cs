
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SeriiNomenklatury")]
	[Route("/Catalogs/SeriiNomenklatury/{Code}")]
	public class SeriiNomenklaturyRequest/*СерииНоменклатурыЗапрос*/: V82.СправочникиСсылка.СерииНоменклатуры,IReturn<SeriiNomenklaturyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SeriiNomenklaturyResponse//СерииНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SeriiNomenklaturys")]
	[Route("/Catalogs/SeriiNomenklaturys/{Codes}")]
	public class SeriiNomenklaturysRequest/*СерииНоменклатурыЗапрос*/: IReturn<List<SeriiNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SeriiNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SeriiNomenklaturysResponse//СерииНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class SeriiNomenklaturyService /*СерииНоменклатурыСервис*/ : Service
	{
		public object Any(SeriiNomenklaturyRequest request)
		{
			return new SeriiNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SeriiNomenklaturyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СерииНоменклатуры.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SeriiNomenklaturyResponse() {Result = "СерииНоменклатуры c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SeriiNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СерииНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СерииНоменклатуры.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
