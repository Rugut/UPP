
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/PrichinyZakrytiyaZakazov")]
	[Route("/Catalogs/PrichinyZakrytiyaZakazov/{Code}")]
	public class PrichinyZakrytiyaZakazovRequest/*ПричиныЗакрытияЗаказовЗапрос*/: V82.СправочникиСсылка.ПричиныЗакрытияЗаказов,IReturn<PrichinyZakrytiyaZakazovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PrichinyZakrytiyaZakazovResponse//ПричиныЗакрытияЗаказовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/PrichinyZakrytiyaZakazovs")]
	[Route("/Catalogs/PrichinyZakrytiyaZakazovs/{Codes}")]
	public class PrichinyZakrytiyaZakazovsRequest/*ПричиныЗакрытияЗаказовЗапрос*/: IReturn<List<PrichinyZakrytiyaZakazovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PrichinyZakrytiyaZakazovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PrichinyZakrytiyaZakazovsResponse//ПричиныЗакрытияЗаказовОтвет
	{
		public string Result {get;set;}
	}


	public class PrichinyZakrytiyaZakazovService /*ПричиныЗакрытияЗаказовСервис*/ : Service
	{
		public object Any(PrichinyZakrytiyaZakazovRequest request)
		{
			return new PrichinyZakrytiyaZakazovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PrichinyZakrytiyaZakazovRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ПричиныЗакрытияЗаказов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new PrichinyZakrytiyaZakazovResponse() {Result = "ПричиныЗакрытияЗаказов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(PrichinyZakrytiyaZakazovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПричиныЗакрытияЗаказов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ПричиныЗакрытияЗаказов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
