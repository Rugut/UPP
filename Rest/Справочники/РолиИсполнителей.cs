
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/RoliIspolnitelejj")]
	[Route("/Catalogs/RoliIspolnitelejj/{Code}")]
	public class RoliIspolnitelejjRequest/*РолиИсполнителейЗапрос*/: V82.СправочникиСсылка.РолиИсполнителей,IReturn<RoliIspolnitelejjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RoliIspolnitelejjResponse//РолиИсполнителейОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/RoliIspolnitelejjs")]
	[Route("/Catalogs/RoliIspolnitelejjs/{Codes}")]
	public class RoliIspolnitelejjsRequest/*РолиИсполнителейЗапрос*/: IReturn<List<RoliIspolnitelejjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RoliIspolnitelejjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RoliIspolnitelejjsResponse//РолиИсполнителейОтвет
	{
		public string Result {get;set;}
	}


	public class RoliIspolnitelejjService /*РолиИсполнителейСервис*/ : Service
	{
		public object Any(RoliIspolnitelejjRequest request)
		{
			return new RoliIspolnitelejjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RoliIspolnitelejjRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.РолиИсполнителей.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new RoliIspolnitelejjResponse() {Result = "РолиИсполнителей c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(RoliIspolnitelejjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.РолиИсполнителей>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.РолиИсполнителей.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
