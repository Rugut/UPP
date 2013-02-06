
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SposobyRaspredeleniyaZatratNaVypusk")]
	[Route("/Catalogs/SposobyRaspredeleniyaZatratNaVypusk/{Code}")]
	public class SposobyRaspredeleniyaZatratNaVypuskRequest/*СпособыРаспределенияЗатратНаВыпускЗапрос*/: V82.СправочникиСсылка.СпособыРаспределенияЗатратНаВыпуск,IReturn<SposobyRaspredeleniyaZatratNaVypuskRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SposobyRaspredeleniyaZatratNaVypuskResponse//СпособыРаспределенияЗатратНаВыпускОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SposobyRaspredeleniyaZatratNaVypusks")]
	[Route("/Catalogs/SposobyRaspredeleniyaZatratNaVypusks/{Codes}")]
	public class SposobyRaspredeleniyaZatratNaVypusksRequest/*СпособыРаспределенияЗатратНаВыпускЗапрос*/: IReturn<List<SposobyRaspredeleniyaZatratNaVypuskRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SposobyRaspredeleniyaZatratNaVypusksRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SposobyRaspredeleniyaZatratNaVypusksResponse//СпособыРаспределенияЗатратНаВыпускОтвет
	{
		public string Result {get;set;}
	}


	public class SposobyRaspredeleniyaZatratNaVypuskService /*СпособыРаспределенияЗатратНаВыпускСервис*/ : Service
	{
		public object Any(SposobyRaspredeleniyaZatratNaVypuskRequest request)
		{
			return new SposobyRaspredeleniyaZatratNaVypuskResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SposobyRaspredeleniyaZatratNaVypuskRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СпособыРаспределенияЗатратНаВыпуск.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SposobyRaspredeleniyaZatratNaVypuskResponse() {Result = "СпособыРаспределенияЗатратНаВыпуск c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SposobyRaspredeleniyaZatratNaVypusksRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СпособыРаспределенияЗатратНаВыпуск>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СпособыРаспределенияЗатратНаВыпуск.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
