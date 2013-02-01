
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovVypuskaProdukcii")]
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovVypuskaProdukcii/{Code}")]
	public class NastrojjkiFormirovaniyaDokumentovVypuskaProdukciiRequest/*НастройкиФормированияДокументовВыпускаПродукцииЗапрос*/: V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции,IReturn<NastrojjkiFormirovaniyaDokumentovVypuskaProdukciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiFormirovaniyaDokumentovVypuskaProdukciiResponse//НастройкиФормированияДокументовВыпускаПродукцииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovVypuskaProdukciis")]
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovVypuskaProdukciis/{Codes}")]
	public class NastrojjkiFormirovaniyaDokumentovVypuskaProdukciisRequest/*НастройкиФормированияДокументовВыпускаПродукцииЗапрос*/: IReturn<List<NastrojjkiFormirovaniyaDokumentovVypuskaProdukciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiFormirovaniyaDokumentovVypuskaProdukciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiFormirovaniyaDokumentovVypuskaProdukciisResponse//НастройкиФормированияДокументовВыпускаПродукцииОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiFormirovaniyaDokumentovVypuskaProdukciiService /*НастройкиФормированияДокументовВыпускаПродукцииСервис*/ : Service
	{
		public object Any(NastrojjkiFormirovaniyaDokumentovVypuskaProdukciiRequest request)
		{
			return new NastrojjkiFormirovaniyaDokumentovVypuskaProdukciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiFormirovaniyaDokumentovVypuskaProdukciiRequest request)
		{
			return null;
		}

		public object Get(NastrojjkiFormirovaniyaDokumentovVypuskaProdukciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиФормированияДокументовВыпускаПродукции>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					Коллекция.Add(null);
				}
			}
			return Коллекция;
		}

	}
}
