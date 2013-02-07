
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NomenklaturnyeUzly")]
	[Route("/Catalogs/NomenklaturnyeUzly/FindById/{Id}")]
	[Route("/Catalogs/NomenklaturnyeUzly/FindByCode/{Code}")]
	[Route("/Catalogs/NomenklaturnyeUzly/FindByDescr/{Descr}")]
	public class NomenklaturnyeUzlyRequest/*НоменклатурныеУзлыЗапрос*/: V82.СправочникиСсылка.НоменклатурныеУзлы,IReturn<NomenklaturnyeUzlyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NomenklaturnyeUzlyResponse//НоменклатурныеУзлыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NomenklaturnyeUzlys")]
	[Route("/Catalogs/NomenklaturnyeUzlys/{Codes}")]
	public class NomenklaturnyeUzlysRequest/*НоменклатурныеУзлыЗапрос*/: IReturn<List<NomenklaturnyeUzlyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NomenklaturnyeUzlysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NomenklaturnyeUzlysResponse//НоменклатурныеУзлыОтвет
	{
		public string Result {get;set;}
	}


	public class NomenklaturnyeUzlyService /*НоменклатурныеУзлыСервис*/ : Service
	{
		public object Any(NomenklaturnyeUzlyRequest request)
		{
			return new NomenklaturnyeUzlyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NomenklaturnyeUzlyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.НоменклатурныеУзлы.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NomenklaturnyeUzlyResponse() {Result = "НоменклатурныеУзлы c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NomenklaturnyeUzlysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НоменклатурныеУзлы>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.НоменклатурныеУзлы.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}