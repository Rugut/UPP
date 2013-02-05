
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NormativyObsluzhivaniyaOS")]
	[Route("/Catalogs/NormativyObsluzhivaniyaOS/{Code}")]
	public class NormativyObsluzhivaniyaOSRequest/*НормативыОбслуживанияОСЗапрос*/: V82.СправочникиСсылка.НормативыОбслуживанияОС,IReturn<NormativyObsluzhivaniyaOSRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NormativyObsluzhivaniyaOSResponse//НормативыОбслуживанияОСОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NormativyObsluzhivaniyaOSs")]
	[Route("/Catalogs/NormativyObsluzhivaniyaOSs/{Codes}")]
	public class NormativyObsluzhivaniyaOSsRequest/*НормативыОбслуживанияОСЗапрос*/: IReturn<List<NormativyObsluzhivaniyaOSRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NormativyObsluzhivaniyaOSsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NormativyObsluzhivaniyaOSsResponse//НормативыОбслуживанияОСОтвет
	{
		public string Result {get;set;}
	}


	public class NormativyObsluzhivaniyaOSService /*НормативыОбслуживанияОССервис*/ : Service
	{
		public object Any(NormativyObsluzhivaniyaOSRequest request)
		{
			return new NormativyObsluzhivaniyaOSResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NormativyObsluzhivaniyaOSRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.НормативыОбслуживанияОС.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NormativyObsluzhivaniyaOSResponse() {Result = "НормативыОбслуживанияОС c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NormativyObsluzhivaniyaOSsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НормативыОбслуживанияОС>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.НормативыОбслуживанияОС.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
