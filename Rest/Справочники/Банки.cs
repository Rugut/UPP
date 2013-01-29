
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Banki")]
	[Route("/Catalogs/Banki/{Code}")]
	public class BankiRequest/*БанкиЗапрос*/: V82.СправочникиСсылка.Банки,IReturn<BankiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class BankiResponse//БанкиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Bankis")]
	[Route("/Catalogs/Bankis/{Codes}")]
	public class BankisRequest/*БанкиЗапрос*/: IReturn<List<BankiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public BankisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class BankisResponse//БанкиОтвет
	{
		public string Result {get;set;}
	}


	public class BankiService /*БанкиСервис*/ : Service
	{
		public object Any(BankiRequest request)
		{
			return new BankiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(BankiRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.Банки.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new BankiResponse() {Result = "Банки c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.Банки.НайтиПоКоду(1);
			}
		}

		public object Get(BankisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Банки>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.Банки.НайтиПоКоду(СтрокаКод);
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
