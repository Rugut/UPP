
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KHarakteristikiNomenklatury")]
	[Route("/Catalogs/KHarakteristikiNomenklatury/{Code}")]
	public class KHarakteristikiNomenklaturyRequest/*ХарактеристикиНоменклатурыЗапрос*/: V82.СправочникиСсылка.ХарактеристикиНоменклатуры,IReturn<KHarakteristikiNomenklaturyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KHarakteristikiNomenklaturyResponse//ХарактеристикиНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KHarakteristikiNomenklaturys")]
	[Route("/Catalogs/KHarakteristikiNomenklaturys/{Codes}")]
	public class KHarakteristikiNomenklaturysRequest/*ХарактеристикиНоменклатурыЗапрос*/: IReturn<List<KHarakteristikiNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KHarakteristikiNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KHarakteristikiNomenklaturysResponse//ХарактеристикиНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class KHarakteristikiNomenklaturyService /*ХарактеристикиНоменклатурыСервис*/ : Service
	{
		public object Any(KHarakteristikiNomenklaturyRequest request)
		{
			return new KHarakteristikiNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KHarakteristikiNomenklaturyRequest request)
		{
			return null;
		}

		public object Get(KHarakteristikiNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ХарактеристикиНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					Коллекция.Add(null);
				}
			}
			return Коллекция;
		}

	}
}
