
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TipovyeAnkety")]
	[Route("/Catalogs/TipovyeAnkety/{Code}")]
	public class TipovyeAnketyRequest/*ТиповыеАнкетыЗапрос*/: V82.СправочникиСсылка.ТиповыеАнкеты,IReturn<TipovyeAnketyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipovyeAnketyResponse//ТиповыеАнкетыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipovyeAnketys")]
	[Route("/Catalogs/TipovyeAnketys/{Codes}")]
	public class TipovyeAnketysRequest/*ТиповыеАнкетыЗапрос*/: IReturn<List<TipovyeAnketyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipovyeAnketysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipovyeAnketysResponse//ТиповыеАнкетыОтвет
	{
		public string Result {get;set;}
	}


	public class TipovyeAnketyService /*ТиповыеАнкетыСервис*/ : Service
	{
		public object Any(TipovyeAnketyRequest request)
		{
			return new TipovyeAnketyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipovyeAnketyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ТиповыеАнкеты.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TipovyeAnketyResponse() {Result = "ТиповыеАнкеты c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TipovyeAnketysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТиповыеАнкеты>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ТиповыеАнкеты.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
