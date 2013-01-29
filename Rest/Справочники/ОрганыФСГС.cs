
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OrganyFSGS")]
	[Route("/Catalogs/OrganyFSGS/{Code}")]
	public class OrganyFSGSRequest/*ОрганыФСГСЗапрос*/: V82.СправочникиСсылка.ОрганыФСГС,IReturn<OrganyFSGSRequest>
	{
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
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ОрганыФСГС.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new OrganyFSGSResponse() {Result = "ОрганыФСГС c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ОрганыФСГС.НайтиПоКоду(1);
			}
		}

		public object Get(OrganyFSGSsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОрганыФСГС>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ОрганыФСГС.НайтиПоКоду(СтрокаКод);
					if (Ссылка != null)
					{
						Коллекция.Add(Ссылка);
					}
				}
			}
			return Коллекция;
		}

	}
}
