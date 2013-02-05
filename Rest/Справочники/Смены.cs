
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Smeny")]
	[Route("/Catalogs/Smeny/{Code}")]
	public class SmenyRequest/*СменыЗапрос*/: V82.СправочникиСсылка.Смены,IReturn<SmenyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SmenyResponse//СменыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Smenys")]
	[Route("/Catalogs/Smenys/{Codes}")]
	public class SmenysRequest/*СменыЗапрос*/: IReturn<List<SmenyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SmenysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SmenysResponse//СменыОтвет
	{
		public string Result {get;set;}
	}


	public class SmenyService /*СменыСервис*/ : Service
	{
		public object Any(SmenyRequest request)
		{
			return new SmenyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SmenyRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.Смены.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SmenyResponse() {Result = "Смены c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SmenysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Смены>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.Смены.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
