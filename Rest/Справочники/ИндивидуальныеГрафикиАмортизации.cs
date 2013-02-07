
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/IndividualnyeGrafikiAmortizacii")]
	[Route("/Catalogs/IndividualnyeGrafikiAmortizacii/FindById/{Id}")]
	[Route("/Catalogs/IndividualnyeGrafikiAmortizacii/FindByCode/{Code}")]
	[Route("/Catalogs/IndividualnyeGrafikiAmortizacii/FindByDescr/{Descr}")]
	public class IndividualnyeGrafikiAmortizaciiRequest/*ИндивидуальныеГрафикиАмортизацииЗапрос*/: V82.СправочникиСсылка.ИндивидуальныеГрафикиАмортизации,IReturn<IndividualnyeGrafikiAmortizaciiRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class IndividualnyeGrafikiAmortizaciiResponse//ИндивидуальныеГрафикиАмортизацииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/IndividualnyeGrafikiAmortizaciis")]
	[Route("/Catalogs/IndividualnyeGrafikiAmortizaciis/{Codes}")]
	public class IndividualnyeGrafikiAmortizaciisRequest/*ИндивидуальныеГрафикиАмортизацииЗапрос*/: IReturn<List<IndividualnyeGrafikiAmortizaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public IndividualnyeGrafikiAmortizaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class IndividualnyeGrafikiAmortizaciisResponse//ИндивидуальныеГрафикиАмортизацииОтвет
	{
		public string Result {get;set;}
	}


	public class IndividualnyeGrafikiAmortizaciiService /*ИндивидуальныеГрафикиАмортизацииСервис*/ : Service
	{
		public object Any(IndividualnyeGrafikiAmortizaciiRequest request)
		{
			return new IndividualnyeGrafikiAmortizaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(IndividualnyeGrafikiAmortizaciiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ИндивидуальныеГрафикиАмортизации.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new IndividualnyeGrafikiAmortizaciiResponse() {Result = "ИндивидуальныеГрафикиАмортизации c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(IndividualnyeGrafikiAmortizaciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ИндивидуальныеГрафикиАмортизации>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ИндивидуальныеГрафикиАмортизации.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}