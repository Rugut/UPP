
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/PrichinyObsluzhivaniyaOS")]
	[Route("/Catalogs/PrichinyObsluzhivaniyaOS/{Code}")]
	public class PrichinyObsluzhivaniyaOSRequest/*ПричиныОбслуживанияОСЗапрос*/: V82.СправочникиСсылка.ПричиныОбслуживанияОС,IReturn<PrichinyObsluzhivaniyaOSRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PrichinyObsluzhivaniyaOSResponse//ПричиныОбслуживанияОСОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/PrichinyObsluzhivaniyaOSs")]
	[Route("/Catalogs/PrichinyObsluzhivaniyaOSs/{Codes}")]
	public class PrichinyObsluzhivaniyaOSsRequest/*ПричиныОбслуживанияОСЗапрос*/: IReturn<List<PrichinyObsluzhivaniyaOSRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PrichinyObsluzhivaniyaOSsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PrichinyObsluzhivaniyaOSsResponse//ПричиныОбслуживанияОСОтвет
	{
		public string Result {get;set;}
	}


	public class PrichinyObsluzhivaniyaOSService /*ПричиныОбслуживанияОССервис*/ : Service
	{
		public object Any(PrichinyObsluzhivaniyaOSRequest request)
		{
			return new PrichinyObsluzhivaniyaOSResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PrichinyObsluzhivaniyaOSRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ПричиныОбслуживанияОС.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new PrichinyObsluzhivaniyaOSResponse() {Result = "ПричиныОбслуживанияОС c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(PrichinyObsluzhivaniyaOSsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПричиныОбслуживанияОС>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ПричиныОбслуживанияОС.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
