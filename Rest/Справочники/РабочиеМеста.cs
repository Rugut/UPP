
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/RabochieMesta")]
	[Route("/Catalogs/RabochieMesta/FindById/{Id}")]
	[Route("/Catalogs/RabochieMesta/FindByCode/{Code}")]
	[Route("/Catalogs/RabochieMesta/FindByDescr/{Descr}")]
	public class RabochieMestaRequest/*РабочиеМестаЗапрос*/: V82.СправочникиСсылка.РабочиеМеста,IReturn<RabochieMestaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RabochieMestaResponse//РабочиеМестаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/RabochieMestas")]
	[Route("/Catalogs/RabochieMestas/{Codes}")]
	public class RabochieMestasRequest/*РабочиеМестаЗапрос*/: IReturn<List<RabochieMestaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RabochieMestasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RabochieMestasResponse//РабочиеМестаОтвет
	{
		public string Result {get;set;}
	}


	public class RabochieMestaService /*РабочиеМестаСервис*/ : Service
	{
		public object Any(RabochieMestaRequest request)
		{
			return new RabochieMestaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RabochieMestaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.РабочиеМеста.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new RabochieMestaResponse() {Result = "РабочиеМеста c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(RabochieMestasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.РабочиеМеста>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.РабочиеМеста.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}