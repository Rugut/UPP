
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Kontragenty")]
	[Route("/Catalogs/Kontragenty/{Code}")]
	public class KontragentyRequest/*КонтрагентыЗапрос*/: V82.СправочникиСсылка.Контрагенты,IReturn<KontragentyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KontragentyResponse//КонтрагентыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Kontragentys")]
	[Route("/Catalogs/Kontragentys/{Codes}")]
	public class KontragentysRequest/*КонтрагентыЗапрос*/: IReturn<List<KontragentyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KontragentysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KontragentysResponse//КонтрагентыОтвет
	{
		public string Result {get;set;}
	}


	public class KontragentyService /*КонтрагентыСервис*/ : Service
	{
		public object Any(KontragentyRequest request)
		{
			return new KontragentyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KontragentyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.Контрагенты.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KontragentyResponse() {Result = "Контрагенты c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.Контрагенты.НайтиПоКоду(1);
			}
		}

		public object Get(KontragentysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Контрагенты>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.Контрагенты.НайтиПоКоду(СтрокаКод);
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
