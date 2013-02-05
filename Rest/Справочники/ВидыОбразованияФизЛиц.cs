
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyObrazovaniyaFizLic")]
	[Route("/Catalogs/VidyObrazovaniyaFizLic/{Code}")]
	public class VidyObrazovaniyaFizLicRequest/*ВидыОбразованияФизЛицЗапрос*/: V82.СправочникиСсылка.ВидыОбразованияФизЛиц,IReturn<VidyObrazovaniyaFizLicRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyObrazovaniyaFizLicResponse//ВидыОбразованияФизЛицОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyObrazovaniyaFizLics")]
	[Route("/Catalogs/VidyObrazovaniyaFizLics/{Codes}")]
	public class VidyObrazovaniyaFizLicsRequest/*ВидыОбразованияФизЛицЗапрос*/: IReturn<List<VidyObrazovaniyaFizLicRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyObrazovaniyaFizLicsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyObrazovaniyaFizLicsResponse//ВидыОбразованияФизЛицОтвет
	{
		public string Result {get;set;}
	}


	public class VidyObrazovaniyaFizLicService /*ВидыОбразованияФизЛицСервис*/ : Service
	{
		public object Any(VidyObrazovaniyaFizLicRequest request)
		{
			return new VidyObrazovaniyaFizLicResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyObrazovaniyaFizLicRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ВидыОбразованияФизЛиц.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyObrazovaniyaFizLicResponse() {Result = "ВидыОбразованияФизЛиц c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyObrazovaniyaFizLicsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыОбразованияФизЛиц>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ВидыОбразованияФизЛиц.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
