
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/UsloviyaProdazh")]
	[Route("/Catalogs/UsloviyaProdazh/{Code}")]
	public class UsloviyaProdazhRequest/*УсловияПродажЗапрос*/: V82.СправочникиСсылка.УсловияПродаж,IReturn<UsloviyaProdazhRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class UsloviyaProdazhResponse//УсловияПродажОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/UsloviyaProdazhs")]
	[Route("/Catalogs/UsloviyaProdazhs/{Codes}")]
	public class UsloviyaProdazhsRequest/*УсловияПродажЗапрос*/: IReturn<List<UsloviyaProdazhRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public UsloviyaProdazhsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class UsloviyaProdazhsResponse//УсловияПродажОтвет
	{
		public string Result {get;set;}
	}


	public class UsloviyaProdazhService /*УсловияПродажСервис*/ : Service
	{
		public object Any(UsloviyaProdazhRequest request)
		{
			return new UsloviyaProdazhResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(UsloviyaProdazhRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.УсловияПродаж.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new UsloviyaProdazhResponse() {Result = "УсловияПродаж c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(UsloviyaProdazhsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.УсловияПродаж>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.УсловияПродаж.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
