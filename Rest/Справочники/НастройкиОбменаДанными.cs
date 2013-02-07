
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiObmenaDannymi")]
	[Route("/Catalogs/NastrojjkiObmenaDannymi/FindById/{Id}")]
	[Route("/Catalogs/NastrojjkiObmenaDannymi/FindByCode/{Code}")]
	[Route("/Catalogs/NastrojjkiObmenaDannymi/FindByDescr/{Descr}")]
	public class NastrojjkiObmenaDannymiRequest/*НастройкиОбменаДаннымиЗапрос*/: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<NastrojjkiObmenaDannymiRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiObmenaDannymiResponse//НастройкиОбменаДаннымиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiObmenaDannymis")]
	[Route("/Catalogs/NastrojjkiObmenaDannymis/{Codes}")]
	public class NastrojjkiObmenaDannymisRequest/*НастройкиОбменаДаннымиЗапрос*/: IReturn<List<NastrojjkiObmenaDannymiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiObmenaDannymisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiObmenaDannymisResponse//НастройкиОбменаДаннымиОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiObmenaDannymiService /*НастройкиОбменаДаннымиСервис*/ : Service
	{
		public object Any(NastrojjkiObmenaDannymiRequest request)
		{
			return new NastrojjkiObmenaDannymiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiObmenaDannymiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.НастройкиОбменаДанными.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NastrojjkiObmenaDannymiResponse() {Result = "НастройкиОбменаДанными c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NastrojjkiObmenaDannymisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиОбменаДанными>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.НастройкиОбменаДанными.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}