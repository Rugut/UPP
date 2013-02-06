
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OrganyPFR")]
	[Route("/Catalogs/OrganyPFR/{Code}")]
	public class OrganyPFRRequest/*ОрганыПФРЗапрос*/: V82.СправочникиСсылка.ОрганыПФР,IReturn<OrganyPFRRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OrganyPFRResponse//ОрганыПФРОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OrganyPFRs")]
	[Route("/Catalogs/OrganyPFRs/{Codes}")]
	public class OrganyPFRsRequest/*ОрганыПФРЗапрос*/: IReturn<List<OrganyPFRRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OrganyPFRsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OrganyPFRsResponse//ОрганыПФРОтвет
	{
		public string Result {get;set;}
	}


	public class OrganyPFRService /*ОрганыПФРСервис*/ : Service
	{
		public object Any(OrganyPFRRequest request)
		{
			return new OrganyPFRResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OrganyPFRRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ОрганыПФР.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new OrganyPFRResponse() {Result = "ОрганыПФР c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(OrganyPFRsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОрганыПФР>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ОрганыПФР.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
