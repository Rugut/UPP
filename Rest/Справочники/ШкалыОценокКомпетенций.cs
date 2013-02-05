
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SHkalyOcenokKompetencijj")]
	[Route("/Catalogs/SHkalyOcenokKompetencijj/{Code}")]
	public class SHkalyOcenokKompetencijjRequest/*ШкалыОценокКомпетенцийЗапрос*/: V82.СправочникиСсылка.ШкалыОценокКомпетенций,IReturn<SHkalyOcenokKompetencijjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SHkalyOcenokKompetencijjResponse//ШкалыОценокКомпетенцийОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SHkalyOcenokKompetencijjs")]
	[Route("/Catalogs/SHkalyOcenokKompetencijjs/{Codes}")]
	public class SHkalyOcenokKompetencijjsRequest/*ШкалыОценокКомпетенцийЗапрос*/: IReturn<List<SHkalyOcenokKompetencijjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SHkalyOcenokKompetencijjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SHkalyOcenokKompetencijjsResponse//ШкалыОценокКомпетенцийОтвет
	{
		public string Result {get;set;}
	}


	public class SHkalyOcenokKompetencijjService /*ШкалыОценокКомпетенцийСервис*/ : Service
	{
		public object Any(SHkalyOcenokKompetencijjRequest request)
		{
			return new SHkalyOcenokKompetencijjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SHkalyOcenokKompetencijjRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ШкалыОценокКомпетенций.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SHkalyOcenokKompetencijjResponse() {Result = "ШкалыОценокКомпетенций c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SHkalyOcenokKompetencijjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ШкалыОценокКомпетенций>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ШкалыОценокКомпетенций.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
