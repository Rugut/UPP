
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/BlankiStrogojjOtchetnosti")]
	[Route("/Catalogs/BlankiStrogojjOtchetnosti/{Code}")]
	public class BlankiStrogojjOtchetnostiRequest/*БланкиСтрогойОтчетностиЗапрос*/: V82.СправочникиСсылка.БланкиСтрогойОтчетности,IReturn<BlankiStrogojjOtchetnostiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class BlankiStrogojjOtchetnostiResponse//БланкиСтрогойОтчетностиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/BlankiStrogojjOtchetnostis")]
	[Route("/Catalogs/BlankiStrogojjOtchetnostis/{Codes}")]
	public class BlankiStrogojjOtchetnostisRequest/*БланкиСтрогойОтчетностиЗапрос*/: IReturn<List<BlankiStrogojjOtchetnostiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public BlankiStrogojjOtchetnostisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class BlankiStrogojjOtchetnostisResponse//БланкиСтрогойОтчетностиОтвет
	{
		public string Result {get;set;}
	}


	public class BlankiStrogojjOtchetnostiService /*БланкиСтрогойОтчетностиСервис*/ : Service
	{
		public object Any(BlankiStrogojjOtchetnostiRequest request)
		{
			return new BlankiStrogojjOtchetnostiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(BlankiStrogojjOtchetnostiRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.БланкиСтрогойОтчетности.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new BlankiStrogojjOtchetnostiResponse() {Result = "БланкиСтрогойОтчетности c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(BlankiStrogojjOtchetnostisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.БланкиСтрогойОтчетности>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.БланкиСтрогойОтчетности.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
