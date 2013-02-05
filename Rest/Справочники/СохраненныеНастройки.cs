
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SokhranennyeNastrojjki")]
	[Route("/Catalogs/SokhranennyeNastrojjki/{Code}")]
	public class SokhranennyeNastrojjkiRequest/*СохраненныеНастройкиЗапрос*/: V82.СправочникиСсылка.СохраненныеНастройки,IReturn<SokhranennyeNastrojjkiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SokhranennyeNastrojjkiResponse//СохраненныеНастройкиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SokhranennyeNastrojjkis")]
	[Route("/Catalogs/SokhranennyeNastrojjkis/{Codes}")]
	public class SokhranennyeNastrojjkisRequest/*СохраненныеНастройкиЗапрос*/: IReturn<List<SokhranennyeNastrojjkiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SokhranennyeNastrojjkisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SokhranennyeNastrojjkisResponse//СохраненныеНастройкиОтвет
	{
		public string Result {get;set;}
	}


	public class SokhranennyeNastrojjkiService /*СохраненныеНастройкиСервис*/ : Service
	{
		public object Any(SokhranennyeNastrojjkiRequest request)
		{
			return new SokhranennyeNastrojjkiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SokhranennyeNastrojjkiRequest request)
		{
			return null;
		}

		public object Get(SokhranennyeNastrojjkisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СохраненныеНастройки>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}
