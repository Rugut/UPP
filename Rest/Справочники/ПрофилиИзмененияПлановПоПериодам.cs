
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ProfiliIzmeneniyaPlanovPoPeriodam")]
	[Route("/Catalogs/ProfiliIzmeneniyaPlanovPoPeriodam/{Code}")]
	public class ProfiliIzmeneniyaPlanovPoPeriodamRequest/*ПрофилиИзмененияПлановПоПериодамЗапрос*/: V82.СправочникиСсылка.ПрофилиИзмененияПлановПоПериодам,IReturn<ProfiliIzmeneniyaPlanovPoPeriodamRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ProfiliIzmeneniyaPlanovPoPeriodamResponse//ПрофилиИзмененияПлановПоПериодамОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ProfiliIzmeneniyaPlanovPoPeriodams")]
	[Route("/Catalogs/ProfiliIzmeneniyaPlanovPoPeriodams/{Codes}")]
	public class ProfiliIzmeneniyaPlanovPoPeriodamsRequest/*ПрофилиИзмененияПлановПоПериодамЗапрос*/: IReturn<List<ProfiliIzmeneniyaPlanovPoPeriodamRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ProfiliIzmeneniyaPlanovPoPeriodamsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ProfiliIzmeneniyaPlanovPoPeriodamsResponse//ПрофилиИзмененияПлановПоПериодамОтвет
	{
		public string Result {get;set;}
	}


	public class ProfiliIzmeneniyaPlanovPoPeriodamService /*ПрофилиИзмененияПлановПоПериодамСервис*/ : Service
	{
		public object Any(ProfiliIzmeneniyaPlanovPoPeriodamRequest request)
		{
			return new ProfiliIzmeneniyaPlanovPoPeriodamResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ProfiliIzmeneniyaPlanovPoPeriodamRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ПрофилиИзмененияПлановПоПериодам.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ProfiliIzmeneniyaPlanovPoPeriodamResponse() {Result = "ПрофилиИзмененияПлановПоПериодам c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ProfiliIzmeneniyaPlanovPoPeriodamsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПрофилиИзмененияПлановПоПериодам>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ПрофилиИзмененияПлановПоПериодам.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
