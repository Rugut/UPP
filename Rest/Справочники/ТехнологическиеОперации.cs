
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TekhnologicheskieOperacii")]
	[Route("/Catalogs/TekhnologicheskieOperacii/{Code}")]
	public class TekhnologicheskieOperaciiRequest/*ТехнологическиеОперацииЗапрос*/: V82.СправочникиСсылка.ТехнологическиеОперации,IReturn<TekhnologicheskieOperaciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TekhnologicheskieOperaciiResponse//ТехнологическиеОперацииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TekhnologicheskieOperaciis")]
	[Route("/Catalogs/TekhnologicheskieOperaciis/{Codes}")]
	public class TekhnologicheskieOperaciisRequest/*ТехнологическиеОперацииЗапрос*/: IReturn<List<TekhnologicheskieOperaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TekhnologicheskieOperaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TekhnologicheskieOperaciisResponse//ТехнологическиеОперацииОтвет
	{
		public string Result {get;set;}
	}


	public class TekhnologicheskieOperaciiService /*ТехнологическиеОперацииСервис*/ : Service
	{
		public object Any(TekhnologicheskieOperaciiRequest request)
		{
			return new TekhnologicheskieOperaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TekhnologicheskieOperaciiRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ТехнологическиеОперации.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new TekhnologicheskieOperaciiResponse() {Result = "ТехнологическиеОперации c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ТехнологическиеОперации.НайтиПоКоду(1);
			}
		}

		public object Get(TekhnologicheskieOperaciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТехнологическиеОперации>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ТехнологическиеОперации.НайтиПоКоду(СтрокаКод);
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
