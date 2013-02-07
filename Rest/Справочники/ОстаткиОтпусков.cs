
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OstatkiOtpuskov")]
	[Route("/Catalogs/OstatkiOtpuskov/FindById/{Id}")]
	[Route("/Catalogs/OstatkiOtpuskov/FindByCode/{Code}")]
	[Route("/Catalogs/OstatkiOtpuskov/FindByDescr/{Descr}")]
	public class OstatkiOtpuskovRequest/*ОстаткиОтпусковЗапрос*/: V82.СправочникиСсылка.ОстаткиОтпусков,IReturn<OstatkiOtpuskovRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OstatkiOtpuskovResponse//ОстаткиОтпусковОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OstatkiOtpuskovs")]
	[Route("/Catalogs/OstatkiOtpuskovs/{Codes}")]
	public class OstatkiOtpuskovsRequest/*ОстаткиОтпусковЗапрос*/: IReturn<List<OstatkiOtpuskovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OstatkiOtpuskovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OstatkiOtpuskovsResponse//ОстаткиОтпусковОтвет
	{
		public string Result {get;set;}
	}


	public class OstatkiOtpuskovService /*ОстаткиОтпусковСервис*/ : Service
	{
		public object Any(OstatkiOtpuskovRequest request)
		{
			return new OstatkiOtpuskovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OstatkiOtpuskovRequest request)
		{
			return null;
		}

		public object Get(OstatkiOtpuskovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОстаткиОтпусков>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}