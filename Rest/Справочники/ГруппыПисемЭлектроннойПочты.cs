
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GruppyPisemEHlektronnojjPochty")]
	[Route("/Catalogs/GruppyPisemEHlektronnojjPochty/FindById/{Id}")]
	[Route("/Catalogs/GruppyPisemEHlektronnojjPochty/FindByCode/{Code}")]
	[Route("/Catalogs/GruppyPisemEHlektronnojjPochty/FindByDescr/{Descr}")]
	public class GruppyPisemEHlektronnojjPochtyRequest/*ГруппыПисемЭлектроннойПочтыЗапрос*/: V82.СправочникиСсылка.ГруппыПисемЭлектроннойПочты,IReturn<GruppyPisemEHlektronnojjPochtyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppyPisemEHlektronnojjPochtyResponse//ГруппыПисемЭлектроннойПочтыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppyPisemEHlektronnojjPochtys")]
	[Route("/Catalogs/GruppyPisemEHlektronnojjPochtys/{Codes}")]
	public class GruppyPisemEHlektronnojjPochtysRequest/*ГруппыПисемЭлектроннойПочтыЗапрос*/: IReturn<List<GruppyPisemEHlektronnojjPochtyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppyPisemEHlektronnojjPochtysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppyPisemEHlektronnojjPochtysResponse//ГруппыПисемЭлектроннойПочтыОтвет
	{
		public string Result {get;set;}
	}


	public class GruppyPisemEHlektronnojjPochtyService /*ГруппыПисемЭлектроннойПочтыСервис*/ : Service
	{
		public object Any(GruppyPisemEHlektronnojjPochtyRequest request)
		{
			return new GruppyPisemEHlektronnojjPochtyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppyPisemEHlektronnojjPochtyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ГруппыПисемЭлектроннойПочты.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new GruppyPisemEHlektronnojjPochtyResponse() {Result = "ГруппыПисемЭлектроннойПочты c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(GruppyPisemEHlektronnojjPochtysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГруппыПисемЭлектроннойПочты>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ГруппыПисемЭлектроннойПочты.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}