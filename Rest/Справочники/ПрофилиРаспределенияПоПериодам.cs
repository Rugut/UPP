
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ProfiliRaspredeleniyaPoPeriodam")]
	[Route("/Catalogs/ProfiliRaspredeleniyaPoPeriodam/{Code}")]
	public class ProfiliRaspredeleniyaPoPeriodamRequest/*ПрофилиРаспределенияПоПериодамЗапрос*/: V82.СправочникиСсылка.ПрофилиРаспределенияПоПериодам,IReturn<ProfiliRaspredeleniyaPoPeriodamRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ProfiliRaspredeleniyaPoPeriodamResponse//ПрофилиРаспределенияПоПериодамОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ProfiliRaspredeleniyaPoPeriodams")]
	[Route("/Catalogs/ProfiliRaspredeleniyaPoPeriodams/{Codes}")]
	public class ProfiliRaspredeleniyaPoPeriodamsRequest/*ПрофилиРаспределенияПоПериодамЗапрос*/: IReturn<List<ProfiliRaspredeleniyaPoPeriodamRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ProfiliRaspredeleniyaPoPeriodamsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ProfiliRaspredeleniyaPoPeriodamsResponse//ПрофилиРаспределенияПоПериодамОтвет
	{
		public string Result {get;set;}
	}


	public class ProfiliRaspredeleniyaPoPeriodamService /*ПрофилиРаспределенияПоПериодамСервис*/ : Service
	{
		public object Any(ProfiliRaspredeleniyaPoPeriodamRequest request)
		{
			return new ProfiliRaspredeleniyaPoPeriodamResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ProfiliRaspredeleniyaPoPeriodamRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ПрофилиРаспределенияПоПериодам.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ProfiliRaspredeleniyaPoPeriodamResponse() {Result = "ПрофилиРаспределенияПоПериодам c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ProfiliRaspredeleniyaPoPeriodamsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПрофилиРаспределенияПоПериодам>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ПрофилиРаспределенияПоПериодам.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
