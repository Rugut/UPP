
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ZvanieGrazhdanskogoVoinskogoUcheta")]
	[Route("/Catalogs/ZvanieGrazhdanskogoVoinskogoUcheta/{Code}")]
	public class ZvanieGrazhdanskogoVoinskogoUchetaRequest/*ЗваниеГражданскогоВоинскогоУчетаЗапрос*/: V82.СправочникиСсылка.ЗваниеГражданскогоВоинскогоУчета,IReturn<ZvanieGrazhdanskogoVoinskogoUchetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ZvanieGrazhdanskogoVoinskogoUchetaResponse//ЗваниеГражданскогоВоинскогоУчетаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ZvanieGrazhdanskogoVoinskogoUchetas")]
	[Route("/Catalogs/ZvanieGrazhdanskogoVoinskogoUchetas/{Codes}")]
	public class ZvanieGrazhdanskogoVoinskogoUchetasRequest/*ЗваниеГражданскогоВоинскогоУчетаЗапрос*/: IReturn<List<ZvanieGrazhdanskogoVoinskogoUchetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ZvanieGrazhdanskogoVoinskogoUchetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ZvanieGrazhdanskogoVoinskogoUchetasResponse//ЗваниеГражданскогоВоинскогоУчетаОтвет
	{
		public string Result {get;set;}
	}


	public class ZvanieGrazhdanskogoVoinskogoUchetaService /*ЗваниеГражданскогоВоинскогоУчетаСервис*/ : Service
	{
		public object Any(ZvanieGrazhdanskogoVoinskogoUchetaRequest request)
		{
			return new ZvanieGrazhdanskogoVoinskogoUchetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ZvanieGrazhdanskogoVoinskogoUchetaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ЗваниеГражданскогоВоинскогоУчета.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new ZvanieGrazhdanskogoVoinskogoUchetaResponse() {Result = "ЗваниеГражданскогоВоинскогоУчета c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ЗваниеГражданскогоВоинскогоУчета.НайтиПоКоду(1);
			}
		}

		public object Get(ZvanieGrazhdanskogoVoinskogoUchetasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЗваниеГражданскогоВоинскогоУчета>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ЗваниеГражданскогоВоинскогоУчета.НайтиПоКоду(СтрокаКод);
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
