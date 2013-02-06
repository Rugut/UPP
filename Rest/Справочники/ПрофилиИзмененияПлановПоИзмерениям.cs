
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ProfiliIzmeneniyaPlanovPoIzmereniyam")]
	[Route("/Catalogs/ProfiliIzmeneniyaPlanovPoIzmereniyam/{Code}")]
	public class ProfiliIzmeneniyaPlanovPoIzmereniyamRequest/*ПрофилиИзмененияПлановПоИзмерениямЗапрос*/: V82.СправочникиСсылка.ПрофилиИзмененияПлановПоИзмерениям,IReturn<ProfiliIzmeneniyaPlanovPoIzmereniyamRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ProfiliIzmeneniyaPlanovPoIzmereniyamResponse//ПрофилиИзмененияПлановПоИзмерениямОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ProfiliIzmeneniyaPlanovPoIzmereniyams")]
	[Route("/Catalogs/ProfiliIzmeneniyaPlanovPoIzmereniyams/{Codes}")]
	public class ProfiliIzmeneniyaPlanovPoIzmereniyamsRequest/*ПрофилиИзмененияПлановПоИзмерениямЗапрос*/: IReturn<List<ProfiliIzmeneniyaPlanovPoIzmereniyamRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ProfiliIzmeneniyaPlanovPoIzmereniyamsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ProfiliIzmeneniyaPlanovPoIzmereniyamsResponse//ПрофилиИзмененияПлановПоИзмерениямОтвет
	{
		public string Result {get;set;}
	}


	public class ProfiliIzmeneniyaPlanovPoIzmereniyamService /*ПрофилиИзмененияПлановПоИзмерениямСервис*/ : Service
	{
		public object Any(ProfiliIzmeneniyaPlanovPoIzmereniyamRequest request)
		{
			return new ProfiliIzmeneniyaPlanovPoIzmereniyamResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ProfiliIzmeneniyaPlanovPoIzmereniyamRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ПрофилиИзмененияПлановПоИзмерениям.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ProfiliIzmeneniyaPlanovPoIzmereniyamResponse() {Result = "ПрофилиИзмененияПлановПоИзмерениям c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ProfiliIzmeneniyaPlanovPoIzmereniyamsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПрофилиИзмененияПлановПоИзмерениям>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ПрофилиИзмененияПлановПоИзмерениям.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
