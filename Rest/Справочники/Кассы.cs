
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Kassy")]
	[Route("/Catalogs/Kassy/{Code}")]
	public class KassyRequest/*КассыЗапрос*/: V82.СправочникиСсылка.Кассы,IReturn<KassyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KassyResponse//КассыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Kassys")]
	[Route("/Catalogs/Kassys/{Codes}")]
	public class KassysRequest/*КассыЗапрос*/: IReturn<List<KassyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KassysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KassysResponse//КассыОтвет
	{
		public string Result {get;set;}
	}


	public class KassyService /*КассыСервис*/ : Service
	{
		public object Any(KassyRequest request)
		{
			return new KassyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KassyRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.Кассы.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new KassyResponse() {Result = "Кассы c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(KassysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Кассы>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.Кассы.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
