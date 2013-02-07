
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TekhnologicheskieKartyProizvodstva")]
	[Route("/Catalogs/TekhnologicheskieKartyProizvodstva/FindById/{Id}")]
	[Route("/Catalogs/TekhnologicheskieKartyProizvodstva/FindByCode/{Code}")]
	[Route("/Catalogs/TekhnologicheskieKartyProizvodstva/FindByDescr/{Descr}")]
	public class TekhnologicheskieKartyProizvodstvaRequest/*ТехнологическиеКартыПроизводстваЗапрос*/: V82.СправочникиСсылка.ТехнологическиеКартыПроизводства,IReturn<TekhnologicheskieKartyProizvodstvaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TekhnologicheskieKartyProizvodstvaResponse//ТехнологическиеКартыПроизводстваОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TekhnologicheskieKartyProizvodstvas")]
	[Route("/Catalogs/TekhnologicheskieKartyProizvodstvas/{Codes}")]
	public class TekhnologicheskieKartyProizvodstvasRequest/*ТехнологическиеКартыПроизводстваЗапрос*/: IReturn<List<TekhnologicheskieKartyProizvodstvaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TekhnologicheskieKartyProizvodstvasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TekhnologicheskieKartyProizvodstvasResponse//ТехнологическиеКартыПроизводстваОтвет
	{
		public string Result {get;set;}
	}


	public class TekhnologicheskieKartyProizvodstvaService /*ТехнологическиеКартыПроизводстваСервис*/ : Service
	{
		public object Any(TekhnologicheskieKartyProizvodstvaRequest request)
		{
			return new TekhnologicheskieKartyProizvodstvaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TekhnologicheskieKartyProizvodstvaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ТехнологическиеКартыПроизводства.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TekhnologicheskieKartyProizvodstvaResponse() {Result = "ТехнологическиеКартыПроизводства c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TekhnologicheskieKartyProizvodstvasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТехнологическиеКартыПроизводства>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ТехнологическиеКартыПроизводства.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}