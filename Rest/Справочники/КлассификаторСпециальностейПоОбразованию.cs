
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlassifikatorSpecialnostejjPoObrazovaniyu")]
	[Route("/Catalogs/KlassifikatorSpecialnostejjPoObrazovaniyu/{Code}")]
	public class KlassifikatorSpecialnostejjPoObrazovaniyuRequest/*КлассификаторСпециальностейПоОбразованиюЗапрос*/: V82.СправочникиСсылка.КлассификаторСпециальностейПоОбразованию,IReturn<KlassifikatorSpecialnostejjPoObrazovaniyuRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlassifikatorSpecialnostejjPoObrazovaniyuResponse//КлассификаторСпециальностейПоОбразованиюОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlassifikatorSpecialnostejjPoObrazovaniyus")]
	[Route("/Catalogs/KlassifikatorSpecialnostejjPoObrazovaniyus/{Codes}")]
	public class KlassifikatorSpecialnostejjPoObrazovaniyusRequest/*КлассификаторСпециальностейПоОбразованиюЗапрос*/: IReturn<List<KlassifikatorSpecialnostejjPoObrazovaniyuRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlassifikatorSpecialnostejjPoObrazovaniyusRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlassifikatorSpecialnostejjPoObrazovaniyusResponse//КлассификаторСпециальностейПоОбразованиюОтвет
	{
		public string Result {get;set;}
	}


	public class KlassifikatorSpecialnostejjPoObrazovaniyuService /*КлассификаторСпециальностейПоОбразованиюСервис*/ : Service
	{
		public object Any(KlassifikatorSpecialnostejjPoObrazovaniyuRequest request)
		{
			return new KlassifikatorSpecialnostejjPoObrazovaniyuResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlassifikatorSpecialnostejjPoObrazovaniyuRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КлассификаторСпециальностейПоОбразованию.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KlassifikatorSpecialnostejjPoObrazovaniyuResponse() {Result = "КлассификаторСпециальностейПоОбразованию c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КлассификаторСпециальностейПоОбразованию.НайтиПоКоду(1);
			}
		}

		public object Get(KlassifikatorSpecialnostejjPoObrazovaniyusRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлассификаторСпециальностейПоОбразованию>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КлассификаторСпециальностейПоОбразованию.НайтиПоКоду(СтрокаКод);
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
