
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SoglasheniyaObIspolzovaniiEHD")]
	[Route("/Catalogs/SoglasheniyaObIspolzovaniiEHD/{Code}")]
	public class SoglasheniyaObIspolzovaniiEHDRequest/*СоглашенияОбИспользованииЭДЗапрос*/: V82.СправочникиСсылка.СоглашенияОбИспользованииЭД,IReturn<SoglasheniyaObIspolzovaniiEHDRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SoglasheniyaObIspolzovaniiEHDResponse//СоглашенияОбИспользованииЭДОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SoglasheniyaObIspolzovaniiEHDs")]
	[Route("/Catalogs/SoglasheniyaObIspolzovaniiEHDs/{Codes}")]
	public class SoglasheniyaObIspolzovaniiEHDsRequest/*СоглашенияОбИспользованииЭДЗапрос*/: IReturn<List<SoglasheniyaObIspolzovaniiEHDRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SoglasheniyaObIspolzovaniiEHDsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SoglasheniyaObIspolzovaniiEHDsResponse//СоглашенияОбИспользованииЭДОтвет
	{
		public string Result {get;set;}
	}


	public class SoglasheniyaObIspolzovaniiEHDService /*СоглашенияОбИспользованииЭДСервис*/ : Service
	{
		public object Any(SoglasheniyaObIspolzovaniiEHDRequest request)
		{
			return new SoglasheniyaObIspolzovaniiEHDResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SoglasheniyaObIspolzovaniiEHDRequest request)
		{
			return null;
		}

		public object Get(SoglasheniyaObIspolzovaniiEHDsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СоглашенияОбИспользованииЭД>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					Коллекция.Add(null);
				}
			}
			return Коллекция;
		}

	}
}
