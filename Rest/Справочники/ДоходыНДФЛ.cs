
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DokhodyNDFL")]
	[Route("/Catalogs/DokhodyNDFL/FindById/{Id}")]
	[Route("/Catalogs/DokhodyNDFL/FindByCode/{Code}")]
	[Route("/Catalogs/DokhodyNDFL/FindByDescr/{Descr}")]
	public class DokhodyNDFLRequest/*ДоходыНДФЛЗапрос*/: V82.СправочникиСсылка.ДоходыНДФЛ,IReturn<DokhodyNDFLRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokhodyNDFLResponse//ДоходыНДФЛОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokhodyNDFLs")]
	[Route("/Catalogs/DokhodyNDFLs/{Codes}")]
	public class DokhodyNDFLsRequest/*ДоходыНДФЛЗапрос*/: IReturn<List<DokhodyNDFLRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokhodyNDFLsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokhodyNDFLsResponse//ДоходыНДФЛОтвет
	{
		public string Result {get;set;}
	}


	public class DokhodyNDFLService /*ДоходыНДФЛСервис*/ : Service
	{
		public object Any(DokhodyNDFLRequest request)
		{
			return new DokhodyNDFLResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokhodyNDFLRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ДоходыНДФЛ.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new DokhodyNDFLResponse() {Result = "ДоходыНДФЛ c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(DokhodyNDFLsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДоходыНДФЛ>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ДоходыНДФЛ.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}