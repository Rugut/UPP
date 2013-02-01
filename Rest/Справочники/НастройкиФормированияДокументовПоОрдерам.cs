
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovPoOrderam")]
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovPoOrderam/{Code}")]
	public class NastrojjkiFormirovaniyaDokumentovPoOrderamRequest/*НастройкиФормированияДокументовПоОрдерамЗапрос*/: V82.СправочникиСсылка.НастройкиФормированияДокументовПоОрдерам,IReturn<NastrojjkiFormirovaniyaDokumentovPoOrderamRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiFormirovaniyaDokumentovPoOrderamResponse//НастройкиФормированияДокументовПоОрдерамОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovPoOrderams")]
	[Route("/Catalogs/NastrojjkiFormirovaniyaDokumentovPoOrderams/{Codes}")]
	public class NastrojjkiFormirovaniyaDokumentovPoOrderamsRequest/*НастройкиФормированияДокументовПоОрдерамЗапрос*/: IReturn<List<NastrojjkiFormirovaniyaDokumentovPoOrderamRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiFormirovaniyaDokumentovPoOrderamsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiFormirovaniyaDokumentovPoOrderamsResponse//НастройкиФормированияДокументовПоОрдерамОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiFormirovaniyaDokumentovPoOrderamService /*НастройкиФормированияДокументовПоОрдерамСервис*/ : Service
	{
		public object Any(NastrojjkiFormirovaniyaDokumentovPoOrderamRequest request)
		{
			return new NastrojjkiFormirovaniyaDokumentovPoOrderamResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiFormirovaniyaDokumentovPoOrderamRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.НастройкиФормированияДокументовПоОрдерам.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NastrojjkiFormirovaniyaDokumentovPoOrderamResponse() {Result = "НастройкиФормированияДокументовПоОрдерам c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.НастройкиФормированияДокументовПоОрдерам.НайтиПоКоду(1);
			}
		}

		public object Get(NastrojjkiFormirovaniyaDokumentovPoOrderamsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиФормированияДокументовПоОрдерам>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.НастройкиФормированияДокументовПоОрдерам.НайтиПоКоду(СтрокаКод);
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
