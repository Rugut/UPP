
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlassifikatorIspolzovaniyaRabochegoVremeni")]
	[Route("/Catalogs/KlassifikatorIspolzovaniyaRabochegoVremeni/{Code}")]
	public class KlassifikatorIspolzovaniyaRabochegoVremeniRequest/*КлассификаторИспользованияРабочегоВремениЗапрос*/: V82.СправочникиСсылка.КлассификаторИспользованияРабочегоВремени,IReturn<KlassifikatorIspolzovaniyaRabochegoVremeniRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlassifikatorIspolzovaniyaRabochegoVremeniResponse//КлассификаторИспользованияРабочегоВремениОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlassifikatorIspolzovaniyaRabochegoVremenis")]
	[Route("/Catalogs/KlassifikatorIspolzovaniyaRabochegoVremenis/{Codes}")]
	public class KlassifikatorIspolzovaniyaRabochegoVremenisRequest/*КлассификаторИспользованияРабочегоВремениЗапрос*/: IReturn<List<KlassifikatorIspolzovaniyaRabochegoVremeniRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlassifikatorIspolzovaniyaRabochegoVremenisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlassifikatorIspolzovaniyaRabochegoVremenisResponse//КлассификаторИспользованияРабочегоВремениОтвет
	{
		public string Result {get;set;}
	}


	public class KlassifikatorIspolzovaniyaRabochegoVremeniService /*КлассификаторИспользованияРабочегоВремениСервис*/ : Service
	{
		public object Any(KlassifikatorIspolzovaniyaRabochegoVremeniRequest request)
		{
			return new KlassifikatorIspolzovaniyaRabochegoVremeniResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlassifikatorIspolzovaniyaRabochegoVremeniRequest request)
		{
			return null;
		}

		public object Get(KlassifikatorIspolzovaniyaRabochegoVremenisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлассификаторИспользованияРабочегоВремени>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}
