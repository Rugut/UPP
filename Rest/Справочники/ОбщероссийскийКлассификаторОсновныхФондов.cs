
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ObshherossijjskijjKlassifikatorOsnovnykhFondov")]
	[Route("/Catalogs/ObshherossijjskijjKlassifikatorOsnovnykhFondov/{Code}")]
	public class ObshherossijjskijjKlassifikatorOsnovnykhFondovRequest/*ОбщероссийскийКлассификаторОсновныхФондовЗапрос*/: V82.СправочникиСсылка.ОбщероссийскийКлассификаторОсновныхФондов,IReturn<ObshherossijjskijjKlassifikatorOsnovnykhFondovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ObshherossijjskijjKlassifikatorOsnovnykhFondovResponse//ОбщероссийскийКлассификаторОсновныхФондовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ObshherossijjskijjKlassifikatorOsnovnykhFondovs")]
	[Route("/Catalogs/ObshherossijjskijjKlassifikatorOsnovnykhFondovs/{Codes}")]
	public class ObshherossijjskijjKlassifikatorOsnovnykhFondovsRequest/*ОбщероссийскийКлассификаторОсновныхФондовЗапрос*/: IReturn<List<ObshherossijjskijjKlassifikatorOsnovnykhFondovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ObshherossijjskijjKlassifikatorOsnovnykhFondovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ObshherossijjskijjKlassifikatorOsnovnykhFondovsResponse//ОбщероссийскийКлассификаторОсновныхФондовОтвет
	{
		public string Result {get;set;}
	}


	public class ObshherossijjskijjKlassifikatorOsnovnykhFondovService /*ОбщероссийскийКлассификаторОсновныхФондовСервис*/ : Service
	{
		public object Any(ObshherossijjskijjKlassifikatorOsnovnykhFondovRequest request)
		{
			return new ObshherossijjskijjKlassifikatorOsnovnykhFondovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ObshherossijjskijjKlassifikatorOsnovnykhFondovRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ОбщероссийскийКлассификаторОсновныхФондов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ObshherossijjskijjKlassifikatorOsnovnykhFondovResponse() {Result = "ОбщероссийскийКлассификаторОсновныхФондов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ObshherossijjskijjKlassifikatorOsnovnykhFondovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОбщероссийскийКлассификаторОсновныхФондов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ОбщероссийскийКлассификаторОсновныхФондов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
