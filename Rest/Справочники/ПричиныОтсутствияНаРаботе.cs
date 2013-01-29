
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/PrichinyOtsutstviyaNaRabote")]
	[Route("/Catalogs/PrichinyOtsutstviyaNaRabote/{Code}")]
	public class PrichinyOtsutstviyaNaRaboteRequest/*ПричиныОтсутствияНаРаботеЗапрос*/: V82.СправочникиСсылка.ПричиныОтсутствияНаРаботе,IReturn<PrichinyOtsutstviyaNaRaboteRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PrichinyOtsutstviyaNaRaboteResponse//ПричиныОтсутствияНаРаботеОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/PrichinyOtsutstviyaNaRabotes")]
	[Route("/Catalogs/PrichinyOtsutstviyaNaRabotes/{Codes}")]
	public class PrichinyOtsutstviyaNaRabotesRequest/*ПричиныОтсутствияНаРаботеЗапрос*/: IReturn<List<PrichinyOtsutstviyaNaRaboteRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PrichinyOtsutstviyaNaRabotesRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PrichinyOtsutstviyaNaRabotesResponse//ПричиныОтсутствияНаРаботеОтвет
	{
		public string Result {get;set;}
	}


	public class PrichinyOtsutstviyaNaRaboteService /*ПричиныОтсутствияНаРаботеСервис*/ : Service
	{
		public object Any(PrichinyOtsutstviyaNaRaboteRequest request)
		{
			return new PrichinyOtsutstviyaNaRaboteResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PrichinyOtsutstviyaNaRaboteRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ПричиныОтсутствияНаРаботе.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new PrichinyOtsutstviyaNaRaboteResponse() {Result = "ПричиныОтсутствияНаРаботе c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ПричиныОтсутствияНаРаботе.НайтиПоКоду(1);
			}
		}

		public object Get(PrichinyOtsutstviyaNaRabotesRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПричиныОтсутствияНаРаботе>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ПричиныОтсутствияНаРаботе.НайтиПоКоду(СтрокаКод);
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
