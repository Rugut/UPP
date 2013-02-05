
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/StrokiFinansovogoRascheta")]
	[Route("/Catalogs/StrokiFinansovogoRascheta/{Code}")]
	public class StrokiFinansovogoRaschetaRequest/*СтрокиФинансовогоРасчетаЗапрос*/: V82.СправочникиСсылка.СтрокиФинансовогоРасчета,IReturn<StrokiFinansovogoRaschetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StrokiFinansovogoRaschetaResponse//СтрокиФинансовогоРасчетаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StrokiFinansovogoRaschetas")]
	[Route("/Catalogs/StrokiFinansovogoRaschetas/{Codes}")]
	public class StrokiFinansovogoRaschetasRequest/*СтрокиФинансовогоРасчетаЗапрос*/: IReturn<List<StrokiFinansovogoRaschetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StrokiFinansovogoRaschetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StrokiFinansovogoRaschetasResponse//СтрокиФинансовогоРасчетаОтвет
	{
		public string Result {get;set;}
	}


	public class StrokiFinansovogoRaschetaService /*СтрокиФинансовогоРасчетаСервис*/ : Service
	{
		public object Any(StrokiFinansovogoRaschetaRequest request)
		{
			return new StrokiFinansovogoRaschetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StrokiFinansovogoRaschetaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.СтрокиФинансовогоРасчета.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new StrokiFinansovogoRaschetaResponse() {Result = "СтрокиФинансовогоРасчета c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(StrokiFinansovogoRaschetasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СтрокиФинансовогоРасчета>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.СтрокиФинансовогоРасчета.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
