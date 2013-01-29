
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DogovoryEHkvajjringa")]
	[Route("/Catalogs/DogovoryEHkvajjringa/{Code}")]
	public class DogovoryEHkvajjringaRequest/*ДоговорыЭквайрингаЗапрос*/: V82.СправочникиСсылка.ДоговорыЭквайринга,IReturn<DogovoryEHkvajjringaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DogovoryEHkvajjringaResponse//ДоговорыЭквайрингаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DogovoryEHkvajjringas")]
	[Route("/Catalogs/DogovoryEHkvajjringas/{Codes}")]
	public class DogovoryEHkvajjringasRequest/*ДоговорыЭквайрингаЗапрос*/: IReturn<List<DogovoryEHkvajjringaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DogovoryEHkvajjringasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DogovoryEHkvajjringasResponse//ДоговорыЭквайрингаОтвет
	{
		public string Result {get;set;}
	}


	public class DogovoryEHkvajjringaService /*ДоговорыЭквайрингаСервис*/ : Service
	{
		public object Any(DogovoryEHkvajjringaRequest request)
		{
			return new DogovoryEHkvajjringaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DogovoryEHkvajjringaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ДоговорыЭквайринга.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new DogovoryEHkvajjringaResponse() {Result = "ДоговорыЭквайринга c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ДоговорыЭквайринга.НайтиПоКоду(1);
			}
		}

		public object Get(DogovoryEHkvajjringasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДоговорыЭквайринга>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ДоговорыЭквайринга.НайтиПоКоду(СтрокаКод);
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
