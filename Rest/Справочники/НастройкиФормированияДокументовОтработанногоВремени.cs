
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeni")]
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeni/FindById/{Id}")]
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeni/FindByCode/{Code}")]
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeni/FindByDescr/{Descr}")]
	public class NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeniRequest/*НастройкиФормированияДокументовОтработанногоВремениЗапрос*/: V82.СправочникиСсылка.НастройкиФормированияДокументовОтработанногоВремени,IReturn<NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeniRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeniResponse//НастройкиФормированияДокументовОтработанногоВремениОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremenis")]
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremenis/{Codes}")]
	public class NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremenisRequest/*НастройкиФормированияДокументовОтработанногоВремениЗапрос*/: IReturn<List<NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeniRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremenisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremenisResponse//НастройкиФормированияДокументовОтработанногоВремениОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeniService /*НастройкиФормированияДокументовОтработанногоВремениСервис*/ : Service
	{
		public object Any(NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeniRequest request)
		{
			return new NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeniResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremeniRequest request)
		{
			return null;
		}

		public object Get(NastrojjkiFormirovaniyaDokumentovOtrabotannogoVremenisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиФормированияДокументовОтработанногоВремени>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}