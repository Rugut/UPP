
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/PodrazdeleniyaOrganizacijj")]
	[Route("/Catalogs/PodrazdeleniyaOrganizacijj/FindById/{Id}")]
	[Route("/Catalogs/PodrazdeleniyaOrganizacijj/FindByCode/{Code}")]
	[Route("/Catalogs/PodrazdeleniyaOrganizacijj/FindByDescr/{Descr}")]
	public class PodrazdeleniyaOrganizacijjRequest/*ПодразделенияОрганизацийЗапрос*/: V82.СправочникиСсылка.ПодразделенияОрганизаций,IReturn<PodrazdeleniyaOrganizacijjRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PodrazdeleniyaOrganizacijjResponse//ПодразделенияОрганизацийОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/PodrazdeleniyaOrganizacijjs")]
	[Route("/Catalogs/PodrazdeleniyaOrganizacijjs/{Codes}")]
	public class PodrazdeleniyaOrganizacijjsRequest/*ПодразделенияОрганизацийЗапрос*/: IReturn<List<PodrazdeleniyaOrganizacijjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PodrazdeleniyaOrganizacijjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PodrazdeleniyaOrganizacijjsResponse//ПодразделенияОрганизацийОтвет
	{
		public string Result {get;set;}
	}


	public class PodrazdeleniyaOrganizacijjService /*ПодразделенияОрганизацийСервис*/ : Service
	{
		public object Any(PodrazdeleniyaOrganizacijjRequest request)
		{
			return new PodrazdeleniyaOrganizacijjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PodrazdeleniyaOrganizacijjRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ПодразделенияОрганизаций.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new PodrazdeleniyaOrganizacijjResponse() {Result = "ПодразделенияОрганизаций c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(PodrazdeleniyaOrganizacijjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПодразделенияОрганизаций>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ПодразделенияОрганизаций.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}