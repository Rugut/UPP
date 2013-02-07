
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TorgovoeOborudovanie")]
	[Route("/Catalogs/TorgovoeOborudovanie/FindById/{Id}")]
	[Route("/Catalogs/TorgovoeOborudovanie/FindByCode/{Code}")]
	[Route("/Catalogs/TorgovoeOborudovanie/FindByDescr/{Descr}")]
	public class TorgovoeOborudovanieRequest/*ТорговоеОборудованиеЗапрос*/: V82.СправочникиСсылка.ТорговоеОборудование,IReturn<TorgovoeOborudovanieRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TorgovoeOborudovanieResponse//ТорговоеОборудованиеОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TorgovoeOborudovanies")]
	[Route("/Catalogs/TorgovoeOborudovanies/{Codes}")]
	public class TorgovoeOborudovaniesRequest/*ТорговоеОборудованиеЗапрос*/: IReturn<List<TorgovoeOborudovanieRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TorgovoeOborudovaniesRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TorgovoeOborudovaniesResponse//ТорговоеОборудованиеОтвет
	{
		public string Result {get;set;}
	}


	public class TorgovoeOborudovanieService /*ТорговоеОборудованиеСервис*/ : Service
	{
		public object Any(TorgovoeOborudovanieRequest request)
		{
			return new TorgovoeOborudovanieResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TorgovoeOborudovanieRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ТорговоеОборудование.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TorgovoeOborudovanieResponse() {Result = "ТорговоеОборудование c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TorgovoeOborudovaniesRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТорговоеОборудование>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ТорговоеОборудование.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}