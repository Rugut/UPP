
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/StatiOtchetaOPribylyakhIUbytkakh")]
	[Route("/Catalogs/StatiOtchetaOPribylyakhIUbytkakh/{Code}")]
	public class StatiOtchetaOPribylyakhIUbytkakhRequest/*СтатьиОтчетаОПрибыляхИУбыткахЗапрос*/: V82.СправочникиСсылка.СтатьиОтчетаОПрибыляхИУбытках,IReturn<StatiOtchetaOPribylyakhIUbytkakhRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StatiOtchetaOPribylyakhIUbytkakhResponse//СтатьиОтчетаОПрибыляхИУбыткахОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StatiOtchetaOPribylyakhIUbytkakhs")]
	[Route("/Catalogs/StatiOtchetaOPribylyakhIUbytkakhs/{Codes}")]
	public class StatiOtchetaOPribylyakhIUbytkakhsRequest/*СтатьиОтчетаОПрибыляхИУбыткахЗапрос*/: IReturn<List<StatiOtchetaOPribylyakhIUbytkakhRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StatiOtchetaOPribylyakhIUbytkakhsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StatiOtchetaOPribylyakhIUbytkakhsResponse//СтатьиОтчетаОПрибыляхИУбыткахОтвет
	{
		public string Result {get;set;}
	}


	public class StatiOtchetaOPribylyakhIUbytkakhService /*СтатьиОтчетаОПрибыляхИУбыткахСервис*/ : Service
	{
		public object Any(StatiOtchetaOPribylyakhIUbytkakhRequest request)
		{
			return new StatiOtchetaOPribylyakhIUbytkakhResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StatiOtchetaOPribylyakhIUbytkakhRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СтатьиОтчетаОПрибыляхИУбытках.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new StatiOtchetaOPribylyakhIUbytkakhResponse() {Result = "СтатьиОтчетаОПрибыляхИУбытках c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(StatiOtchetaOPribylyakhIUbytkakhsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СтатьиОтчетаОПрибыляхИУбытках>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СтатьиОтчетаОПрибыляхИУбытках.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
