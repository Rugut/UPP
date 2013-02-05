
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Podrazdeleniya")]
	[Route("/Catalogs/Podrazdeleniya/{Code}")]
	public class PodrazdeleniyaRequest/*ПодразделенияЗапрос*/: V82.СправочникиСсылка.Подразделения,IReturn<PodrazdeleniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PodrazdeleniyaResponse//ПодразделенияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Podrazdeleniyas")]
	[Route("/Catalogs/Podrazdeleniyas/{Codes}")]
	public class PodrazdeleniyasRequest/*ПодразделенияЗапрос*/: IReturn<List<PodrazdeleniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PodrazdeleniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PodrazdeleniyasResponse//ПодразделенияОтвет
	{
		public string Result {get;set;}
	}


	public class PodrazdeleniyaService /*ПодразделенияСервис*/ : Service
	{
		public object Any(PodrazdeleniyaRequest request)
		{
			return new PodrazdeleniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PodrazdeleniyaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.Подразделения.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new PodrazdeleniyaResponse() {Result = "Подразделения c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(PodrazdeleniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Подразделения>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.Подразделения.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
