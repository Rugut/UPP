
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SotrudnikiOrganizacijj")]
	[Route("/Catalogs/SotrudnikiOrganizacijj/{Code}")]
	public class SotrudnikiOrganizacijjRequest/*СотрудникиОрганизацийЗапрос*/: V82.СправочникиСсылка.СотрудникиОрганизаций,IReturn<SotrudnikiOrganizacijjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SotrudnikiOrganizacijjResponse//СотрудникиОрганизацийОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SotrudnikiOrganizacijjs")]
	[Route("/Catalogs/SotrudnikiOrganizacijjs/{Codes}")]
	public class SotrudnikiOrganizacijjsRequest/*СотрудникиОрганизацийЗапрос*/: IReturn<List<SotrudnikiOrganizacijjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SotrudnikiOrganizacijjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SotrudnikiOrganizacijjsResponse//СотрудникиОрганизацийОтвет
	{
		public string Result {get;set;}
	}


	public class SotrudnikiOrganizacijjService /*СотрудникиОрганизацийСервис*/ : Service
	{
		public object Any(SotrudnikiOrganizacijjRequest request)
		{
			return new SotrudnikiOrganizacijjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SotrudnikiOrganizacijjRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СотрудникиОрганизаций.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new SotrudnikiOrganizacijjResponse() {Result = "СотрудникиОрганизаций c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СотрудникиОрганизаций.НайтиПоКоду(1);
			}
		}

		public object Get(SotrudnikiOrganizacijjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СотрудникиОрганизаций>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СотрудникиОрганизаций.НайтиПоКоду(СтрокаКод);
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
