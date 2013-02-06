
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/StatiOborotovPoByudzhetam")]
	[Route("/Catalogs/StatiOborotovPoByudzhetam/{Code}")]
	public class StatiOborotovPoByudzhetamRequest/*СтатьиОборотовПоБюджетамЗапрос*/: V82.СправочникиСсылка.СтатьиОборотовПоБюджетам,IReturn<StatiOborotovPoByudzhetamRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StatiOborotovPoByudzhetamResponse//СтатьиОборотовПоБюджетамОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StatiOborotovPoByudzhetams")]
	[Route("/Catalogs/StatiOborotovPoByudzhetams/{Codes}")]
	public class StatiOborotovPoByudzhetamsRequest/*СтатьиОборотовПоБюджетамЗапрос*/: IReturn<List<StatiOborotovPoByudzhetamRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StatiOborotovPoByudzhetamsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StatiOborotovPoByudzhetamsResponse//СтатьиОборотовПоБюджетамОтвет
	{
		public string Result {get;set;}
	}


	public class StatiOborotovPoByudzhetamService /*СтатьиОборотовПоБюджетамСервис*/ : Service
	{
		public object Any(StatiOborotovPoByudzhetamRequest request)
		{
			return new StatiOborotovPoByudzhetamResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StatiOborotovPoByudzhetamRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СтатьиОборотовПоБюджетам.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new StatiOborotovPoByudzhetamResponse() {Result = "СтатьиОборотовПоБюджетам c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(StatiOborotovPoByudzhetamsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СтатьиОборотовПоБюджетам>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СтатьиОборотовПоБюджетам.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
