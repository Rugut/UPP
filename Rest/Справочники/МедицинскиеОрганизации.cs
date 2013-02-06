
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/MedicinskieOrganizacii")]
	[Route("/Catalogs/MedicinskieOrganizacii/{Code}")]
	public class MedicinskieOrganizaciiRequest/*МедицинскиеОрганизацииЗапрос*/: V82.СправочникиСсылка.МедицинскиеОрганизации,IReturn<MedicinskieOrganizaciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class MedicinskieOrganizaciiResponse//МедицинскиеОрганизацииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/MedicinskieOrganizaciis")]
	[Route("/Catalogs/MedicinskieOrganizaciis/{Codes}")]
	public class MedicinskieOrganizaciisRequest/*МедицинскиеОрганизацииЗапрос*/: IReturn<List<MedicinskieOrganizaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public MedicinskieOrganizaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class MedicinskieOrganizaciisResponse//МедицинскиеОрганизацииОтвет
	{
		public string Result {get;set;}
	}


	public class MedicinskieOrganizaciiService /*МедицинскиеОрганизацииСервис*/ : Service
	{
		public object Any(MedicinskieOrganizaciiRequest request)
		{
			return new MedicinskieOrganizaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(MedicinskieOrganizaciiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.МедицинскиеОрганизации.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new MedicinskieOrganizaciiResponse() {Result = "МедицинскиеОрганизации c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(MedicinskieOrganizaciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.МедицинскиеОрганизации>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.МедицинскиеОрганизации.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
