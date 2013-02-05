
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NaznacheniyaIspolzovaniya")]
	[Route("/Catalogs/NaznacheniyaIspolzovaniya/{Code}")]
	public class NaznacheniyaIspolzovaniyaRequest/*НазначенияИспользованияЗапрос*/: V82.СправочникиСсылка.НазначенияИспользования,IReturn<NaznacheniyaIspolzovaniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NaznacheniyaIspolzovaniyaResponse//НазначенияИспользованияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NaznacheniyaIspolzovaniyas")]
	[Route("/Catalogs/NaznacheniyaIspolzovaniyas/{Codes}")]
	public class NaznacheniyaIspolzovaniyasRequest/*НазначенияИспользованияЗапрос*/: IReturn<List<NaznacheniyaIspolzovaniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NaznacheniyaIspolzovaniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NaznacheniyaIspolzovaniyasResponse//НазначенияИспользованияОтвет
	{
		public string Result {get;set;}
	}


	public class NaznacheniyaIspolzovaniyaService /*НазначенияИспользованияСервис*/ : Service
	{
		public object Any(NaznacheniyaIspolzovaniyaRequest request)
		{
			return new NaznacheniyaIspolzovaniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NaznacheniyaIspolzovaniyaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.НазначенияИспользования.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NaznacheniyaIspolzovaniyaResponse() {Result = "НазначенияИспользования c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NaznacheniyaIspolzovaniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НазначенияИспользования>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.НазначенияИспользования.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
