
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Polzovateli")]
	[Route("/Catalogs/Polzovateli/{Code}")]
	public class PolzovateliRequest/*ПользователиЗапрос*/: V82.СправочникиСсылка.Пользователи,IReturn<PolzovateliRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PolzovateliResponse//ПользователиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Polzovatelis")]
	[Route("/Catalogs/Polzovatelis/{Codes}")]
	public class PolzovatelisRequest/*ПользователиЗапрос*/: IReturn<List<PolzovateliRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PolzovatelisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PolzovatelisResponse//ПользователиОтвет
	{
		public string Result {get;set;}
	}


	public class PolzovateliService /*ПользователиСервис*/ : Service
	{
		public object Any(PolzovateliRequest request)
		{
			return new PolzovateliResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PolzovateliRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.Пользователи.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new PolzovateliResponse() {Result = "Пользователи c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(PolzovatelisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Пользователи>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.Пользователи.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
