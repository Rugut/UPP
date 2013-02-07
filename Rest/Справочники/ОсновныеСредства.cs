
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OsnovnyeSredstva")]
	[Route("/Catalogs/OsnovnyeSredstva/FindById/{Id}")]
	[Route("/Catalogs/OsnovnyeSredstva/FindByCode/{Code}")]
	[Route("/Catalogs/OsnovnyeSredstva/FindByDescr/{Descr}")]
	public class OsnovnyeSredstvaRequest/*ОсновныеСредстваЗапрос*/: V82.СправочникиСсылка.ОсновныеСредства,IReturn<OsnovnyeSredstvaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsnovnyeSredstvaResponse//ОсновныеСредстваОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsnovnyeSredstvas")]
	[Route("/Catalogs/OsnovnyeSredstvas/{Codes}")]
	public class OsnovnyeSredstvasRequest/*ОсновныеСредстваЗапрос*/: IReturn<List<OsnovnyeSredstvaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsnovnyeSredstvasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsnovnyeSredstvasResponse//ОсновныеСредстваОтвет
	{
		public string Result {get;set;}
	}


	public class OsnovnyeSredstvaService /*ОсновныеСредстваСервис*/ : Service
	{
		public object Any(OsnovnyeSredstvaRequest request)
		{
			return new OsnovnyeSredstvaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsnovnyeSredstvaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ОсновныеСредства.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new OsnovnyeSredstvaResponse() {Result = "ОсновныеСредства c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(OsnovnyeSredstvasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОсновныеСредства>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ОсновныеСредства.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}