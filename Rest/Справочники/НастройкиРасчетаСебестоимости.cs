
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiRaschetaSebestoimosti")]
	[Route("/Catalogs/NastrojjkiRaschetaSebestoimosti/{Code}")]
	public class NastrojjkiRaschetaSebestoimostiRequest/*НастройкиРасчетаСебестоимостиЗапрос*/: V82.СправочникиСсылка.НастройкиРасчетаСебестоимости,IReturn<NastrojjkiRaschetaSebestoimostiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiRaschetaSebestoimostiResponse//НастройкиРасчетаСебестоимостиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiRaschetaSebestoimostis")]
	[Route("/Catalogs/NastrojjkiRaschetaSebestoimostis/{Codes}")]
	public class NastrojjkiRaschetaSebestoimostisRequest/*НастройкиРасчетаСебестоимостиЗапрос*/: IReturn<List<NastrojjkiRaschetaSebestoimostiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiRaschetaSebestoimostisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiRaschetaSebestoimostisResponse//НастройкиРасчетаСебестоимостиОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiRaschetaSebestoimostiService /*НастройкиРасчетаСебестоимостиСервис*/ : Service
	{
		public object Any(NastrojjkiRaschetaSebestoimostiRequest request)
		{
			return new NastrojjkiRaschetaSebestoimostiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiRaschetaSebestoimostiRequest request)
		{
			return null;
		}

		public object Get(NastrojjkiRaschetaSebestoimostisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиРасчетаСебестоимости>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}
