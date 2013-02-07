
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OrganyFSGS")]
	[Route("/Catalogs/OrganyFSGS/FindById/{Id}")]
	[Route("/Catalogs/OrganyFSGS/FindByCode/{Code}")]
	[Route("/Catalogs/OrganyFSGS/FindByDescr/{Descr}")]
	public class OrganyFSGSRequest/*ОрганыФСГСЗапрос*/: V82.СправочникиСсылка.ОрганыФСГС,IReturn<OrganyFSGSRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OrganyFSGSResponse//ОрганыФСГСОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OrganyFSGSs")]
	[Route("/Catalogs/OrganyFSGSs/{Codes}")]
	public class OrganyFSGSsRequest/*ОрганыФСГСЗапрос*/: IReturn<List<OrganyFSGSRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OrganyFSGSsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OrganyFSGSsResponse//ОрганыФСГСОтвет
	{
		public string Result {get;set;}
	}


	public class OrganyFSGSService /*ОрганыФСГССервис*/ : Service
	{
		public object Any(OrganyFSGSRequest request)
		{
			return new OrganyFSGSResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OrganyFSGSRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ОрганыФСГС.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new OrganyFSGSResponse() {Result = "ОрганыФСГС c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(OrganyFSGSsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОрганыФСГС>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ОрганыФСГС.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}