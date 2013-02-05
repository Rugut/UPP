
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiObmenaSSajjtom")]
	[Route("/Catalogs/NastrojjkiObmenaSSajjtom/{Code}")]
	public class NastrojjkiObmenaSSajjtomRequest/*НастройкиОбменаССайтомЗапрос*/: V82.СправочникиСсылка.НастройкиОбменаССайтом,IReturn<NastrojjkiObmenaSSajjtomRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiObmenaSSajjtomResponse//НастройкиОбменаССайтомОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiObmenaSSajjtoms")]
	[Route("/Catalogs/NastrojjkiObmenaSSajjtoms/{Codes}")]
	public class NastrojjkiObmenaSSajjtomsRequest/*НастройкиОбменаССайтомЗапрос*/: IReturn<List<NastrojjkiObmenaSSajjtomRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiObmenaSSajjtomsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiObmenaSSajjtomsResponse//НастройкиОбменаССайтомОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiObmenaSSajjtomService /*НастройкиОбменаССайтомСервис*/ : Service
	{
		public object Any(NastrojjkiObmenaSSajjtomRequest request)
		{
			return new NastrojjkiObmenaSSajjtomResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiObmenaSSajjtomRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.НастройкиОбменаССайтом.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NastrojjkiObmenaSSajjtomResponse() {Result = "НастройкиОбменаССайтом c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NastrojjkiObmenaSSajjtomsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиОбменаССайтом>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.НастройкиОбменаССайтом.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
