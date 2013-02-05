
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Organizacii")]
	[Route("/Catalogs/Organizacii/{Code}")]
	public class OrganizaciiRequest/*ОрганизацииЗапрос*/: V82.СправочникиСсылка.Организации,IReturn<OrganizaciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OrganizaciiResponse//ОрганизацииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Organizaciis")]
	[Route("/Catalogs/Organizaciis/{Codes}")]
	public class OrganizaciisRequest/*ОрганизацииЗапрос*/: IReturn<List<OrganizaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OrganizaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OrganizaciisResponse//ОрганизацииОтвет
	{
		public string Result {get;set;}
	}


	public class OrganizaciiService /*ОрганизацииСервис*/ : Service
	{
		public object Any(OrganizaciiRequest request)
		{
			return new OrganizaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OrganizaciiRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.Организации.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new OrganizaciiResponse() {Result = "Организации c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(OrganizaciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Организации>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.Организации.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
