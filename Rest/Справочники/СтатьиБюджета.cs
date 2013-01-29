
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/StatiByudzheta")]
	[Route("/Catalogs/StatiByudzheta/{Code}")]
	public class StatiByudzhetaRequest/*СтатьиБюджетаЗапрос*/: V82.СправочникиСсылка.СтатьиБюджета,IReturn<StatiByudzhetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StatiByudzhetaResponse//СтатьиБюджетаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StatiByudzhetas")]
	[Route("/Catalogs/StatiByudzhetas/{Codes}")]
	public class StatiByudzhetasRequest/*СтатьиБюджетаЗапрос*/: IReturn<List<StatiByudzhetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StatiByudzhetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StatiByudzhetasResponse//СтатьиБюджетаОтвет
	{
		public string Result {get;set;}
	}


	public class StatiByudzhetaService /*СтатьиБюджетаСервис*/ : Service
	{
		public object Any(StatiByudzhetaRequest request)
		{
			return new StatiByudzhetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StatiByudzhetaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СтатьиБюджета.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new StatiByudzhetaResponse() {Result = "СтатьиБюджета c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СтатьиБюджета.НайтиПоКоду(1);
			}
		}

		public object Get(StatiByudzhetasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СтатьиБюджета>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СтатьиБюджета.НайтиПоКоду(СтрокаКод);
					if (Ссылка != null)
					{
						Коллекция.Add(Ссылка);
					}
				}
			}
			return Коллекция;
		}

	}
}
