
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ProfiliPolnomochijjPolzovatelejj")]
	[Route("/Catalogs/ProfiliPolnomochijjPolzovatelejj/FindById/{Id}")]
	[Route("/Catalogs/ProfiliPolnomochijjPolzovatelejj/FindByCode/{Code}")]
	[Route("/Catalogs/ProfiliPolnomochijjPolzovatelejj/FindByDescr/{Descr}")]
	public class ProfiliPolnomochijjPolzovatelejjRequest/*ПрофилиПолномочийПользователейЗапрос*/: V82.СправочникиСсылка.ПрофилиПолномочийПользователей,IReturn<ProfiliPolnomochijjPolzovatelejjRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ProfiliPolnomochijjPolzovatelejjResponse//ПрофилиПолномочийПользователейОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ProfiliPolnomochijjPolzovatelejjs")]
	[Route("/Catalogs/ProfiliPolnomochijjPolzovatelejjs/{Codes}")]
	public class ProfiliPolnomochijjPolzovatelejjsRequest/*ПрофилиПолномочийПользователейЗапрос*/: IReturn<List<ProfiliPolnomochijjPolzovatelejjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ProfiliPolnomochijjPolzovatelejjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ProfiliPolnomochijjPolzovatelejjsResponse//ПрофилиПолномочийПользователейОтвет
	{
		public string Result {get;set;}
	}


	public class ProfiliPolnomochijjPolzovatelejjService /*ПрофилиПолномочийПользователейСервис*/ : Service
	{
		public object Any(ProfiliPolnomochijjPolzovatelejjRequest request)
		{
			return new ProfiliPolnomochijjPolzovatelejjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ProfiliPolnomochijjPolzovatelejjRequest request)
		{
			return null;
		}

		public object Get(ProfiliPolnomochijjPolzovatelejjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПрофилиПолномочийПользователей>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}