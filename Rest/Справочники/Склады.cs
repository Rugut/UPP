
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Sklady")]
	[Route("/Catalogs/Sklady/{Code}")]
	public class SkladyRequest/*СкладыЗапрос*/: V82.СправочникиСсылка.Склады,IReturn<SkladyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SkladyResponse//СкладыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Skladys")]
	[Route("/Catalogs/Skladys/{Codes}")]
	public class SkladysRequest/*СкладыЗапрос*/: IReturn<List<SkladyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SkladysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SkladysResponse//СкладыОтвет
	{
		public string Result {get;set;}
	}


	public class SkladyService /*СкладыСервис*/ : Service
	{
		public object Any(SkladyRequest request)
		{
			return new SkladyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SkladyRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.Склады.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SkladyResponse() {Result = "Склады c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SkladysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Склады>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.Склады.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
