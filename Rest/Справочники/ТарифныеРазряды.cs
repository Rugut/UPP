
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TarifnyeRazryady")]
	[Route("/Catalogs/TarifnyeRazryady/{Code}")]
	public class TarifnyeRazryadyRequest/*ТарифныеРазрядыЗапрос*/: V82.СправочникиСсылка.ТарифныеРазряды,IReturn<TarifnyeRazryadyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TarifnyeRazryadyResponse//ТарифныеРазрядыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TarifnyeRazryadys")]
	[Route("/Catalogs/TarifnyeRazryadys/{Codes}")]
	public class TarifnyeRazryadysRequest/*ТарифныеРазрядыЗапрос*/: IReturn<List<TarifnyeRazryadyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TarifnyeRazryadysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TarifnyeRazryadysResponse//ТарифныеРазрядыОтвет
	{
		public string Result {get;set;}
	}


	public class TarifnyeRazryadyService /*ТарифныеРазрядыСервис*/ : Service
	{
		public object Any(TarifnyeRazryadyRequest request)
		{
			return new TarifnyeRazryadyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TarifnyeRazryadyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ТарифныеРазряды.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new TarifnyeRazryadyResponse() {Result = "ТарифныеРазряды c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ТарифныеРазряды.НайтиПоКоду(1);
			}
		}

		public object Get(TarifnyeRazryadysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТарифныеРазряды>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ТарифныеРазряды.НайтиПоКоду(СтрокаКод);
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
