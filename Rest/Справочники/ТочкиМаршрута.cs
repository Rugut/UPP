
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TochkiMarshruta")]
	[Route("/Catalogs/TochkiMarshruta/{Code}")]
	public class TochkiMarshrutaRequest/*ТочкиМаршрутаЗапрос*/: V82.СправочникиСсылка.ТочкиМаршрута,IReturn<TochkiMarshrutaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TochkiMarshrutaResponse//ТочкиМаршрутаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TochkiMarshrutas")]
	[Route("/Catalogs/TochkiMarshrutas/{Codes}")]
	public class TochkiMarshrutasRequest/*ТочкиМаршрутаЗапрос*/: IReturn<List<TochkiMarshrutaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TochkiMarshrutasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TochkiMarshrutasResponse//ТочкиМаршрутаОтвет
	{
		public string Result {get;set;}
	}


	public class TochkiMarshrutaService /*ТочкиМаршрутаСервис*/ : Service
	{
		public object Any(TochkiMarshrutaRequest request)
		{
			return new TochkiMarshrutaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TochkiMarshrutaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ТочкиМаршрута.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new TochkiMarshrutaResponse() {Result = "ТочкиМаршрута c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ТочкиМаршрута.НайтиПоКоду(1);
			}
		}

		public object Get(TochkiMarshrutasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТочкиМаршрута>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ТочкиМаршрута.НайтиПоКоду(СтрокаКод);
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
