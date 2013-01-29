
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiZakrytiyaMesyaca")]
	[Route("/Catalogs/NastrojjkiZakrytiyaMesyaca/{Code}")]
	public class NastrojjkiZakrytiyaMesyacaRequest/*НастройкиЗакрытияМесяцаЗапрос*/: V82.СправочникиСсылка.НастройкиЗакрытияМесяца,IReturn<NastrojjkiZakrytiyaMesyacaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiZakrytiyaMesyacaResponse//НастройкиЗакрытияМесяцаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiZakrytiyaMesyacas")]
	[Route("/Catalogs/NastrojjkiZakrytiyaMesyacas/{Codes}")]
	public class NastrojjkiZakrytiyaMesyacasRequest/*НастройкиЗакрытияМесяцаЗапрос*/: IReturn<List<NastrojjkiZakrytiyaMesyacaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiZakrytiyaMesyacasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiZakrytiyaMesyacasResponse//НастройкиЗакрытияМесяцаОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiZakrytiyaMesyacaService /*НастройкиЗакрытияМесяцаСервис*/ : Service
	{
		public object Any(NastrojjkiZakrytiyaMesyacaRequest request)
		{
			return new NastrojjkiZakrytiyaMesyacaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiZakrytiyaMesyacaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.НастройкиЗакрытияМесяца.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NastrojjkiZakrytiyaMesyacaResponse() {Result = "НастройкиЗакрытияМесяца c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.НастройкиЗакрытияМесяца.НайтиПоКоду(1);
			}
		}

		public object Get(NastrojjkiZakrytiyaMesyacasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиЗакрытияМесяца>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.НастройкиЗакрытияМесяца.НайтиПоКоду(СтрокаКод);
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
