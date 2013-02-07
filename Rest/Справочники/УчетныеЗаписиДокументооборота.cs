
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/UchetnyeZapisiDokumentooborota")]
	[Route("/Catalogs/UchetnyeZapisiDokumentooborota/FindById/{Id}")]
	[Route("/Catalogs/UchetnyeZapisiDokumentooborota/FindByCode/{Code}")]
	[Route("/Catalogs/UchetnyeZapisiDokumentooborota/FindByDescr/{Descr}")]
	public class UchetnyeZapisiDokumentooborotaRequest/*УчетныеЗаписиДокументооборотаЗапрос*/: V82.СправочникиСсылка.УчетныеЗаписиДокументооборота,IReturn<UchetnyeZapisiDokumentooborotaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class UchetnyeZapisiDokumentooborotaResponse//УчетныеЗаписиДокументооборотаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/UchetnyeZapisiDokumentooborotas")]
	[Route("/Catalogs/UchetnyeZapisiDokumentooborotas/{Codes}")]
	public class UchetnyeZapisiDokumentooborotasRequest/*УчетныеЗаписиДокументооборотаЗапрос*/: IReturn<List<UchetnyeZapisiDokumentooborotaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public UchetnyeZapisiDokumentooborotasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class UchetnyeZapisiDokumentooborotasResponse//УчетныеЗаписиДокументооборотаОтвет
	{
		public string Result {get;set;}
	}


	public class UchetnyeZapisiDokumentooborotaService /*УчетныеЗаписиДокументооборотаСервис*/ : Service
	{
		public object Any(UchetnyeZapisiDokumentooborotaRequest request)
		{
			return new UchetnyeZapisiDokumentooborotaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(UchetnyeZapisiDokumentooborotaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.УчетныеЗаписиДокументооборота.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new UchetnyeZapisiDokumentooborotaResponse() {Result = "УчетныеЗаписиДокументооборота c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(UchetnyeZapisiDokumentooborotasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.УчетныеЗаписиДокументооборота>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.УчетныеЗаписиДокументооборота.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}