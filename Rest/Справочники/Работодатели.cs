
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Rabotodateli")]
	[Route("/Catalogs/Rabotodateli/FindById/{Id}")]
	[Route("/Catalogs/Rabotodateli/FindByCode/{Code}")]
	[Route("/Catalogs/Rabotodateli/FindByDescr/{Descr}")]
	public class RabotodateliRequest/*РаботодателиЗапрос*/: V82.СправочникиСсылка.Работодатели,IReturn<RabotodateliRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RabotodateliResponse//РаботодателиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Rabotodatelis")]
	[Route("/Catalogs/Rabotodatelis/{Codes}")]
	public class RabotodatelisRequest/*РаботодателиЗапрос*/: IReturn<List<RabotodateliRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RabotodatelisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RabotodatelisResponse//РаботодателиОтвет
	{
		public string Result {get;set;}
	}


	public class RabotodateliService /*РаботодателиСервис*/ : Service
	{
		public object Any(RabotodateliRequest request)
		{
			return new RabotodateliResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RabotodateliRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.Работодатели.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new RabotodateliResponse() {Result = "Работодатели c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(RabotodatelisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Работодатели>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.Работодатели.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}