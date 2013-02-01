
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KontaktnyeLicaKontragentov")]
	[Route("/Catalogs/KontaktnyeLicaKontragentov/{Code}")]
	public class KontaktnyeLicaKontragentovRequest/*КонтактныеЛицаКонтрагентовЗапрос*/: V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов,IReturn<KontaktnyeLicaKontragentovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KontaktnyeLicaKontragentovResponse//КонтактныеЛицаКонтрагентовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KontaktnyeLicaKontragentovs")]
	[Route("/Catalogs/KontaktnyeLicaKontragentovs/{Codes}")]
	public class KontaktnyeLicaKontragentovsRequest/*КонтактныеЛицаКонтрагентовЗапрос*/: IReturn<List<KontaktnyeLicaKontragentovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KontaktnyeLicaKontragentovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KontaktnyeLicaKontragentovsResponse//КонтактныеЛицаКонтрагентовОтвет
	{
		public string Result {get;set;}
	}


	public class KontaktnyeLicaKontragentovService /*КонтактныеЛицаКонтрагентовСервис*/ : Service
	{
		public object Any(KontaktnyeLicaKontragentovRequest request)
		{
			return new KontaktnyeLicaKontragentovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KontaktnyeLicaKontragentovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КонтактныеЛицаКонтрагентов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KontaktnyeLicaKontragentovResponse() {Result = "КонтактныеЛицаКонтрагентов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КонтактныеЛицаКонтрагентов.НайтиПоКоду(1);
			}
		}

		public object Get(KontaktnyeLicaKontragentovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КонтактныеЛицаКонтрагентов.НайтиПоКоду(СтрокаКод);
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
