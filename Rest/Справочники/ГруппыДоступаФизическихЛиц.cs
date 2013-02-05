
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GruppyDostupaFizicheskikhLic")]
	[Route("/Catalogs/GruppyDostupaFizicheskikhLic/{Code}")]
	public class GruppyDostupaFizicheskikhLicRequest/*ГруппыДоступаФизическихЛицЗапрос*/: V82.СправочникиСсылка.ГруппыДоступаФизическихЛиц,IReturn<GruppyDostupaFizicheskikhLicRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppyDostupaFizicheskikhLicResponse//ГруппыДоступаФизическихЛицОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppyDostupaFizicheskikhLics")]
	[Route("/Catalogs/GruppyDostupaFizicheskikhLics/{Codes}")]
	public class GruppyDostupaFizicheskikhLicsRequest/*ГруппыДоступаФизическихЛицЗапрос*/: IReturn<List<GruppyDostupaFizicheskikhLicRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppyDostupaFizicheskikhLicsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppyDostupaFizicheskikhLicsResponse//ГруппыДоступаФизическихЛицОтвет
	{
		public string Result {get;set;}
	}


	public class GruppyDostupaFizicheskikhLicService /*ГруппыДоступаФизическихЛицСервис*/ : Service
	{
		public object Any(GruppyDostupaFizicheskikhLicRequest request)
		{
			return new GruppyDostupaFizicheskikhLicResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppyDostupaFizicheskikhLicRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ГруппыДоступаФизическихЛиц.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new GruppyDostupaFizicheskikhLicResponse() {Result = "ГруппыДоступаФизическихЛиц c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(GruppyDostupaFizicheskikhLicsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГруппыДоступаФизическихЛиц>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ГруппыДоступаФизическихЛиц.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
