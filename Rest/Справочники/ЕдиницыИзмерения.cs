
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/EdinicyIzmereniya")]
	[Route("/Catalogs/EdinicyIzmereniya/{Code}")]
	public class EdinicyIzmereniyaRequest/*ЕдиницыИзмеренияЗапрос*/: V82.СправочникиСсылка.ЕдиницыИзмерения,IReturn<EdinicyIzmereniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class EdinicyIzmereniyaResponse//ЕдиницыИзмеренияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/EdinicyIzmereniyas")]
	[Route("/Catalogs/EdinicyIzmereniyas/{Codes}")]
	public class EdinicyIzmereniyasRequest/*ЕдиницыИзмеренияЗапрос*/: IReturn<List<EdinicyIzmereniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public EdinicyIzmereniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class EdinicyIzmereniyasResponse//ЕдиницыИзмеренияОтвет
	{
		public string Result {get;set;}
	}


	public class EdinicyIzmereniyaService /*ЕдиницыИзмеренияСервис*/ : Service
	{
		public object Any(EdinicyIzmereniyaRequest request)
		{
			return new EdinicyIzmereniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(EdinicyIzmereniyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ЕдиницыИзмерения.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new EdinicyIzmereniyaResponse() {Result = "ЕдиницыИзмерения c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(EdinicyIzmereniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЕдиницыИзмерения>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ЕдиницыИзмерения.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
