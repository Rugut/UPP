
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TipyZapisejjZametok")]
	[Route("/Catalogs/TipyZapisejjZametok/{Code}")]
	public class TipyZapisejjZametokRequest/*ТипыЗаписейЗаметокЗапрос*/: V82.СправочникиСсылка.ТипыЗаписейЗаметок,IReturn<TipyZapisejjZametokRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipyZapisejjZametokResponse//ТипыЗаписейЗаметокОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipyZapisejjZametoks")]
	[Route("/Catalogs/TipyZapisejjZametoks/{Codes}")]
	public class TipyZapisejjZametoksRequest/*ТипыЗаписейЗаметокЗапрос*/: IReturn<List<TipyZapisejjZametokRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipyZapisejjZametoksRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipyZapisejjZametoksResponse//ТипыЗаписейЗаметокОтвет
	{
		public string Result {get;set;}
	}


	public class TipyZapisejjZametokService /*ТипыЗаписейЗаметокСервис*/ : Service
	{
		public object Any(TipyZapisejjZametokRequest request)
		{
			return new TipyZapisejjZametokResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipyZapisejjZametokRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ТипыЗаписейЗаметок.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new TipyZapisejjZametokResponse() {Result = "ТипыЗаписейЗаметок c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ТипыЗаписейЗаметок.НайтиПоКоду(1);
			}
		}

		public object Get(TipyZapisejjZametoksRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТипыЗаписейЗаметок>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ТипыЗаписейЗаметок.НайтиПоКоду(СтрокаКод);
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
