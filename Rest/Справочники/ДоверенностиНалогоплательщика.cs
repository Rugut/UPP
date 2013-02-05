
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DoverennostiNalogoplatelshhika")]
	[Route("/Catalogs/DoverennostiNalogoplatelshhika/{Code}")]
	public class DoverennostiNalogoplatelshhikaRequest/*ДоверенностиНалогоплательщикаЗапрос*/: V82.СправочникиСсылка.ДоверенностиНалогоплательщика,IReturn<DoverennostiNalogoplatelshhikaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DoverennostiNalogoplatelshhikaResponse//ДоверенностиНалогоплательщикаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DoverennostiNalogoplatelshhikas")]
	[Route("/Catalogs/DoverennostiNalogoplatelshhikas/{Codes}")]
	public class DoverennostiNalogoplatelshhikasRequest/*ДоверенностиНалогоплательщикаЗапрос*/: IReturn<List<DoverennostiNalogoplatelshhikaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DoverennostiNalogoplatelshhikasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DoverennostiNalogoplatelshhikasResponse//ДоверенностиНалогоплательщикаОтвет
	{
		public string Result {get;set;}
	}


	public class DoverennostiNalogoplatelshhikaService /*ДоверенностиНалогоплательщикаСервис*/ : Service
	{
		public object Any(DoverennostiNalogoplatelshhikaRequest request)
		{
			return new DoverennostiNalogoplatelshhikaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DoverennostiNalogoplatelshhikaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ДоверенностиНалогоплательщика.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new DoverennostiNalogoplatelshhikaResponse() {Result = "ДоверенностиНалогоплательщика c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(DoverennostiNalogoplatelshhikasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДоверенностиНалогоплательщика>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ДоверенностиНалогоплательщика.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
