
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiDoprovedeniyaDokumentov")]
	[Route("/Catalogs/NastrojjkiDoprovedeniyaDokumentov/{Code}")]
	public class NastrojjkiDoprovedeniyaDokumentovRequest/*НастройкиДопроведенияДокументовЗапрос*/: V82.СправочникиСсылка.НастройкиДопроведенияДокументов,IReturn<NastrojjkiDoprovedeniyaDokumentovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiDoprovedeniyaDokumentovResponse//НастройкиДопроведенияДокументовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiDoprovedeniyaDokumentovs")]
	[Route("/Catalogs/NastrojjkiDoprovedeniyaDokumentovs/{Codes}")]
	public class NastrojjkiDoprovedeniyaDokumentovsRequest/*НастройкиДопроведенияДокументовЗапрос*/: IReturn<List<NastrojjkiDoprovedeniyaDokumentovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiDoprovedeniyaDokumentovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiDoprovedeniyaDokumentovsResponse//НастройкиДопроведенияДокументовОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiDoprovedeniyaDokumentovService /*НастройкиДопроведенияДокументовСервис*/ : Service
	{
		public object Any(NastrojjkiDoprovedeniyaDokumentovRequest request)
		{
			return new NastrojjkiDoprovedeniyaDokumentovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiDoprovedeniyaDokumentovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.НастройкиДопроведенияДокументов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NastrojjkiDoprovedeniyaDokumentovResponse() {Result = "НастройкиДопроведенияДокументов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.НастройкиДопроведенияДокументов.НайтиПоКоду(1);
			}
		}

		public object Get(NastrojjkiDoprovedeniyaDokumentovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиДопроведенияДокументов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.НастройкиДопроведенияДокументов.НайтиПоКоду(СтрокаКод);
					if (Ссылка != null)
					{
						Коллекция.Add(Ссылка);
					}
				}
			}
			return Коллекция;
		}

	}
}
