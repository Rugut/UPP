
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OsobyeUsloviyaTruda")]
	[Route("/Catalogs/OsobyeUsloviyaTruda/{Code}")]
	public class OsobyeUsloviyaTrudaRequest/*ОсобыеУсловияТрудаЗапрос*/: V82.СправочникиСсылка.ОсобыеУсловияТруда,IReturn<OsobyeUsloviyaTrudaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsobyeUsloviyaTrudaResponse//ОсобыеУсловияТрудаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsobyeUsloviyaTrudas")]
	[Route("/Catalogs/OsobyeUsloviyaTrudas/{Codes}")]
	public class OsobyeUsloviyaTrudasRequest/*ОсобыеУсловияТрудаЗапрос*/: IReturn<List<OsobyeUsloviyaTrudaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsobyeUsloviyaTrudasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsobyeUsloviyaTrudasResponse//ОсобыеУсловияТрудаОтвет
	{
		public string Result {get;set;}
	}


	public class OsobyeUsloviyaTrudaService /*ОсобыеУсловияТрудаСервис*/ : Service
	{
		public object Any(OsobyeUsloviyaTrudaRequest request)
		{
			return new OsobyeUsloviyaTrudaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsobyeUsloviyaTrudaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ОсобыеУсловияТруда.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new OsobyeUsloviyaTrudaResponse() {Result = "ОсобыеУсловияТруда c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(OsobyeUsloviyaTrudasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОсобыеУсловияТруда>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ОсобыеУсловияТруда.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
