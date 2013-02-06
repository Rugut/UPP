
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/RabochieCentry")]
	[Route("/Catalogs/RabochieCentry/{Code}")]
	public class RabochieCentryRequest/*РабочиеЦентрыЗапрос*/: V82.СправочникиСсылка.РабочиеЦентры,IReturn<RabochieCentryRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RabochieCentryResponse//РабочиеЦентрыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/RabochieCentrys")]
	[Route("/Catalogs/RabochieCentrys/{Codes}")]
	public class RabochieCentrysRequest/*РабочиеЦентрыЗапрос*/: IReturn<List<RabochieCentryRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RabochieCentrysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RabochieCentrysResponse//РабочиеЦентрыОтвет
	{
		public string Result {get;set;}
	}


	public class RabochieCentryService /*РабочиеЦентрыСервис*/ : Service
	{
		public object Any(RabochieCentryRequest request)
		{
			return new RabochieCentryResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RabochieCentryRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.РабочиеЦентры.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new RabochieCentryResponse() {Result = "РабочиеЦентры c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(RabochieCentrysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.РабочиеЦентры>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.РабочиеЦентры.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
