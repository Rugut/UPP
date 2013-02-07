
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Valyuty")]
	[Route("/Catalogs/Valyuty/FindById/{Id}")]
	[Route("/Catalogs/Valyuty/FindByCode/{Code}")]
	[Route("/Catalogs/Valyuty/FindByDescr/{Descr}")]
	public class ValyutyRequest/*ВалютыЗапрос*/: V82.СправочникиСсылка.Валюты,IReturn<ValyutyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ValyutyResponse//ВалютыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Valyutys")]
	[Route("/Catalogs/Valyutys/{Codes}")]
	public class ValyutysRequest/*ВалютыЗапрос*/: IReturn<List<ValyutyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ValyutysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ValyutysResponse//ВалютыОтвет
	{
		public string Result {get;set;}
	}


	public class ValyutyService /*ВалютыСервис*/ : Service
	{
		public object Any(ValyutyRequest request)
		{
			return new ValyutyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ValyutyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.Валюты.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ValyutyResponse() {Result = "Валюты c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ValyutysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Валюты>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.Валюты.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}