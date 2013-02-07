
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkaIntervalov")]
	[Route("/Catalogs/NastrojjkaIntervalov/FindById/{Id}")]
	[Route("/Catalogs/NastrojjkaIntervalov/FindByCode/{Code}")]
	[Route("/Catalogs/NastrojjkaIntervalov/FindByDescr/{Descr}")]
	public class NastrojjkaIntervalovRequest/*НастройкаИнтерваловЗапрос*/: V82.СправочникиСсылка.НастройкаИнтервалов,IReturn<NastrojjkaIntervalovRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkaIntervalovResponse//НастройкаИнтерваловОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkaIntervalovs")]
	[Route("/Catalogs/NastrojjkaIntervalovs/{Codes}")]
	public class NastrojjkaIntervalovsRequest/*НастройкаИнтерваловЗапрос*/: IReturn<List<NastrojjkaIntervalovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkaIntervalovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkaIntervalovsResponse//НастройкаИнтерваловОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkaIntervalovService /*НастройкаИнтерваловСервис*/ : Service
	{
		public object Any(NastrojjkaIntervalovRequest request)
		{
			return new NastrojjkaIntervalovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkaIntervalovRequest request)
		{
			return null;
		}

		public object Get(NastrojjkaIntervalovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкаИнтервалов>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}