
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NematerialnyeAktivy")]
	[Route("/Catalogs/NematerialnyeAktivy/{Code}")]
	public class NematerialnyeAktivyRequest/*НематериальныеАктивыЗапрос*/: V82.СправочникиСсылка.НематериальныеАктивы,IReturn<NematerialnyeAktivyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NematerialnyeAktivyResponse//НематериальныеАктивыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NematerialnyeAktivys")]
	[Route("/Catalogs/NematerialnyeAktivys/{Codes}")]
	public class NematerialnyeAktivysRequest/*НематериальныеАктивыЗапрос*/: IReturn<List<NematerialnyeAktivyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NematerialnyeAktivysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NematerialnyeAktivysResponse//НематериальныеАктивыОтвет
	{
		public string Result {get;set;}
	}


	public class NematerialnyeAktivyService /*НематериальныеАктивыСервис*/ : Service
	{
		public object Any(NematerialnyeAktivyRequest request)
		{
			return new NematerialnyeAktivyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NematerialnyeAktivyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.НематериальныеАктивы.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NematerialnyeAktivyResponse() {Result = "НематериальныеАктивы c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.НематериальныеАктивы.НайтиПоКоду(1);
			}
		}

		public object Get(NematerialnyeAktivysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НематериальныеАктивы>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.НематериальныеАктивы.НайтиПоКоду(СтрокаКод);
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
