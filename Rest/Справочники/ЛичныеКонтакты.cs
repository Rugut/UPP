
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/LichnyeKontakty")]
	[Route("/Catalogs/LichnyeKontakty/{Code}")]
	public class LichnyeKontaktyRequest/*ЛичныеКонтактыЗапрос*/: V82.СправочникиСсылка.ЛичныеКонтакты,IReturn<LichnyeKontaktyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class LichnyeKontaktyResponse//ЛичныеКонтактыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/LichnyeKontaktys")]
	[Route("/Catalogs/LichnyeKontaktys/{Codes}")]
	public class LichnyeKontaktysRequest/*ЛичныеКонтактыЗапрос*/: IReturn<List<LichnyeKontaktyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public LichnyeKontaktysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class LichnyeKontaktysResponse//ЛичныеКонтактыОтвет
	{
		public string Result {get;set;}
	}


	public class LichnyeKontaktyService /*ЛичныеКонтактыСервис*/ : Service
	{
		public object Any(LichnyeKontaktyRequest request)
		{
			return new LichnyeKontaktyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(LichnyeKontaktyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ЛичныеКонтакты.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new LichnyeKontaktyResponse() {Result = "ЛичныеКонтакты c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ЛичныеКонтакты.НайтиПоКоду(1);
			}
		}

		public object Get(LichnyeKontaktysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЛичныеКонтакты>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ЛичныеКонтакты.НайтиПоКоду(СтрокаКод);
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
