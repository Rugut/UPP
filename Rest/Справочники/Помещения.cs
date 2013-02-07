
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Pomeshheniya")]
	[Route("/Catalogs/Pomeshheniya/FindById/{Id}")]
	[Route("/Catalogs/Pomeshheniya/FindByCode/{Code}")]
	[Route("/Catalogs/Pomeshheniya/FindByDescr/{Descr}")]
	public class PomeshheniyaRequest/*ПомещенияЗапрос*/: V82.СправочникиСсылка.Помещения,IReturn<PomeshheniyaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PomeshheniyaResponse//ПомещенияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Pomeshheniyas")]
	[Route("/Catalogs/Pomeshheniyas/{Codes}")]
	public class PomeshheniyasRequest/*ПомещенияЗапрос*/: IReturn<List<PomeshheniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PomeshheniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PomeshheniyasResponse//ПомещенияОтвет
	{
		public string Result {get;set;}
	}


	public class PomeshheniyaService /*ПомещенияСервис*/ : Service
	{
		public object Any(PomeshheniyaRequest request)
		{
			return new PomeshheniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PomeshheniyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.Помещения.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new PomeshheniyaResponse() {Result = "Помещения c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(PomeshheniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Помещения>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.Помещения.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}