
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SostavOcenochnykhSHkalKompetencijj")]
	[Route("/Catalogs/SostavOcenochnykhSHkalKompetencijj/{Code}")]
	public class SostavOcenochnykhSHkalKompetencijjRequest/*СоставОценочныхШкалКомпетенцийЗапрос*/: V82.СправочникиСсылка.СоставОценочныхШкалКомпетенций,IReturn<SostavOcenochnykhSHkalKompetencijjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SostavOcenochnykhSHkalKompetencijjResponse//СоставОценочныхШкалКомпетенцийОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SostavOcenochnykhSHkalKompetencijjs")]
	[Route("/Catalogs/SostavOcenochnykhSHkalKompetencijjs/{Codes}")]
	public class SostavOcenochnykhSHkalKompetencijjsRequest/*СоставОценочныхШкалКомпетенцийЗапрос*/: IReturn<List<SostavOcenochnykhSHkalKompetencijjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SostavOcenochnykhSHkalKompetencijjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SostavOcenochnykhSHkalKompetencijjsResponse//СоставОценочныхШкалКомпетенцийОтвет
	{
		public string Result {get;set;}
	}


	public class SostavOcenochnykhSHkalKompetencijjService /*СоставОценочныхШкалКомпетенцийСервис*/ : Service
	{
		public object Any(SostavOcenochnykhSHkalKompetencijjRequest request)
		{
			return new SostavOcenochnykhSHkalKompetencijjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SostavOcenochnykhSHkalKompetencijjRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СоставОценочныхШкалКомпетенций.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new SostavOcenochnykhSHkalKompetencijjResponse() {Result = "СоставОценочныхШкалКомпетенций c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СоставОценочныхШкалКомпетенций.НайтиПоКоду(1);
			}
		}

		public object Get(SostavOcenochnykhSHkalKompetencijjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СоставОценочныхШкалКомпетенций>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СоставОценочныхШкалКомпетенций.НайтиПоКоду(СтрокаКод);
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
