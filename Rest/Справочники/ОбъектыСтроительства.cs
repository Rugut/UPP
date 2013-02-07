
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ObektyStroitelstva")]
	[Route("/Catalogs/ObektyStroitelstva/FindById/{Id}")]
	[Route("/Catalogs/ObektyStroitelstva/FindByCode/{Code}")]
	[Route("/Catalogs/ObektyStroitelstva/FindByDescr/{Descr}")]
	public class ObektyStroitelstvaRequest/*ОбъектыСтроительстваЗапрос*/: V82.СправочникиСсылка.ОбъектыСтроительства,IReturn<ObektyStroitelstvaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ObektyStroitelstvaResponse//ОбъектыСтроительстваОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ObektyStroitelstvas")]
	[Route("/Catalogs/ObektyStroitelstvas/{Codes}")]
	public class ObektyStroitelstvasRequest/*ОбъектыСтроительстваЗапрос*/: IReturn<List<ObektyStroitelstvaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ObektyStroitelstvasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ObektyStroitelstvasResponse//ОбъектыСтроительстваОтвет
	{
		public string Result {get;set;}
	}


	public class ObektyStroitelstvaService /*ОбъектыСтроительстваСервис*/ : Service
	{
		public object Any(ObektyStroitelstvaRequest request)
		{
			return new ObektyStroitelstvaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ObektyStroitelstvaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ОбъектыСтроительства.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ObektyStroitelstvaResponse() {Result = "ОбъектыСтроительства c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ObektyStroitelstvasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОбъектыСтроительства>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ОбъектыСтроительства.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}