
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/RoliKontaktnykhLic")]
	[Route("/Catalogs/RoliKontaktnykhLic/{Code}")]
	public class RoliKontaktnykhLicRequest/*РолиКонтактныхЛицЗапрос*/: V82.СправочникиСсылка.РолиКонтактныхЛиц,IReturn<RoliKontaktnykhLicRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RoliKontaktnykhLicResponse//РолиКонтактныхЛицОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/RoliKontaktnykhLics")]
	[Route("/Catalogs/RoliKontaktnykhLics/{Codes}")]
	public class RoliKontaktnykhLicsRequest/*РолиКонтактныхЛицЗапрос*/: IReturn<List<RoliKontaktnykhLicRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RoliKontaktnykhLicsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RoliKontaktnykhLicsResponse//РолиКонтактныхЛицОтвет
	{
		public string Result {get;set;}
	}


	public class RoliKontaktnykhLicService /*РолиКонтактныхЛицСервис*/ : Service
	{
		public object Any(RoliKontaktnykhLicRequest request)
		{
			return new RoliKontaktnykhLicResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RoliKontaktnykhLicRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.РолиКонтактныхЛиц.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new RoliKontaktnykhLicResponse() {Result = "РолиКонтактныхЛиц c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(RoliKontaktnykhLicsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.РолиКонтактныхЛиц>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.РолиКонтактныхЛиц.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
