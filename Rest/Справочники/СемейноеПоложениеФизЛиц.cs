
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SemejjnoePolozhenieFizLic")]
	[Route("/Catalogs/SemejjnoePolozhenieFizLic/{Code}")]
	public class SemejjnoePolozhenieFizLicRequest/*СемейноеПоложениеФизЛицЗапрос*/: V82.СправочникиСсылка.СемейноеПоложениеФизЛиц,IReturn<SemejjnoePolozhenieFizLicRequest>
	{
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
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СемейноеПоложениеФизЛиц.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new SemejjnoePolozhenieFizLicResponse() {Result = "СемейноеПоложениеФизЛиц c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СемейноеПоложениеФизЛиц.НайтиПоКоду(1);
			}
		}

		public object Get(SemejjnoePolozhenieFizLicsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СемейноеПоложениеФизЛиц>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СемейноеПоложениеФизЛиц.НайтиПоКоду(СтрокаКод);
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
