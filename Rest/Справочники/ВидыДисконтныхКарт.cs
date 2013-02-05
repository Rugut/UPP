
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyDiskontnykhKart")]
	[Route("/Catalogs/VidyDiskontnykhKart/{Code}")]
	public class VidyDiskontnykhKartRequest/*ВидыДисконтныхКартЗапрос*/: V82.СправочникиСсылка.ВидыДисконтныхКарт,IReturn<VidyDiskontnykhKartRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyDiskontnykhKartResponse//ВидыДисконтныхКартОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyDiskontnykhKarts")]
	[Route("/Catalogs/VidyDiskontnykhKarts/{Codes}")]
	public class VidyDiskontnykhKartsRequest/*ВидыДисконтныхКартЗапрос*/: IReturn<List<VidyDiskontnykhKartRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyDiskontnykhKartsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyDiskontnykhKartsResponse//ВидыДисконтныхКартОтвет
	{
		public string Result {get;set;}
	}


	public class VidyDiskontnykhKartService /*ВидыДисконтныхКартСервис*/ : Service
	{
		public object Any(VidyDiskontnykhKartRequest request)
		{
			return new VidyDiskontnykhKartResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyDiskontnykhKartRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ВидыДисконтныхКарт.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyDiskontnykhKartResponse() {Result = "ВидыДисконтныхКарт c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyDiskontnykhKartsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыДисконтныхКарт>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ВидыДисконтныхКарт.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
