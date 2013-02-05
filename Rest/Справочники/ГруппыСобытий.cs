
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GruppySobytijj")]
	[Route("/Catalogs/GruppySobytijj/{Code}")]
	public class GruppySobytijjRequest/*ГруппыСобытийЗапрос*/: V82.СправочникиСсылка.ГруппыСобытий,IReturn<GruppySobytijjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppySobytijjResponse//ГруппыСобытийОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppySobytijjs")]
	[Route("/Catalogs/GruppySobytijjs/{Codes}")]
	public class GruppySobytijjsRequest/*ГруппыСобытийЗапрос*/: IReturn<List<GruppySobytijjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppySobytijjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppySobytijjsResponse//ГруппыСобытийОтвет
	{
		public string Result {get;set;}
	}


	public class GruppySobytijjService /*ГруппыСобытийСервис*/ : Service
	{
		public object Any(GruppySobytijjRequest request)
		{
			return new GruppySobytijjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppySobytijjRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ГруппыСобытий.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new GruppySobytijjResponse() {Result = "ГруппыСобытий c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(GruppySobytijjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГруппыСобытий>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ГруппыСобытий.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
