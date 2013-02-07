
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/StepeniRodstvaFizLic")]
	[Route("/Catalogs/StepeniRodstvaFizLic/FindById/{Id}")]
	[Route("/Catalogs/StepeniRodstvaFizLic/FindByCode/{Code}")]
	[Route("/Catalogs/StepeniRodstvaFizLic/FindByDescr/{Descr}")]
	public class StepeniRodstvaFizLicRequest/*СтепениРодстваФизЛицЗапрос*/: V82.СправочникиСсылка.СтепениРодстваФизЛиц,IReturn<StepeniRodstvaFizLicRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StepeniRodstvaFizLicResponse//СтепениРодстваФизЛицОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StepeniRodstvaFizLics")]
	[Route("/Catalogs/StepeniRodstvaFizLics/{Codes}")]
	public class StepeniRodstvaFizLicsRequest/*СтепениРодстваФизЛицЗапрос*/: IReturn<List<StepeniRodstvaFizLicRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StepeniRodstvaFizLicsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StepeniRodstvaFizLicsResponse//СтепениРодстваФизЛицОтвет
	{
		public string Result {get;set;}
	}


	public class StepeniRodstvaFizLicService /*СтепениРодстваФизЛицСервис*/ : Service
	{
		public object Any(StepeniRodstvaFizLicRequest request)
		{
			return new StepeniRodstvaFizLicResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StepeniRodstvaFizLicRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СтепениРодстваФизЛиц.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new StepeniRodstvaFizLicResponse() {Result = "СтепениРодстваФизЛиц c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(StepeniRodstvaFizLicsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СтепениРодстваФизЛиц>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СтепениРодстваФизЛиц.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}