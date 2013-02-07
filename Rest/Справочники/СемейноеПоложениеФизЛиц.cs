
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SemejjnoePolozhenieFizLic")]
	[Route("/Catalogs/SemejjnoePolozhenieFizLic/FindById/{Id}")]
	[Route("/Catalogs/SemejjnoePolozhenieFizLic/FindByCode/{Code}")]
	[Route("/Catalogs/SemejjnoePolozhenieFizLic/FindByDescr/{Descr}")]
	public class SemejjnoePolozhenieFizLicRequest/*СемейноеПоложениеФизЛицЗапрос*/: V82.СправочникиСсылка.СемейноеПоложениеФизЛиц,IReturn<SemejjnoePolozhenieFizLicRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SemejjnoePolozhenieFizLicResponse//СемейноеПоложениеФизЛицОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SemejjnoePolozhenieFizLics")]
	[Route("/Catalogs/SemejjnoePolozhenieFizLics/{Codes}")]
	public class SemejjnoePolozhenieFizLicsRequest/*СемейноеПоложениеФизЛицЗапрос*/: IReturn<List<SemejjnoePolozhenieFizLicRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SemejjnoePolozhenieFizLicsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SemejjnoePolozhenieFizLicsResponse//СемейноеПоложениеФизЛицОтвет
	{
		public string Result {get;set;}
	}


	public class SemejjnoePolozhenieFizLicService /*СемейноеПоложениеФизЛицСервис*/ : Service
	{
		public object Any(SemejjnoePolozhenieFizLicRequest request)
		{
			return new SemejjnoePolozhenieFizLicResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SemejjnoePolozhenieFizLicRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СемейноеПоложениеФизЛиц.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SemejjnoePolozhenieFizLicResponse() {Result = "СемейноеПоложениеФизЛиц c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SemejjnoePolozhenieFizLicsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СемейноеПоложениеФизЛиц>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СемейноеПоложениеФизЛиц.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}