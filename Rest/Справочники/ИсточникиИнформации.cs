
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/IstochnikiInformacii")]
	[Route("/Catalogs/IstochnikiInformacii/{Code}")]
	public class IstochnikiInformaciiRequest/*ИсточникиИнформацииЗапрос*/: V82.СправочникиСсылка.ИсточникиИнформации,IReturn<IstochnikiInformaciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class IstochnikiInformaciiResponse//ИсточникиИнформацииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/IstochnikiInformaciis")]
	[Route("/Catalogs/IstochnikiInformaciis/{Codes}")]
	public class IstochnikiInformaciisRequest/*ИсточникиИнформацииЗапрос*/: IReturn<List<IstochnikiInformaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public IstochnikiInformaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class IstochnikiInformaciisResponse//ИсточникиИнформацииОтвет
	{
		public string Result {get;set;}
	}


	public class IstochnikiInformaciiService /*ИсточникиИнформацииСервис*/ : Service
	{
		public object Any(IstochnikiInformaciiRequest request)
		{
			return new IstochnikiInformaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(IstochnikiInformaciiRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ИсточникиИнформации.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new IstochnikiInformaciiResponse() {Result = "ИсточникиИнформации c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(IstochnikiInformaciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ИсточникиИнформации>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ИсточникиИнформации.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
