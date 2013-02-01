
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/RegistraciyaVIFNS")]
	[Route("/Catalogs/RegistraciyaVIFNS/{Code}")]
	public class RegistraciyaVIFNSRequest/*РегистрацияВИФНСЗапрос*/: V82.СправочникиСсылка.РегистрацияВИФНС,IReturn<RegistraciyaVIFNSRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class RegistraciyaVIFNSResponse//РегистрацияВИФНСОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/RegistraciyaVIFNSs")]
	[Route("/Catalogs/RegistraciyaVIFNSs/{Codes}")]
	public class RegistraciyaVIFNSsRequest/*РегистрацияВИФНСЗапрос*/: IReturn<List<RegistraciyaVIFNSRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public RegistraciyaVIFNSsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class RegistraciyaVIFNSsResponse//РегистрацияВИФНСОтвет
	{
		public string Result {get;set;}
	}


	public class RegistraciyaVIFNSService /*РегистрацияВИФНССервис*/ : Service
	{
		public object Any(RegistraciyaVIFNSRequest request)
		{
			return new RegistraciyaVIFNSResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(RegistraciyaVIFNSRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.РегистрацияВИФНС.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new RegistraciyaVIFNSResponse() {Result = "РегистрацияВИФНС c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.РегистрацияВИФНС.НайтиПоКоду(1);
			}
		}

		public object Get(RegistraciyaVIFNSsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.РегистрацияВИФНС>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.РегистрацияВИФНС.НайтиПоКоду(СтрокаКод);
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
