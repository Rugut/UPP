
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DolzhnostiOrganizacijj")]
	[Route("/Catalogs/DolzhnostiOrganizacijj/{Code}")]
	public class DolzhnostiOrganizacijjRequest/*ДолжностиОрганизацийЗапрос*/: V82.СправочникиСсылка.ДолжностиОрганизаций,IReturn<DolzhnostiOrganizacijjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DolzhnostiOrganizacijjResponse//ДолжностиОрганизацийОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DolzhnostiOrganizacijjs")]
	[Route("/Catalogs/DolzhnostiOrganizacijjs/{Codes}")]
	public class DolzhnostiOrganizacijjsRequest/*ДолжностиОрганизацийЗапрос*/: IReturn<List<DolzhnostiOrganizacijjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DolzhnostiOrganizacijjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DolzhnostiOrganizacijjsResponse//ДолжностиОрганизацийОтвет
	{
		public string Result {get;set;}
	}


	public class DolzhnostiOrganizacijjService /*ДолжностиОрганизацийСервис*/ : Service
	{
		public object Any(DolzhnostiOrganizacijjRequest request)
		{
			return new DolzhnostiOrganizacijjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DolzhnostiOrganizacijjRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ДолжностиОрганизаций.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new DolzhnostiOrganizacijjResponse() {Result = "ДолжностиОрганизаций c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(DolzhnostiOrganizacijjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДолжностиОрганизаций>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ДолжностиОрганизаций.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
