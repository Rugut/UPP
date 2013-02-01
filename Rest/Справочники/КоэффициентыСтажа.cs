
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KoehfficientyStazha")]
	[Route("/Catalogs/KoehfficientyStazha/{Code}")]
	public class KoehfficientyStazhaRequest/*КоэффициентыСтажаЗапрос*/: V82.СправочникиСсылка.КоэффициентыСтажа,IReturn<KoehfficientyStazhaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KoehfficientyStazhaResponse//КоэффициентыСтажаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KoehfficientyStazhas")]
	[Route("/Catalogs/KoehfficientyStazhas/{Codes}")]
	public class KoehfficientyStazhasRequest/*КоэффициентыСтажаЗапрос*/: IReturn<List<KoehfficientyStazhaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KoehfficientyStazhasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KoehfficientyStazhasResponse//КоэффициентыСтажаОтвет
	{
		public string Result {get;set;}
	}


	public class KoehfficientyStazhaService /*КоэффициентыСтажаСервис*/ : Service
	{
		public object Any(KoehfficientyStazhaRequest request)
		{
			return new KoehfficientyStazhaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KoehfficientyStazhaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КоэффициентыСтажа.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KoehfficientyStazhaResponse() {Result = "КоэффициентыСтажа c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КоэффициентыСтажа.НайтиПоКоду(1);
			}
		}

		public object Get(KoehfficientyStazhasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КоэффициентыСтажа>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КоэффициентыСтажа.НайтиПоКоду(СтрокаКод);
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
