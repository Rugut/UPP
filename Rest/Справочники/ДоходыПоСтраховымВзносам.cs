
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DokhodyPoStrakhovymVznosam")]
	[Route("/Catalogs/DokhodyPoStrakhovymVznosam/{Code}")]
	public class DokhodyPoStrakhovymVznosamRequest/*ДоходыПоСтраховымВзносамЗапрос*/: V82.СправочникиСсылка.ДоходыПоСтраховымВзносам,IReturn<DokhodyPoStrakhovymVznosamRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokhodyPoStrakhovymVznosamResponse//ДоходыПоСтраховымВзносамОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokhodyPoStrakhovymVznosams")]
	[Route("/Catalogs/DokhodyPoStrakhovymVznosams/{Codes}")]
	public class DokhodyPoStrakhovymVznosamsRequest/*ДоходыПоСтраховымВзносамЗапрос*/: IReturn<List<DokhodyPoStrakhovymVznosamRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokhodyPoStrakhovymVznosamsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokhodyPoStrakhovymVznosamsResponse//ДоходыПоСтраховымВзносамОтвет
	{
		public string Result {get;set;}
	}


	public class DokhodyPoStrakhovymVznosamService /*ДоходыПоСтраховымВзносамСервис*/ : Service
	{
		public object Any(DokhodyPoStrakhovymVznosamRequest request)
		{
			return new DokhodyPoStrakhovymVznosamResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokhodyPoStrakhovymVznosamRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ДоходыПоСтраховымВзносам.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new DokhodyPoStrakhovymVznosamResponse() {Result = "ДоходыПоСтраховымВзносам c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ДоходыПоСтраховымВзносам.НайтиПоКоду(1);
			}
		}

		public object Get(DokhodyPoStrakhovymVznosamsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДоходыПоСтраховымВзносам>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ДоходыПоСтраховымВзносам.НайтиПоКоду(СтрокаКод);
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
