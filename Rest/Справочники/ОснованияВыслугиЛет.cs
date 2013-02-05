
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OsnovaniyaVyslugiLet")]
	[Route("/Catalogs/OsnovaniyaVyslugiLet/{Code}")]
	public class OsnovaniyaVyslugiLetRequest/*ОснованияВыслугиЛетЗапрос*/: V82.СправочникиСсылка.ОснованияВыслугиЛет,IReturn<OsnovaniyaVyslugiLetRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsnovaniyaVyslugiLetResponse//ОснованияВыслугиЛетОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsnovaniyaVyslugiLets")]
	[Route("/Catalogs/OsnovaniyaVyslugiLets/{Codes}")]
	public class OsnovaniyaVyslugiLetsRequest/*ОснованияВыслугиЛетЗапрос*/: IReturn<List<OsnovaniyaVyslugiLetRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsnovaniyaVyslugiLetsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsnovaniyaVyslugiLetsResponse//ОснованияВыслугиЛетОтвет
	{
		public string Result {get;set;}
	}


	public class OsnovaniyaVyslugiLetService /*ОснованияВыслугиЛетСервис*/ : Service
	{
		public object Any(OsnovaniyaVyslugiLetRequest request)
		{
			return new OsnovaniyaVyslugiLetResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsnovaniyaVyslugiLetRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ОснованияВыслугиЛет.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new OsnovaniyaVyslugiLetResponse() {Result = "ОснованияВыслугиЛет c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(OsnovaniyaVyslugiLetsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОснованияВыслугиЛет>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ОснованияВыслугиЛет.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
