
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ParametryVypuskaProdukcii")]
	[Route("/Catalogs/ParametryVypuskaProdukcii/{Code}")]
	public class ParametryVypuskaProdukciiRequest/*ПараметрыВыпускаПродукцииЗапрос*/: V82.СправочникиСсылка.ПараметрыВыпускаПродукции,IReturn<ParametryVypuskaProdukciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ParametryVypuskaProdukciiResponse//ПараметрыВыпускаПродукцииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ParametryVypuskaProdukciis")]
	[Route("/Catalogs/ParametryVypuskaProdukciis/{Codes}")]
	public class ParametryVypuskaProdukciisRequest/*ПараметрыВыпускаПродукцииЗапрос*/: IReturn<List<ParametryVypuskaProdukciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ParametryVypuskaProdukciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ParametryVypuskaProdukciisResponse//ПараметрыВыпускаПродукцииОтвет
	{
		public string Result {get;set;}
	}


	public class ParametryVypuskaProdukciiService /*ПараметрыВыпускаПродукцииСервис*/ : Service
	{
		public object Any(ParametryVypuskaProdukciiRequest request)
		{
			return new ParametryVypuskaProdukciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ParametryVypuskaProdukciiRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ПараметрыВыпускаПродукции.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new ParametryVypuskaProdukciiResponse() {Result = "ПараметрыВыпускаПродукции c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ПараметрыВыпускаПродукции.НайтиПоКоду(1);
			}
		}

		public object Get(ParametryVypuskaProdukciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПараметрыВыпускаПродукции>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ПараметрыВыпускаПродукции.НайтиПоКоду(СтрокаКод);
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
