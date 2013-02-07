
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DokhodyPoStrakhovymVznosam")]
	[Route("/Catalogs/DokhodyPoStrakhovymVznosam/FindById/{Id}")]
	[Route("/Catalogs/DokhodyPoStrakhovymVznosam/FindByCode/{Code}")]
	[Route("/Catalogs/DokhodyPoStrakhovymVznosam/FindByDescr/{Descr}")]
	public class DokhodyPoStrakhovymVznosamRequest/*ДоходыПоСтраховымВзносамЗапрос*/: V82.СправочникиСсылка.ДоходыПоСтраховымВзносам,IReturn<DokhodyPoStrakhovymVznosamRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokhodyPoStrakhovymVznosamResponse//ДоходыПоСтраховымВзносамОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokhodyPoStrakhovymVznosams")]
	[Route("/Catalogs/DokhodyPoStrakhovymVznosams/{Codes}")]
	public class DokhodyPoStrakhovymVznosamsRequest/*ДоходыПоСтраховымВзносамЗапрос*/: IReturn<List<DokhodyPoStrakhovymVznosamRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokhodyPoStrakhovymVznosamsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokhodyPoStrakhovymVznosamsResponse//ДоходыПоСтраховымВзносамОтвет
	{
		public string Result {get;set;}
	}


	public class DokhodyPoStrakhovymVznosamService /*ДоходыПоСтраховымВзносамСервис*/ : Service
	{
		public object Any(DokhodyPoStrakhovymVznosamRequest request)
		{
			return new DokhodyPoStrakhovymVznosamResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokhodyPoStrakhovymVznosamRequest request)
		{
			return null;
		}

		public object Get(DokhodyPoStrakhovymVznosamsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДоходыПоСтраховымВзносам>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}