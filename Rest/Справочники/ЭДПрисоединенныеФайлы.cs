
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/EHDPrisoedinennyeFajjly")]
	[Route("/Catalogs/EHDPrisoedinennyeFajjly/{Code}")]
	public class EHDPrisoedinennyeFajjlyRequest/*ЭДПрисоединенныеФайлыЗапрос*/: V82.СправочникиСсылка.ЭДПрисоединенныеФайлы,IReturn<EHDPrisoedinennyeFajjlyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class EHDPrisoedinennyeFajjlyResponse//ЭДПрисоединенныеФайлыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/EHDPrisoedinennyeFajjlys")]
	[Route("/Catalogs/EHDPrisoedinennyeFajjlys/{Codes}")]
	public class EHDPrisoedinennyeFajjlysRequest/*ЭДПрисоединенныеФайлыЗапрос*/: IReturn<List<EHDPrisoedinennyeFajjlyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public EHDPrisoedinennyeFajjlysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class EHDPrisoedinennyeFajjlysResponse//ЭДПрисоединенныеФайлыОтвет
	{
		public string Result {get;set;}
	}


	public class EHDPrisoedinennyeFajjlyService /*ЭДПрисоединенныеФайлыСервис*/ : Service
	{
		public object Any(EHDPrisoedinennyeFajjlyRequest request)
		{
			return new EHDPrisoedinennyeFajjlyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(EHDPrisoedinennyeFajjlyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ЭДПрисоединенныеФайлы.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new EHDPrisoedinennyeFajjlyResponse() {Result = "ЭДПрисоединенныеФайлы c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ЭДПрисоединенныеФайлы.НайтиПоКоду(1);
			}
		}

		public object Get(EHDPrisoedinennyeFajjlysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЭДПрисоединенныеФайлы>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ЭДПрисоединенныеФайлы.НайтиПоКоду(СтрокаКод);
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
