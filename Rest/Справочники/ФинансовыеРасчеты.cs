
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/FinansovyeRaschety")]
	[Route("/Catalogs/FinansovyeRaschety/FindById/{Id}")]
	[Route("/Catalogs/FinansovyeRaschety/FindByCode/{Code}")]
	[Route("/Catalogs/FinansovyeRaschety/FindByDescr/{Descr}")]
	public class FinansovyeRaschetyRequest/*ФинансовыеРасчетыЗапрос*/: V82.СправочникиСсылка.ФинансовыеРасчеты,IReturn<FinansovyeRaschetyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class FinansovyeRaschetyResponse//ФинансовыеРасчетыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/FinansovyeRaschetys")]
	[Route("/Catalogs/FinansovyeRaschetys/{Codes}")]
	public class FinansovyeRaschetysRequest/*ФинансовыеРасчетыЗапрос*/: IReturn<List<FinansovyeRaschetyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public FinansovyeRaschetysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class FinansovyeRaschetysResponse//ФинансовыеРасчетыОтвет
	{
		public string Result {get;set;}
	}


	public class FinansovyeRaschetyService /*ФинансовыеРасчетыСервис*/ : Service
	{
		public object Any(FinansovyeRaschetyRequest request)
		{
			return new FinansovyeRaschetyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(FinansovyeRaschetyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ФинансовыеРасчеты.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new FinansovyeRaschetyResponse() {Result = "ФинансовыеРасчеты c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(FinansovyeRaschetysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ФинансовыеРасчеты>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ФинансовыеРасчеты.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}