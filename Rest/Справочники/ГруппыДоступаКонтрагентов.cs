
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GruppyDostupaKontragentov")]
	[Route("/Catalogs/GruppyDostupaKontragentov/{Code}")]
	public class GruppyDostupaKontragentovRequest/*ГруппыДоступаКонтрагентовЗапрос*/: V82.СправочникиСсылка.ГруппыДоступаКонтрагентов,IReturn<GruppyDostupaKontragentovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppyDostupaKontragentovResponse//ГруппыДоступаКонтрагентовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppyDostupaKontragentovs")]
	[Route("/Catalogs/GruppyDostupaKontragentovs/{Codes}")]
	public class GruppyDostupaKontragentovsRequest/*ГруппыДоступаКонтрагентовЗапрос*/: IReturn<List<GruppyDostupaKontragentovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppyDostupaKontragentovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppyDostupaKontragentovsResponse//ГруппыДоступаКонтрагентовОтвет
	{
		public string Result {get;set;}
	}


	public class GruppyDostupaKontragentovService /*ГруппыДоступаКонтрагентовСервис*/ : Service
	{
		public object Any(GruppyDostupaKontragentovRequest request)
		{
			return new GruppyDostupaKontragentovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppyDostupaKontragentovRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ГруппыДоступаКонтрагентов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new GruppyDostupaKontragentovResponse() {Result = "ГруппыДоступаКонтрагентов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(GruppyDostupaKontragentovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГруппыДоступаКонтрагентов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ГруппыДоступаКонтрагентов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
