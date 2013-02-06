
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TerritorialnyeUsloviya")]
	[Route("/Catalogs/TerritorialnyeUsloviya/{Code}")]
	public class TerritorialnyeUsloviyaRequest/*ТерриториальныеУсловияЗапрос*/: V82.СправочникиСсылка.ТерриториальныеУсловия,IReturn<TerritorialnyeUsloviyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TerritorialnyeUsloviyaResponse//ТерриториальныеУсловияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TerritorialnyeUsloviyas")]
	[Route("/Catalogs/TerritorialnyeUsloviyas/{Codes}")]
	public class TerritorialnyeUsloviyasRequest/*ТерриториальныеУсловияЗапрос*/: IReturn<List<TerritorialnyeUsloviyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TerritorialnyeUsloviyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TerritorialnyeUsloviyasResponse//ТерриториальныеУсловияОтвет
	{
		public string Result {get;set;}
	}


	public class TerritorialnyeUsloviyaService /*ТерриториальныеУсловияСервис*/ : Service
	{
		public object Any(TerritorialnyeUsloviyaRequest request)
		{
			return new TerritorialnyeUsloviyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TerritorialnyeUsloviyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ТерриториальныеУсловия.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TerritorialnyeUsloviyaResponse() {Result = "ТерриториальныеУсловия c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TerritorialnyeUsloviyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТерриториальныеУсловия>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ТерриториальныеУсловия.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
