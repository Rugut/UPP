
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SposobyOtrazheniyaZarplatyVReglUchete")]
	[Route("/Catalogs/SposobyOtrazheniyaZarplatyVReglUchete/{Code}")]
	public class SposobyOtrazheniyaZarplatyVReglUcheteRequest/*СпособыОтраженияЗарплатыВРеглУчетеЗапрос*/: V82.СправочникиСсылка.СпособыОтраженияЗарплатыВРеглУчете,IReturn<SposobyOtrazheniyaZarplatyVReglUcheteRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SposobyOtrazheniyaZarplatyVReglUcheteResponse//СпособыОтраженияЗарплатыВРеглУчетеОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SposobyOtrazheniyaZarplatyVReglUchetes")]
	[Route("/Catalogs/SposobyOtrazheniyaZarplatyVReglUchetes/{Codes}")]
	public class SposobyOtrazheniyaZarplatyVReglUchetesRequest/*СпособыОтраженияЗарплатыВРеглУчетеЗапрос*/: IReturn<List<SposobyOtrazheniyaZarplatyVReglUcheteRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SposobyOtrazheniyaZarplatyVReglUchetesRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SposobyOtrazheniyaZarplatyVReglUchetesResponse//СпособыОтраженияЗарплатыВРеглУчетеОтвет
	{
		public string Result {get;set;}
	}


	public class SposobyOtrazheniyaZarplatyVReglUcheteService /*СпособыОтраженияЗарплатыВРеглУчетеСервис*/ : Service
	{
		public object Any(SposobyOtrazheniyaZarplatyVReglUcheteRequest request)
		{
			return new SposobyOtrazheniyaZarplatyVReglUcheteResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SposobyOtrazheniyaZarplatyVReglUcheteRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СпособыОтраженияЗарплатыВРеглУчете.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new SposobyOtrazheniyaZarplatyVReglUcheteResponse() {Result = "СпособыОтраженияЗарплатыВРеглУчете c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СпособыОтраженияЗарплатыВРеглУчете.НайтиПоКоду(1);
			}
		}

		public object Get(SposobyOtrazheniyaZarplatyVReglUchetesRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СпособыОтраженияЗарплатыВРеглУчете>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СпособыОтраженияЗарплатыВРеглУчете.НайтиПоКоду(СтрокаКод);
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
