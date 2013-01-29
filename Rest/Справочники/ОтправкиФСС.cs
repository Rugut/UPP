
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OtpravkiFSS")]
	[Route("/Catalogs/OtpravkiFSS/{Code}")]
	public class OtpravkiFSSRequest/*ОтправкиФССЗапрос*/: V82.СправочникиСсылка.ОтправкиФСС,IReturn<OtpravkiFSSRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OtpravkiFSSResponse//ОтправкиФССОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OtpravkiFSSs")]
	[Route("/Catalogs/OtpravkiFSSs/{Codes}")]
	public class OtpravkiFSSsRequest/*ОтправкиФССЗапрос*/: IReturn<List<OtpravkiFSSRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OtpravkiFSSsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OtpravkiFSSsResponse//ОтправкиФССОтвет
	{
		public string Result {get;set;}
	}


	public class OtpravkiFSSService /*ОтправкиФСССервис*/ : Service
	{
		public object Any(OtpravkiFSSRequest request)
		{
			return new OtpravkiFSSResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OtpravkiFSSRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ОтправкиФСС.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new OtpravkiFSSResponse() {Result = "ОтправкиФСС c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ОтправкиФСС.НайтиПоКоду(1);
			}
		}

		public object Get(OtpravkiFSSsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОтправкиФСС>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ОтправкиФСС.НайтиПоКоду(СтрокаКод);
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
