
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/UchetnyeZapisiEHlektronnojjPochty")]
	[Route("/Catalogs/UchetnyeZapisiEHlektronnojjPochty/{Code}")]
	public class UchetnyeZapisiEHlektronnojjPochtyRequest/*УчетныеЗаписиЭлектроннойПочтыЗапрос*/: V82.СправочникиСсылка.УчетныеЗаписиЭлектроннойПочты,IReturn<UchetnyeZapisiEHlektronnojjPochtyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class UchetnyeZapisiEHlektronnojjPochtyResponse//УчетныеЗаписиЭлектроннойПочтыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/UchetnyeZapisiEHlektronnojjPochtys")]
	[Route("/Catalogs/UchetnyeZapisiEHlektronnojjPochtys/{Codes}")]
	public class UchetnyeZapisiEHlektronnojjPochtysRequest/*УчетныеЗаписиЭлектроннойПочтыЗапрос*/: IReturn<List<UchetnyeZapisiEHlektronnojjPochtyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public UchetnyeZapisiEHlektronnojjPochtysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class UchetnyeZapisiEHlektronnojjPochtysResponse//УчетныеЗаписиЭлектроннойПочтыОтвет
	{
		public string Result {get;set;}
	}


	public class UchetnyeZapisiEHlektronnojjPochtyService /*УчетныеЗаписиЭлектроннойПочтыСервис*/ : Service
	{
		public object Any(UchetnyeZapisiEHlektronnojjPochtyRequest request)
		{
			return new UchetnyeZapisiEHlektronnojjPochtyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(UchetnyeZapisiEHlektronnojjPochtyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.УчетныеЗаписиЭлектроннойПочты.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new UchetnyeZapisiEHlektronnojjPochtyResponse() {Result = "УчетныеЗаписиЭлектроннойПочты c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(UchetnyeZapisiEHlektronnojjPochtysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.УчетныеЗаписиЭлектроннойПочты>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.УчетныеЗаписиЭлектроннойПочты.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
