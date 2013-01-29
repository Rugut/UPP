
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OstatkiOtpuskov")]
	[Route("/Catalogs/OstatkiOtpuskov/{Code}")]
	public class OstatkiOtpuskovRequest/*ОстаткиОтпусковЗапрос*/: V82.СправочникиСсылка.ОстаткиОтпусков,IReturn<OstatkiOtpuskovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OstatkiOtpuskovResponse//ОстаткиОтпусковОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OstatkiOtpuskovs")]
	[Route("/Catalogs/OstatkiOtpuskovs/{Codes}")]
	public class OstatkiOtpuskovsRequest/*ОстаткиОтпусковЗапрос*/: IReturn<List<OstatkiOtpuskovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OstatkiOtpuskovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OstatkiOtpuskovsResponse//ОстаткиОтпусковОтвет
	{
		public string Result {get;set;}
	}


	public class OstatkiOtpuskovService /*ОстаткиОтпусковСервис*/ : Service
	{
		public object Any(OstatkiOtpuskovRequest request)
		{
			return new OstatkiOtpuskovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OstatkiOtpuskovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ОстаткиОтпусков.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new OstatkiOtpuskovResponse() {Result = "ОстаткиОтпусков c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ОстаткиОтпусков.НайтиПоКоду(1);
			}
		}

		public object Get(OstatkiOtpuskovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОстаткиОтпусков>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ОстаткиОтпусков.НайтиПоКоду(СтрокаКод);
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
