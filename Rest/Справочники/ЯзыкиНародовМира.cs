
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/YAzykiNarodovMira")]
	[Route("/Catalogs/YAzykiNarodovMira/{Code}")]
	public class YAzykiNarodovMiraRequest/*ЯзыкиНародовМираЗапрос*/: V82.СправочникиСсылка.ЯзыкиНародовМира,IReturn<YAzykiNarodovMiraRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class YAzykiNarodovMiraResponse//ЯзыкиНародовМираОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/YAzykiNarodovMiras")]
	[Route("/Catalogs/YAzykiNarodovMiras/{Codes}")]
	public class YAzykiNarodovMirasRequest/*ЯзыкиНародовМираЗапрос*/: IReturn<List<YAzykiNarodovMiraRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public YAzykiNarodovMirasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class YAzykiNarodovMirasResponse//ЯзыкиНародовМираОтвет
	{
		public string Result {get;set;}
	}


	public class YAzykiNarodovMiraService /*ЯзыкиНародовМираСервис*/ : Service
	{
		public object Any(YAzykiNarodovMiraRequest request)
		{
			return new YAzykiNarodovMiraResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(YAzykiNarodovMiraRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ЯзыкиНародовМира.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new YAzykiNarodovMiraResponse() {Result = "ЯзыкиНародовМира c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(YAzykiNarodovMirasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЯзыкиНародовМира>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ЯзыкиНародовМира.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
