
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KassyKKM")]
	[Route("/Catalogs/KassyKKM/{Code}")]
	public class KassyKKMRequest/*КассыККМЗапрос*/: V82.СправочникиСсылка.КассыККМ,IReturn<KassyKKMRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KassyKKMResponse//КассыККМОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KassyKKMs")]
	[Route("/Catalogs/KassyKKMs/{Codes}")]
	public class KassyKKMsRequest/*КассыККМЗапрос*/: IReturn<List<KassyKKMRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KassyKKMsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KassyKKMsResponse//КассыККМОтвет
	{
		public string Result {get;set;}
	}


	public class KassyKKMService /*КассыККМСервис*/ : Service
	{
		public object Any(KassyKKMRequest request)
		{
			return new KassyKKMResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KassyKKMRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.КассыККМ.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new KassyKKMResponse() {Result = "КассыККМ c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(KassyKKMsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КассыККМ>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.КассыККМ.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
