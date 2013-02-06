
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ScenariiPlanirovaniya")]
	[Route("/Catalogs/ScenariiPlanirovaniya/{Code}")]
	public class ScenariiPlanirovaniyaRequest/*СценарииПланированияЗапрос*/: V82.СправочникиСсылка.СценарииПланирования,IReturn<ScenariiPlanirovaniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ScenariiPlanirovaniyaResponse//СценарииПланированияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ScenariiPlanirovaniyas")]
	[Route("/Catalogs/ScenariiPlanirovaniyas/{Codes}")]
	public class ScenariiPlanirovaniyasRequest/*СценарииПланированияЗапрос*/: IReturn<List<ScenariiPlanirovaniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ScenariiPlanirovaniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ScenariiPlanirovaniyasResponse//СценарииПланированияОтвет
	{
		public string Result {get;set;}
	}


	public class ScenariiPlanirovaniyaService /*СценарииПланированияСервис*/ : Service
	{
		public object Any(ScenariiPlanirovaniyaRequest request)
		{
			return new ScenariiPlanirovaniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ScenariiPlanirovaniyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СценарииПланирования.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ScenariiPlanirovaniyaResponse() {Result = "СценарииПланирования c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ScenariiPlanirovaniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СценарииПланирования>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СценарииПланирования.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
