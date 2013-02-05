
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DetalizaciyaOtchetaOPribylyakhIUbytkakh")]
	[Route("/Catalogs/DetalizaciyaOtchetaOPribylyakhIUbytkakh/{Code}")]
	public class DetalizaciyaOtchetaOPribylyakhIUbytkakhRequest/*ДетализацияОтчетаОПрибыляхИУбыткахЗапрос*/: V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках,IReturn<DetalizaciyaOtchetaOPribylyakhIUbytkakhRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DetalizaciyaOtchetaOPribylyakhIUbytkakhResponse//ДетализацияОтчетаОПрибыляхИУбыткахОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DetalizaciyaOtchetaOPribylyakhIUbytkakhs")]
	[Route("/Catalogs/DetalizaciyaOtchetaOPribylyakhIUbytkakhs/{Codes}")]
	public class DetalizaciyaOtchetaOPribylyakhIUbytkakhsRequest/*ДетализацияОтчетаОПрибыляхИУбыткахЗапрос*/: IReturn<List<DetalizaciyaOtchetaOPribylyakhIUbytkakhRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DetalizaciyaOtchetaOPribylyakhIUbytkakhsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DetalizaciyaOtchetaOPribylyakhIUbytkakhsResponse//ДетализацияОтчетаОПрибыляхИУбыткахОтвет
	{
		public string Result {get;set;}
	}


	public class DetalizaciyaOtchetaOPribylyakhIUbytkakhService /*ДетализацияОтчетаОПрибыляхИУбыткахСервис*/ : Service
	{
		public object Any(DetalizaciyaOtchetaOPribylyakhIUbytkakhRequest request)
		{
			return new DetalizaciyaOtchetaOPribylyakhIUbytkakhResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DetalizaciyaOtchetaOPribylyakhIUbytkakhRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ДетализацияОтчетаОПрибыляхИУбытках.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new DetalizaciyaOtchetaOPribylyakhIUbytkakhResponse() {Result = "ДетализацияОтчетаОПрибыляхИУбытках c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(DetalizaciyaOtchetaOPribylyakhIUbytkakhsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДетализацияОтчетаОПрибыляхИУбытках>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ДетализацияОтчетаОПрибыляхИУбытках.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
