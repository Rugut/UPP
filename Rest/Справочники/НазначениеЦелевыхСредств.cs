
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NaznachenieCelevykhSredstv")]
	[Route("/Catalogs/NaznachenieCelevykhSredstv/{Code}")]
	public class NaznachenieCelevykhSredstvRequest/*НазначениеЦелевыхСредствЗапрос*/: V82.СправочникиСсылка.НазначениеЦелевыхСредств,IReturn<NaznachenieCelevykhSredstvRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NaznachenieCelevykhSredstvResponse//НазначениеЦелевыхСредствОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NaznachenieCelevykhSredstvs")]
	[Route("/Catalogs/NaznachenieCelevykhSredstvs/{Codes}")]
	public class NaznachenieCelevykhSredstvsRequest/*НазначениеЦелевыхСредствЗапрос*/: IReturn<List<NaznachenieCelevykhSredstvRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NaznachenieCelevykhSredstvsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NaznachenieCelevykhSredstvsResponse//НазначениеЦелевыхСредствОтвет
	{
		public string Result {get;set;}
	}


	public class NaznachenieCelevykhSredstvService /*НазначениеЦелевыхСредствСервис*/ : Service
	{
		public object Any(NaznachenieCelevykhSredstvRequest request)
		{
			return new NaznachenieCelevykhSredstvResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NaznachenieCelevykhSredstvRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.НазначениеЦелевыхСредств.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NaznachenieCelevykhSredstvResponse() {Result = "НазначениеЦелевыхСредств c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NaznachenieCelevykhSredstvsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НазначениеЦелевыхСредств>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.НазначениеЦелевыхСредств.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
