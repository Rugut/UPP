
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DokumentyObObrazovanii")]
	[Route("/Catalogs/DokumentyObObrazovanii/{Code}")]
	public class DokumentyObObrazovaniiRequest/*ДокументыОбОбразованииЗапрос*/: V82.СправочникиСсылка.ДокументыОбОбразовании,IReturn<DokumentyObObrazovaniiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokumentyObObrazovaniiResponse//ДокументыОбОбразованииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokumentyObObrazovaniis")]
	[Route("/Catalogs/DokumentyObObrazovaniis/{Codes}")]
	public class DokumentyObObrazovaniisRequest/*ДокументыОбОбразованииЗапрос*/: IReturn<List<DokumentyObObrazovaniiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokumentyObObrazovaniisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokumentyObObrazovaniisResponse//ДокументыОбОбразованииОтвет
	{
		public string Result {get;set;}
	}


	public class DokumentyObObrazovaniiService /*ДокументыОбОбразованииСервис*/ : Service
	{
		public object Any(DokumentyObObrazovaniiRequest request)
		{
			return new DokumentyObObrazovaniiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokumentyObObrazovaniiRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ДокументыОбОбразовании.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new DokumentyObObrazovaniiResponse() {Result = "ДокументыОбОбразовании c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ДокументыОбОбразовании.НайтиПоКоду(1);
			}
		}

		public object Get(DokumentyObObrazovaniisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДокументыОбОбразовании>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ДокументыОбОбразовании.НайтиПоКоду(СтрокаКод);
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
