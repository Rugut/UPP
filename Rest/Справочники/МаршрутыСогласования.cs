
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/MarshrutySoglasovaniya")]
	[Route("/Catalogs/MarshrutySoglasovaniya/{Code}")]
	public class MarshrutySoglasovaniyaRequest/*МаршрутыСогласованияЗапрос*/: V82.СправочникиСсылка.МаршрутыСогласования,IReturn<MarshrutySoglasovaniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class MarshrutySoglasovaniyaResponse//МаршрутыСогласованияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/MarshrutySoglasovaniyas")]
	[Route("/Catalogs/MarshrutySoglasovaniyas/{Codes}")]
	public class MarshrutySoglasovaniyasRequest/*МаршрутыСогласованияЗапрос*/: IReturn<List<MarshrutySoglasovaniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public MarshrutySoglasovaniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class MarshrutySoglasovaniyasResponse//МаршрутыСогласованияОтвет
	{
		public string Result {get;set;}
	}


	public class MarshrutySoglasovaniyaService /*МаршрутыСогласованияСервис*/ : Service
	{
		public object Any(MarshrutySoglasovaniyaRequest request)
		{
			return new MarshrutySoglasovaniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(MarshrutySoglasovaniyaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.МаршрутыСогласования.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new MarshrutySoglasovaniyaResponse() {Result = "МаршрутыСогласования c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.МаршрутыСогласования.НайтиПоКоду(1);
			}
		}

		public object Get(MarshrutySoglasovaniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.МаршрутыСогласования>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.МаршрутыСогласования.НайтиПоКоду(СтрокаКод);
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
