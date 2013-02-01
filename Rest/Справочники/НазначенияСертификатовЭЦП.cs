
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NaznacheniyaSertifikatovEHCP")]
	[Route("/Catalogs/NaznacheniyaSertifikatovEHCP/{Code}")]
	public class NaznacheniyaSertifikatovEHCPRequest/*НазначенияСертификатовЭЦПЗапрос*/: V82.СправочникиСсылка.НазначенияСертификатовЭЦП,IReturn<NaznacheniyaSertifikatovEHCPRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NaznacheniyaSertifikatovEHCPResponse//НазначенияСертификатовЭЦПОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NaznacheniyaSertifikatovEHCPs")]
	[Route("/Catalogs/NaznacheniyaSertifikatovEHCPs/{Codes}")]
	public class NaznacheniyaSertifikatovEHCPsRequest/*НазначенияСертификатовЭЦПЗапрос*/: IReturn<List<NaznacheniyaSertifikatovEHCPRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NaznacheniyaSertifikatovEHCPsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NaznacheniyaSertifikatovEHCPsResponse//НазначенияСертификатовЭЦПОтвет
	{
		public string Result {get;set;}
	}


	public class NaznacheniyaSertifikatovEHCPService /*НазначенияСертификатовЭЦПСервис*/ : Service
	{
		public object Any(NaznacheniyaSertifikatovEHCPRequest request)
		{
			return new NaznacheniyaSertifikatovEHCPResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NaznacheniyaSertifikatovEHCPRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.НазначенияСертификатовЭЦП.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NaznacheniyaSertifikatovEHCPResponse() {Result = "НазначенияСертификатовЭЦП c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.НазначенияСертификатовЭЦП.НайтиПоКоду(1);
			}
		}

		public object Get(NaznacheniyaSertifikatovEHCPsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НазначенияСертификатовЭЦП>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.НазначенияСертификатовЭЦП.НайтиПоКоду(СтрокаКод);
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
