
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Rabotodateli")]
	[Route("/Catalogs/Rabotodateli/{Code}")]
	public class RabotodateliRequest/*РаботодателиЗапрос*/: V82.СправочникиСсылка.Работодатели,IReturn<RabotodateliRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RabotodateliResponse//РаботодателиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Rabotodatelis")]
	[Route("/Catalogs/Rabotodatelis/{Codes}")]
	public class RabotodatelisRequest/*РаботодателиЗапрос*/: IReturn<List<RabotodateliRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RabotodatelisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RabotodatelisResponse//РаботодателиОтвет
	{
		public string Result {get;set;}
	}


	public class RabotodateliService /*РаботодателиСервис*/ : Service
	{
		public object Any(RabotodateliRequest request)
		{
			return new RabotodateliResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RabotodateliRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.Работодатели.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new RabotodateliResponse() {Result = "Работодатели c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.Работодатели.НайтиПоКоду(1);
			}
		}

		public object Get(RabotodatelisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Работодатели>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.Работодатели.НайтиПоКоду(СтрокаКод);
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
