
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GruppyPochtovojjRassylki")]
	[Route("/Catalogs/GruppyPochtovojjRassylki/FindById/{Id}")]
	[Route("/Catalogs/GruppyPochtovojjRassylki/FindByCode/{Code}")]
	[Route("/Catalogs/GruppyPochtovojjRassylki/FindByDescr/{Descr}")]
	public class GruppyPochtovojjRassylkiRequest/*ГруппыПочтовойРассылкиЗапрос*/: V82.СправочникиСсылка.ГруппыПочтовойРассылки,IReturn<GruppyPochtovojjRassylkiRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppyPochtovojjRassylkiResponse//ГруппыПочтовойРассылкиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppyPochtovojjRassylkis")]
	[Route("/Catalogs/GruppyPochtovojjRassylkis/{Codes}")]
	public class GruppyPochtovojjRassylkisRequest/*ГруппыПочтовойРассылкиЗапрос*/: IReturn<List<GruppyPochtovojjRassylkiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppyPochtovojjRassylkisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppyPochtovojjRassylkisResponse//ГруппыПочтовойРассылкиОтвет
	{
		public string Result {get;set;}
	}


	public class GruppyPochtovojjRassylkiService /*ГруппыПочтовойРассылкиСервис*/ : Service
	{
		public object Any(GruppyPochtovojjRassylkiRequest request)
		{
			return new GruppyPochtovojjRassylkiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppyPochtovojjRassylkiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ГруппыПочтовойРассылки.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new GruppyPochtovojjRassylkiResponse() {Result = "ГруппыПочтовойРассылки c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(GruppyPochtovojjRassylkisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГруппыПочтовойРассылки>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ГруппыПочтовойРассылки.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}