
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Nagrady")]
	[Route("/Catalogs/Nagrady/{Code}")]
	public class NagradyRequest/*НаградыЗапрос*/: V82.СправочникиСсылка.Награды,IReturn<NagradyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NagradyResponse//НаградыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Nagradys")]
	[Route("/Catalogs/Nagradys/{Codes}")]
	public class NagradysRequest/*НаградыЗапрос*/: IReturn<List<NagradyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NagradysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NagradysResponse//НаградыОтвет
	{
		public string Result {get;set;}
	}


	public class NagradyService /*НаградыСервис*/ : Service
	{
		public object Any(NagradyRequest request)
		{
			return new NagradyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NagradyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.Награды.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NagradyResponse() {Result = "Награды c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.Награды.НайтиПоКоду(1);
			}
		}

		public object Get(NagradysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Награды>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.Награды.НайтиПоКоду(СтрокаКод);
					if (Ссылка != null)
					{
						Коллекция.Add(Ссылка);
					}
				}
			}
			return Коллекция;
		}

	}
}
