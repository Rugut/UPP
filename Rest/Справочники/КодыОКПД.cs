
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KodyOKPD")]
	[Route("/Catalogs/KodyOKPD/{Code}")]
	public class KodyOKPDRequest/*КодыОКПДЗапрос*/: V82.СправочникиСсылка.КодыОКПД,IReturn<KodyOKPDRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KodyOKPDResponse//КодыОКПДОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KodyOKPDs")]
	[Route("/Catalogs/KodyOKPDs/{Codes}")]
	public class KodyOKPDsRequest/*КодыОКПДЗапрос*/: IReturn<List<KodyOKPDRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KodyOKPDsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KodyOKPDsResponse//КодыОКПДОтвет
	{
		public string Result {get;set;}
	}


	public class KodyOKPDService /*КодыОКПДСервис*/ : Service
	{
		public object Any(KodyOKPDRequest request)
		{
			return new KodyOKPDResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KodyOKPDRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.КодыОКПД.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new KodyOKPDResponse() {Result = "КодыОКПД c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(KodyOKPDsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КодыОКПД>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.КодыОКПД.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
