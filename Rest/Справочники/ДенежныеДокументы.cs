
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DenezhnyeDokumenty")]
	[Route("/Catalogs/DenezhnyeDokumenty/{Code}")]
	public class DenezhnyeDokumentyRequest/*ДенежныеДокументыЗапрос*/: V82.СправочникиСсылка.ДенежныеДокументы,IReturn<DenezhnyeDokumentyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DenezhnyeDokumentyResponse//ДенежныеДокументыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DenezhnyeDokumentys")]
	[Route("/Catalogs/DenezhnyeDokumentys/{Codes}")]
	public class DenezhnyeDokumentysRequest/*ДенежныеДокументыЗапрос*/: IReturn<List<DenezhnyeDokumentyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DenezhnyeDokumentysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DenezhnyeDokumentysResponse//ДенежныеДокументыОтвет
	{
		public string Result {get;set;}
	}


	public class DenezhnyeDokumentyService /*ДенежныеДокументыСервис*/ : Service
	{
		public object Any(DenezhnyeDokumentyRequest request)
		{
			return new DenezhnyeDokumentyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DenezhnyeDokumentyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ДенежныеДокументы.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new DenezhnyeDokumentyResponse() {Result = "ДенежныеДокументы c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(DenezhnyeDokumentysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДенежныеДокументы>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ДенежныеДокументы.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
