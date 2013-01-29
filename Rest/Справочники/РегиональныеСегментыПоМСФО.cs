
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/RegionalnyeSegmentyPoMSFO")]
	[Route("/Catalogs/RegionalnyeSegmentyPoMSFO/{Code}")]
	public class RegionalnyeSegmentyPoMSFORequest/*РегиональныеСегментыПоМСФОЗапрос*/: V82.СправочникиСсылка.РегиональныеСегментыПоМСФО,IReturn<RegionalnyeSegmentyPoMSFORequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RegionalnyeSegmentyPoMSFOResponse//РегиональныеСегментыПоМСФООтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/RegionalnyeSegmentyPoMSFOs")]
	[Route("/Catalogs/RegionalnyeSegmentyPoMSFOs/{Codes}")]
	public class RegionalnyeSegmentyPoMSFOsRequest/*РегиональныеСегментыПоМСФОЗапрос*/: IReturn<List<RegionalnyeSegmentyPoMSFORequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RegionalnyeSegmentyPoMSFOsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RegionalnyeSegmentyPoMSFOsResponse//РегиональныеСегментыПоМСФООтвет
	{
		public string Result {get;set;}
	}


	public class RegionalnyeSegmentyPoMSFOService /*РегиональныеСегментыПоМСФОСервис*/ : Service
	{
		public object Any(RegionalnyeSegmentyPoMSFORequest request)
		{
			return new RegionalnyeSegmentyPoMSFOResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RegionalnyeSegmentyPoMSFORequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.РегиональныеСегментыПоМСФО.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new RegionalnyeSegmentyPoMSFOResponse() {Result = "РегиональныеСегментыПоМСФО c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.РегиональныеСегментыПоМСФО.НайтиПоКоду(1);
			}
		}

		public object Get(RegionalnyeSegmentyPoMSFOsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.РегиональныеСегментыПоМСФО>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.РегиональныеСегментыПоМСФО.НайтиПоКоду(СтрокаКод);
					if (Ссылка != null)
					{
						Коллекция.Add(Ссылка);
					}
				}
			}
			return Коллекция;
		}

	}
}
