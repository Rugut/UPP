
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiVypolneniyaObmena")]
	[Route("/Catalogs/NastrojjkiVypolneniyaObmena/FindById/{Id}")]
	[Route("/Catalogs/NastrojjkiVypolneniyaObmena/FindByCode/{Code}")]
	[Route("/Catalogs/NastrojjkiVypolneniyaObmena/FindByDescr/{Descr}")]
	public class NastrojjkiVypolneniyaObmenaRequest/*НастройкиВыполненияОбменаЗапрос*/: V82.СправочникиСсылка.НастройкиВыполненияОбмена,IReturn<NastrojjkiVypolneniyaObmenaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiVypolneniyaObmenaResponse//НастройкиВыполненияОбменаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiVypolneniyaObmenas")]
	[Route("/Catalogs/NastrojjkiVypolneniyaObmenas/{Codes}")]
	public class NastrojjkiVypolneniyaObmenasRequest/*НастройкиВыполненияОбменаЗапрос*/: IReturn<List<NastrojjkiVypolneniyaObmenaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiVypolneniyaObmenasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiVypolneniyaObmenasResponse//НастройкиВыполненияОбменаОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiVypolneniyaObmenaService /*НастройкиВыполненияОбменаСервис*/ : Service
	{
		public object Any(NastrojjkiVypolneniyaObmenaRequest request)
		{
			return new NastrojjkiVypolneniyaObmenaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiVypolneniyaObmenaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.НастройкиВыполненияОбмена.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NastrojjkiVypolneniyaObmenaResponse() {Result = "НастройкиВыполненияОбмена c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NastrojjkiVypolneniyaObmenasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиВыполненияОбмена>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.НастройкиВыполненияОбмена.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}