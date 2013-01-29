
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ProfiliPolnomochijjPolzovatelejj")]
	[Route("/Catalogs/ProfiliPolnomochijjPolzovatelejj/{Code}")]
	public class ProfiliPolnomochijjPolzovatelejjRequest/*ПрофилиПолномочийПользователейЗапрос*/: V82.СправочникиСсылка.ПрофилиПолномочийПользователей,IReturn<ProfiliPolnomochijjPolzovatelejjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ProfiliPolnomochijjPolzovatelejjResponse//ПрофилиПолномочийПользователейОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ProfiliPolnomochijjPolzovatelejjs")]
	[Route("/Catalogs/ProfiliPolnomochijjPolzovatelejjs/{Codes}")]
	public class ProfiliPolnomochijjPolzovatelejjsRequest/*ПрофилиПолномочийПользователейЗапрос*/: IReturn<List<ProfiliPolnomochijjPolzovatelejjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ProfiliPolnomochijjPolzovatelejjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ProfiliPolnomochijjPolzovatelejjsResponse//ПрофилиПолномочийПользователейОтвет
	{
		public string Result {get;set;}
	}


	public class ProfiliPolnomochijjPolzovatelejjService /*ПрофилиПолномочийПользователейСервис*/ : Service
	{
		public object Any(ProfiliPolnomochijjPolzovatelejjRequest request)
		{
			return new ProfiliPolnomochijjPolzovatelejjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ProfiliPolnomochijjPolzovatelejjRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ПрофилиПолномочийПользователей.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new ProfiliPolnomochijjPolzovatelejjResponse() {Result = "ПрофилиПолномочийПользователей c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ПрофилиПолномочийПользователей.НайтиПоКоду(1);
			}
		}

		public object Get(ProfiliPolnomochijjPolzovatelejjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПрофилиПолномочийПользователей>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ПрофилиПолномочийПользователей.НайтиПоКоду(СтрокаКод);
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
