
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Territorii")]
	[Route("/Catalogs/Territorii/{Code}")]
	public class TerritoriiRequest/*ТерриторииЗапрос*/: V82.СправочникиСсылка.Территории,IReturn<TerritoriiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TerritoriiResponse//ТерриторииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Territoriis")]
	[Route("/Catalogs/Territoriis/{Codes}")]
	public class TerritoriisRequest/*ТерриторииЗапрос*/: IReturn<List<TerritoriiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TerritoriisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TerritoriisResponse//ТерриторииОтвет
	{
		public string Result {get;set;}
	}


	public class TerritoriiService /*ТерриторииСервис*/ : Service
	{
		public object Any(TerritoriiRequest request)
		{
			return new TerritoriiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TerritoriiRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.Территории.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new TerritoriiResponse() {Result = "Территории c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.Территории.НайтиПоКоду(1);
			}
		}

		public object Get(TerritoriisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Территории>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.Территории.НайтиПоКоду(СтрокаКод);
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
