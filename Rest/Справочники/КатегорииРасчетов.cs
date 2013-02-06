
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KategoriiRaschetov")]
	[Route("/Catalogs/KategoriiRaschetov/{Code}")]
	public class KategoriiRaschetovRequest/*КатегорииРасчетовЗапрос*/: V82.СправочникиСсылка.КатегорииРасчетов,IReturn<KategoriiRaschetovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KategoriiRaschetovResponse//КатегорииРасчетовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KategoriiRaschetovs")]
	[Route("/Catalogs/KategoriiRaschetovs/{Codes}")]
	public class KategoriiRaschetovsRequest/*КатегорииРасчетовЗапрос*/: IReturn<List<KategoriiRaschetovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KategoriiRaschetovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KategoriiRaschetovsResponse//КатегорииРасчетовОтвет
	{
		public string Result {get;set;}
	}


	public class KategoriiRaschetovService /*КатегорииРасчетовСервис*/ : Service
	{
		public object Any(KategoriiRaschetovRequest request)
		{
			return new KategoriiRaschetovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KategoriiRaschetovRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.КатегорииРасчетов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new KategoriiRaschetovResponse() {Result = "КатегорииРасчетов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(KategoriiRaschetovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КатегорииРасчетов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.КатегорииРасчетов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
