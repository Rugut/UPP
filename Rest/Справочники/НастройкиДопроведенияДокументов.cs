
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiDoprovedeniyaDokumentov")]
	[Route("/Catalogs/NastrojjkiDoprovedeniyaDokumentov/FindById/{Id}")]
	[Route("/Catalogs/NastrojjkiDoprovedeniyaDokumentov/FindByCode/{Code}")]
	[Route("/Catalogs/NastrojjkiDoprovedeniyaDokumentov/FindByDescr/{Descr}")]
	public class NastrojjkiDoprovedeniyaDokumentovRequest/*НастройкиДопроведенияДокументовЗапрос*/: V82.СправочникиСсылка.НастройкиДопроведенияДокументов,IReturn<NastrojjkiDoprovedeniyaDokumentovRequest>
	{
		public string Id { get; set; }
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
			return null;
		}

		public object Get(NastrojjkiDoprovedeniyaDokumentovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиДопроведенияДокументов>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}