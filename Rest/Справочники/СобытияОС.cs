
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SobytiyaOS")]
	[Route("/Catalogs/SobytiyaOS/{Code}")]
	public class SobytiyaOSRequest/*СобытияОСЗапрос*/: V82.СправочникиСсылка.СобытияОС,IReturn<SobytiyaOSRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SobytiyaOSResponse//СобытияОСОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SobytiyaOSs")]
	[Route("/Catalogs/SobytiyaOSs/{Codes}")]
	public class SobytiyaOSsRequest/*СобытияОСЗапрос*/: IReturn<List<SobytiyaOSRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SobytiyaOSsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SobytiyaOSsResponse//СобытияОСОтвет
	{
		public string Result {get;set;}
	}


	public class SobytiyaOSService /*СобытияОССервис*/ : Service
	{
		public object Any(SobytiyaOSRequest request)
		{
			return new SobytiyaOSResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SobytiyaOSRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СобытияОС.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SobytiyaOSResponse() {Result = "СобытияОС c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SobytiyaOSsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СобытияОС>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СобытияОС.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
