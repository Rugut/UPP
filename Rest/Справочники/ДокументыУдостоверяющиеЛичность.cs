
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnost")]
	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnost/{Code}")]
	public class DokumentyUdostoveryayushhieLichnostRequest/*ДокументыУдостоверяющиеЛичностьЗапрос*/: V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность,IReturn<DokumentyUdostoveryayushhieLichnostRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokumentyUdostoveryayushhieLichnostResponse//ДокументыУдостоверяющиеЛичностьОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnosts")]
	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnosts/{Codes}")]
	public class DokumentyUdostoveryayushhieLichnostsRequest/*ДокументыУдостоверяющиеЛичностьЗапрос*/: IReturn<List<DokumentyUdostoveryayushhieLichnostRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokumentyUdostoveryayushhieLichnostsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokumentyUdostoveryayushhieLichnostsResponse//ДокументыУдостоверяющиеЛичностьОтвет
	{
		public string Result {get;set;}
	}


	public class DokumentyUdostoveryayushhieLichnostService /*ДокументыУдостоверяющиеЛичностьСервис*/ : Service
	{
		public object Any(DokumentyUdostoveryayushhieLichnostRequest request)
		{
			return new DokumentyUdostoveryayushhieLichnostResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokumentyUdostoveryayushhieLichnostRequest request)
		{
			return null;
		}

		public object Get(DokumentyUdostoveryayushhieLichnostsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}
