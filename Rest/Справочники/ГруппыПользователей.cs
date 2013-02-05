
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GruppyPolzovatelejj")]
	[Route("/Catalogs/GruppyPolzovatelejj/{Code}")]
	public class GruppyPolzovatelejjRequest/*ГруппыПользователейЗапрос*/: V82.СправочникиСсылка.ГруппыПользователей,IReturn<GruppyPolzovatelejjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppyPolzovatelejjResponse//ГруппыПользователейОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppyPolzovatelejjs")]
	[Route("/Catalogs/GruppyPolzovatelejjs/{Codes}")]
	public class GruppyPolzovatelejjsRequest/*ГруппыПользователейЗапрос*/: IReturn<List<GruppyPolzovatelejjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppyPolzovatelejjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppyPolzovatelejjsResponse//ГруппыПользователейОтвет
	{
		public string Result {get;set;}
	}


	public class GruppyPolzovatelejjService /*ГруппыПользователейСервис*/ : Service
	{
		public object Any(GruppyPolzovatelejjRequest request)
		{
			return new GruppyPolzovatelejjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppyPolzovatelejjRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ГруппыПользователей.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new GruppyPolzovatelejjResponse() {Result = "ГруппыПользователей c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(GruppyPolzovatelejjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГруппыПользователей>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ГруппыПользователей.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
