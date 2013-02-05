
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GodovyeGrafikiAmortizaciiOS")]
	[Route("/Catalogs/GodovyeGrafikiAmortizaciiOS/{Code}")]
	public class GodovyeGrafikiAmortizaciiOSRequest/*ГодовыеГрафикиАмортизацииОСЗапрос*/: V82.СправочникиСсылка.ГодовыеГрафикиАмортизацииОС,IReturn<GodovyeGrafikiAmortizaciiOSRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GodovyeGrafikiAmortizaciiOSResponse//ГодовыеГрафикиАмортизацииОСОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GodovyeGrafikiAmortizaciiOSs")]
	[Route("/Catalogs/GodovyeGrafikiAmortizaciiOSs/{Codes}")]
	public class GodovyeGrafikiAmortizaciiOSsRequest/*ГодовыеГрафикиАмортизацииОСЗапрос*/: IReturn<List<GodovyeGrafikiAmortizaciiOSRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GodovyeGrafikiAmortizaciiOSsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GodovyeGrafikiAmortizaciiOSsResponse//ГодовыеГрафикиАмортизацииОСОтвет
	{
		public string Result {get;set;}
	}


	public class GodovyeGrafikiAmortizaciiOSService /*ГодовыеГрафикиАмортизацииОССервис*/ : Service
	{
		public object Any(GodovyeGrafikiAmortizaciiOSRequest request)
		{
			return new GodovyeGrafikiAmortizaciiOSResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GodovyeGrafikiAmortizaciiOSRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ГодовыеГрафикиАмортизацииОС.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new GodovyeGrafikiAmortizaciiOSResponse() {Result = "ГодовыеГрафикиАмортизацииОС c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(GodovyeGrafikiAmortizaciiOSsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГодовыеГрафикиАмортизацииОС>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ГодовыеГрафикиАмортизацииОС.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
