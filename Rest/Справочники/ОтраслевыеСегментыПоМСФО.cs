
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OtraslevyeSegmentyPoMSFO")]
	[Route("/Catalogs/OtraslevyeSegmentyPoMSFO/{Code}")]
	public class OtraslevyeSegmentyPoMSFORequest/*ОтраслевыеСегментыПоМСФОЗапрос*/: V82.СправочникиСсылка.ОтраслевыеСегментыПоМСФО,IReturn<OtraslevyeSegmentyPoMSFORequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OtraslevyeSegmentyPoMSFOResponse//ОтраслевыеСегментыПоМСФООтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OtraslevyeSegmentyPoMSFOs")]
	[Route("/Catalogs/OtraslevyeSegmentyPoMSFOs/{Codes}")]
	public class OtraslevyeSegmentyPoMSFOsRequest/*ОтраслевыеСегментыПоМСФОЗапрос*/: IReturn<List<OtraslevyeSegmentyPoMSFORequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OtraslevyeSegmentyPoMSFOsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OtraslevyeSegmentyPoMSFOsResponse//ОтраслевыеСегментыПоМСФООтвет
	{
		public string Result {get;set;}
	}


	public class OtraslevyeSegmentyPoMSFOService /*ОтраслевыеСегментыПоМСФОСервис*/ : Service
	{
		public object Any(OtraslevyeSegmentyPoMSFORequest request)
		{
			return new OtraslevyeSegmentyPoMSFOResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OtraslevyeSegmentyPoMSFORequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ОтраслевыеСегментыПоМСФО.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new OtraslevyeSegmentyPoMSFOResponse() {Result = "ОтраслевыеСегментыПоМСФО c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(OtraslevyeSegmentyPoMSFOsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОтраслевыеСегментыПоМСФО>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ОтраслевыеСегментыПоМСФО.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
