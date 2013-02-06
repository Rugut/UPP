
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SposobyOtrazheniyaRaskhodovPoAmortizacii")]
	[Route("/Catalogs/SposobyOtrazheniyaRaskhodovPoAmortizacii/{Code}")]
	public class SposobyOtrazheniyaRaskhodovPoAmortizaciiRequest/*СпособыОтраженияРасходовПоАмортизацииЗапрос*/: V82.СправочникиСсылка.СпособыОтраженияРасходовПоАмортизации,IReturn<SposobyOtrazheniyaRaskhodovPoAmortizaciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SposobyOtrazheniyaRaskhodovPoAmortizaciiResponse//СпособыОтраженияРасходовПоАмортизацииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SposobyOtrazheniyaRaskhodovPoAmortizaciis")]
	[Route("/Catalogs/SposobyOtrazheniyaRaskhodovPoAmortizaciis/{Codes}")]
	public class SposobyOtrazheniyaRaskhodovPoAmortizaciisRequest/*СпособыОтраженияРасходовПоАмортизацииЗапрос*/: IReturn<List<SposobyOtrazheniyaRaskhodovPoAmortizaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SposobyOtrazheniyaRaskhodovPoAmortizaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SposobyOtrazheniyaRaskhodovPoAmortizaciisResponse//СпособыОтраженияРасходовПоАмортизацииОтвет
	{
		public string Result {get;set;}
	}


	public class SposobyOtrazheniyaRaskhodovPoAmortizaciiService /*СпособыОтраженияРасходовПоАмортизацииСервис*/ : Service
	{
		public object Any(SposobyOtrazheniyaRaskhodovPoAmortizaciiRequest request)
		{
			return new SposobyOtrazheniyaRaskhodovPoAmortizaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SposobyOtrazheniyaRaskhodovPoAmortizaciiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СпособыОтраженияРасходовПоАмортизации.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SposobyOtrazheniyaRaskhodovPoAmortizaciiResponse() {Result = "СпособыОтраженияРасходовПоАмортизации c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SposobyOtrazheniyaRaskhodovPoAmortizaciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СпособыОтраженияРасходовПоАмортизации>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СпособыОтраженияРасходовПоАмортизации.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
