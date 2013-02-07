
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NomeraGTD")]
	[Route("/Catalogs/NomeraGTD/FindById/{Id}")]
	[Route("/Catalogs/NomeraGTD/FindByCode/{Code}")]
	[Route("/Catalogs/NomeraGTD/FindByDescr/{Descr}")]
	public class NomeraGTDRequest/*НомераГТДЗапрос*/: V82.СправочникиСсылка.НомераГТД,IReturn<NomeraGTDRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NomeraGTDResponse//НомераГТДОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NomeraGTDs")]
	[Route("/Catalogs/NomeraGTDs/{Codes}")]
	public class NomeraGTDsRequest/*НомераГТДЗапрос*/: IReturn<List<NomeraGTDRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NomeraGTDsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NomeraGTDsResponse//НомераГТДОтвет
	{
		public string Result {get;set;}
	}


	public class NomeraGTDService /*НомераГТДСервис*/ : Service
	{
		public object Any(NomeraGTDRequest request)
		{
			return new NomeraGTDResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NomeraGTDRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.НомераГТД.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NomeraGTDResponse() {Result = "НомераГТД c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NomeraGTDsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НомераГТД>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.НомераГТД.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}