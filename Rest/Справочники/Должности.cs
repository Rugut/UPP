
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Dolzhnosti")]
	[Route("/Catalogs/Dolzhnosti/{Code}")]
	public class DolzhnostiRequest/*ДолжностиЗапрос*/: V82.СправочникиСсылка.Должности,IReturn<DolzhnostiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DolzhnostiResponse//ДолжностиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Dolzhnostis")]
	[Route("/Catalogs/Dolzhnostis/{Codes}")]
	public class DolzhnostisRequest/*ДолжностиЗапрос*/: IReturn<List<DolzhnostiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DolzhnostisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DolzhnostisResponse//ДолжностиОтвет
	{
		public string Result {get;set;}
	}


	public class DolzhnostiService /*ДолжностиСервис*/ : Service
	{
		public object Any(DolzhnostiRequest request)
		{
			return new DolzhnostiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DolzhnostiRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.Должности.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new DolzhnostiResponse() {Result = "Должности c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.Должности.НайтиПоКоду(1);
			}
		}

		public object Get(DolzhnostisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Должности>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.Должности.НайтиПоКоду(СтрокаКод);
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
