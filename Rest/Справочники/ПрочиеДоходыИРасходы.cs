
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ProchieDokhodyIRaskhody")]
	[Route("/Catalogs/ProchieDokhodyIRaskhody/{Code}")]
	public class ProchieDokhodyIRaskhodyRequest/*ПрочиеДоходыИРасходыЗапрос*/: V82.СправочникиСсылка.ПрочиеДоходыИРасходы,IReturn<ProchieDokhodyIRaskhodyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ProchieDokhodyIRaskhodyResponse//ПрочиеДоходыИРасходыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ProchieDokhodyIRaskhodys")]
	[Route("/Catalogs/ProchieDokhodyIRaskhodys/{Codes}")]
	public class ProchieDokhodyIRaskhodysRequest/*ПрочиеДоходыИРасходыЗапрос*/: IReturn<List<ProchieDokhodyIRaskhodyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ProchieDokhodyIRaskhodysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ProchieDokhodyIRaskhodysResponse//ПрочиеДоходыИРасходыОтвет
	{
		public string Result {get;set;}
	}


	public class ProchieDokhodyIRaskhodyService /*ПрочиеДоходыИРасходыСервис*/ : Service
	{
		public object Any(ProchieDokhodyIRaskhodyRequest request)
		{
			return new ProchieDokhodyIRaskhodyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ProchieDokhodyIRaskhodyRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ПрочиеДоходыИРасходы.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ProchieDokhodyIRaskhodyResponse() {Result = "ПрочиеДоходыИРасходы c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ProchieDokhodyIRaskhodysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПрочиеДоходыИРасходы>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ПрочиеДоходыИРасходы.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
