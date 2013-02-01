
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SerijjnyeNomera")]
	[Route("/Catalogs/SerijjnyeNomera/{Code}")]
	public class SerijjnyeNomeraRequest/*СерийныеНомераЗапрос*/: V82.СправочникиСсылка.СерийныеНомера,IReturn<SerijjnyeNomeraRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SerijjnyeNomeraResponse//СерийныеНомераОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SerijjnyeNomeras")]
	[Route("/Catalogs/SerijjnyeNomeras/{Codes}")]
	public class SerijjnyeNomerasRequest/*СерийныеНомераЗапрос*/: IReturn<List<SerijjnyeNomeraRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SerijjnyeNomerasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SerijjnyeNomerasResponse//СерийныеНомераОтвет
	{
		public string Result {get;set;}
	}


	public class SerijjnyeNomeraService /*СерийныеНомераСервис*/ : Service
	{
		public object Any(SerijjnyeNomeraRequest request)
		{
			return new SerijjnyeNomeraResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SerijjnyeNomeraRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СерийныеНомера.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new SerijjnyeNomeraResponse() {Result = "СерийныеНомера c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СерийныеНомера.НайтиПоКоду(1);
			}
		}

		public object Get(SerijjnyeNomerasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СерийныеНомера>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СерийныеНомера.НайтиПоКоду(СтрокаКод);
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
