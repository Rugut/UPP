
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ProizvolnyeOtchety")]
	[Route("/Catalogs/ProizvolnyeOtchety/FindById/{Id}")]
	[Route("/Catalogs/ProizvolnyeOtchety/FindByCode/{Code}")]
	[Route("/Catalogs/ProizvolnyeOtchety/FindByDescr/{Descr}")]
	public class ProizvolnyeOtchetyRequest/*ПроизвольныеОтчетыЗапрос*/: V82.СправочникиСсылка.ПроизвольныеОтчеты,IReturn<ProizvolnyeOtchetyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ProizvolnyeOtchetyResponse//ПроизвольныеОтчетыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ProizvolnyeOtchetys")]
	[Route("/Catalogs/ProizvolnyeOtchetys/{Codes}")]
	public class ProizvolnyeOtchetysRequest/*ПроизвольныеОтчетыЗапрос*/: IReturn<List<ProizvolnyeOtchetyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ProizvolnyeOtchetysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ProizvolnyeOtchetysResponse//ПроизвольныеОтчетыОтвет
	{
		public string Result {get;set;}
	}


	public class ProizvolnyeOtchetyService /*ПроизвольныеОтчетыСервис*/ : Service
	{
		public object Any(ProizvolnyeOtchetyRequest request)
		{
			return new ProizvolnyeOtchetyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ProizvolnyeOtchetyRequest request)
		{
			return null;
		}

		public object Get(ProizvolnyeOtchetysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПроизвольныеОтчеты>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}