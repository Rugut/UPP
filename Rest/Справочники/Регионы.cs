
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Regiony")]
	[Route("/Catalogs/Regiony/FindById/{Id}")]
	[Route("/Catalogs/Regiony/FindByCode/{Code}")]
	[Route("/Catalogs/Regiony/FindByDescr/{Descr}")]
	public class RegionyRequest/*РегионыЗапрос*/: V82.СправочникиСсылка.Регионы,IReturn<RegionyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RegionyResponse//РегионыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Regionys")]
	[Route("/Catalogs/Regionys/{Codes}")]
	public class RegionysRequest/*РегионыЗапрос*/: IReturn<List<RegionyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RegionysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RegionysResponse//РегионыОтвет
	{
		public string Result {get;set;}
	}


	public class RegionyService /*РегионыСервис*/ : Service
	{
		public object Any(RegionyRequest request)
		{
			return new RegionyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RegionyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.Регионы.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new RegionyResponse() {Result = "Регионы c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(RegionysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Регионы>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.Регионы.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}