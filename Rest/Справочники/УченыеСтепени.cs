
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/UchenyeStepeni")]
	[Route("/Catalogs/UchenyeStepeni/{Code}")]
	public class UchenyeStepeniRequest/*УченыеСтепениЗапрос*/: V82.СправочникиСсылка.УченыеСтепени,IReturn<UchenyeStepeniRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class UchenyeStepeniResponse//УченыеСтепениОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/UchenyeStepenis")]
	[Route("/Catalogs/UchenyeStepenis/{Codes}")]
	public class UchenyeStepenisRequest/*УченыеСтепениЗапрос*/: IReturn<List<UchenyeStepeniRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public UchenyeStepenisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class UchenyeStepenisResponse//УченыеСтепениОтвет
	{
		public string Result {get;set;}
	}


	public class UchenyeStepeniService /*УченыеСтепениСервис*/ : Service
	{
		public object Any(UchenyeStepeniRequest request)
		{
			return new UchenyeStepeniResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(UchenyeStepeniRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.УченыеСтепени.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new UchenyeStepeniResponse() {Result = "УченыеСтепени c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(UchenyeStepenisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.УченыеСтепени>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.УченыеСтепени.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
