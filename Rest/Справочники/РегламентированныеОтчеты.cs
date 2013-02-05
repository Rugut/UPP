
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ReglamentirovannyeOtchety")]
	[Route("/Catalogs/ReglamentirovannyeOtchety/{Code}")]
	public class ReglamentirovannyeOtchetyRequest/*РегламентированныеОтчетыЗапрос*/: V82.СправочникиСсылка.РегламентированныеОтчеты,IReturn<ReglamentirovannyeOtchetyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ReglamentirovannyeOtchetyResponse//РегламентированныеОтчетыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ReglamentirovannyeOtchetys")]
	[Route("/Catalogs/ReglamentirovannyeOtchetys/{Codes}")]
	public class ReglamentirovannyeOtchetysRequest/*РегламентированныеОтчетыЗапрос*/: IReturn<List<ReglamentirovannyeOtchetyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ReglamentirovannyeOtchetysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ReglamentirovannyeOtchetysResponse//РегламентированныеОтчетыОтвет
	{
		public string Result {get;set;}
	}


	public class ReglamentirovannyeOtchetyService /*РегламентированныеОтчетыСервис*/ : Service
	{
		public object Any(ReglamentirovannyeOtchetyRequest request)
		{
			return new ReglamentirovannyeOtchetyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ReglamentirovannyeOtchetyRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.РегламентированныеОтчеты.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ReglamentirovannyeOtchetyResponse() {Result = "РегламентированныеОтчеты c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ReglamentirovannyeOtchetysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.РегламентированныеОтчеты>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.РегламентированныеОтчеты.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
