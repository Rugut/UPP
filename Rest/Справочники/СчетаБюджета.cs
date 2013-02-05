
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SchetaByudzheta")]
	[Route("/Catalogs/SchetaByudzheta/{Code}")]
	public class SchetaByudzhetaRequest/*СчетаБюджетаЗапрос*/: V82.СправочникиСсылка.СчетаБюджета,IReturn<SchetaByudzhetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SchetaByudzhetaResponse//СчетаБюджетаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SchetaByudzhetas")]
	[Route("/Catalogs/SchetaByudzhetas/{Codes}")]
	public class SchetaByudzhetasRequest/*СчетаБюджетаЗапрос*/: IReturn<List<SchetaByudzhetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SchetaByudzhetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SchetaByudzhetasResponse//СчетаБюджетаОтвет
	{
		public string Result {get;set;}
	}


	public class SchetaByudzhetaService /*СчетаБюджетаСервис*/ : Service
	{
		public object Any(SchetaByudzhetaRequest request)
		{
			return new SchetaByudzhetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SchetaByudzhetaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.СчетаБюджета.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SchetaByudzhetaResponse() {Result = "СчетаБюджета c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SchetaByudzhetasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СчетаБюджета>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.СчетаБюджета.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
