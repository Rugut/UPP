
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ZayavkiKandidatov")]
	[Route("/Catalogs/ZayavkiKandidatov/{Code}")]
	public class ZayavkiKandidatovRequest/*ЗаявкиКандидатовЗапрос*/: V82.СправочникиСсылка.ЗаявкиКандидатов,IReturn<ZayavkiKandidatovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ZayavkiKandidatovResponse//ЗаявкиКандидатовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ZayavkiKandidatovs")]
	[Route("/Catalogs/ZayavkiKandidatovs/{Codes}")]
	public class ZayavkiKandidatovsRequest/*ЗаявкиКандидатовЗапрос*/: IReturn<List<ZayavkiKandidatovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ZayavkiKandidatovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ZayavkiKandidatovsResponse//ЗаявкиКандидатовОтвет
	{
		public string Result {get;set;}
	}


	public class ZayavkiKandidatovService /*ЗаявкиКандидатовСервис*/ : Service
	{
		public object Any(ZayavkiKandidatovRequest request)
		{
			return new ZayavkiKandidatovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ZayavkiKandidatovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ЗаявкиКандидатов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new ZayavkiKandidatovResponse() {Result = "ЗаявкиКандидатов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ЗаявкиКандидатов.НайтиПоКоду(1);
			}
		}

		public object Get(ZayavkiKandidatovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЗаявкиКандидатов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ЗаявкиКандидатов.НайтиПоКоду(СтрокаКод);
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
