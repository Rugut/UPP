
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnost")]
	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnost/{Code}")]
	public class DokumentyUdostoveryayushhieLichnostRequest/*ДокументыУдостоверяющиеЛичностьЗапрос*/: V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность,IReturn<DokumentyUdostoveryayushhieLichnostRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokumentyUdostoveryayushhieLichnostResponse//ДокументыУдостоверяющиеЛичностьОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnosts")]
	[Route("/Catalogs/DokumentyUdostoveryayushhieLichnosts/{Codes}")]
	public class DokumentyUdostoveryayushhieLichnostsRequest/*ДокументыУдостоверяющиеЛичностьЗапрос*/: IReturn<List<DokumentyUdostoveryayushhieLichnostRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokumentyUdostoveryayushhieLichnostsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokumentyUdostoveryayushhieLichnostsResponse//ДокументыУдостоверяющиеЛичностьОтвет
	{
		public string Result {get;set;}
	}


	public class DokumentyUdostoveryayushhieLichnostService /*ДокументыУдостоверяющиеЛичностьСервис*/ : Service
	{
		public object Any(DokumentyUdostoveryayushhieLichnostRequest request)
		{
			return new DokumentyUdostoveryayushhieLichnostResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokumentyUdostoveryayushhieLichnostRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ДокументыУдостоверяющиеЛичность.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new DokumentyUdostoveryayushhieLichnostResponse() {Result = "ДокументыУдостоверяющиеЛичность c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ДокументыУдостоверяющиеЛичность.НайтиПоКоду(1);
			}
		}

		public object Get(DokumentyUdostoveryayushhieLichnostsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ДокументыУдостоверяющиеЛичность.НайтиПоКоду(СтрокаКод);
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
