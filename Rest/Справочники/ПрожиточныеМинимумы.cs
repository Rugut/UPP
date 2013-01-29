
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ProzhitochnyeMinimumy")]
	[Route("/Catalogs/ProzhitochnyeMinimumy/{Code}")]
	public class ProzhitochnyeMinimumyRequest/*ПрожиточныеМинимумыЗапрос*/: V82.СправочникиСсылка.ПрожиточныеМинимумы,IReturn<ProzhitochnyeMinimumyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ProzhitochnyeMinimumyResponse//ПрожиточныеМинимумыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ProzhitochnyeMinimumys")]
	[Route("/Catalogs/ProzhitochnyeMinimumys/{Codes}")]
	public class ProzhitochnyeMinimumysRequest/*ПрожиточныеМинимумыЗапрос*/: IReturn<List<ProzhitochnyeMinimumyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ProzhitochnyeMinimumysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ProzhitochnyeMinimumysResponse//ПрожиточныеМинимумыОтвет
	{
		public string Result {get;set;}
	}


	public class ProzhitochnyeMinimumyService /*ПрожиточныеМинимумыСервис*/ : Service
	{
		public object Any(ProzhitochnyeMinimumyRequest request)
		{
			return new ProzhitochnyeMinimumyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ProzhitochnyeMinimumyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ПрожиточныеМинимумы.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new ProzhitochnyeMinimumyResponse() {Result = "ПрожиточныеМинимумы c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ПрожиточныеМинимумы.НайтиПоКоду(1);
			}
		}

		public object Get(ProzhitochnyeMinimumysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПрожиточныеМинимумы>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ПрожиточныеМинимумы.НайтиПоКоду(СтрокаКод);
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
