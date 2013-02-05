
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NormativnyeDokumentySertifikaciiNomenklatury")]
	[Route("/Catalogs/NormativnyeDokumentySertifikaciiNomenklatury/{Code}")]
	public class NormativnyeDokumentySertifikaciiNomenklaturyRequest/*НормативныеДокументыСертификацииНоменклатурыЗапрос*/: V82.СправочникиСсылка.НормативныеДокументыСертификацииНоменклатуры,IReturn<NormativnyeDokumentySertifikaciiNomenklaturyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NormativnyeDokumentySertifikaciiNomenklaturyResponse//НормативныеДокументыСертификацииНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NormativnyeDokumentySertifikaciiNomenklaturys")]
	[Route("/Catalogs/NormativnyeDokumentySertifikaciiNomenklaturys/{Codes}")]
	public class NormativnyeDokumentySertifikaciiNomenklaturysRequest/*НормативныеДокументыСертификацииНоменклатурыЗапрос*/: IReturn<List<NormativnyeDokumentySertifikaciiNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NormativnyeDokumentySertifikaciiNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NormativnyeDokumentySertifikaciiNomenklaturysResponse//НормативныеДокументыСертификацииНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class NormativnyeDokumentySertifikaciiNomenklaturyService /*НормативныеДокументыСертификацииНоменклатурыСервис*/ : Service
	{
		public object Any(NormativnyeDokumentySertifikaciiNomenklaturyRequest request)
		{
			return new NormativnyeDokumentySertifikaciiNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NormativnyeDokumentySertifikaciiNomenklaturyRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.НормативныеДокументыСертификацииНоменклатуры.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NormativnyeDokumentySertifikaciiNomenklaturyResponse() {Result = "НормативныеДокументыСертификацииНоменклатуры c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NormativnyeDokumentySertifikaciiNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НормативныеДокументыСертификацииНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.НормативныеДокументыСертификацииНоменклатуры.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
