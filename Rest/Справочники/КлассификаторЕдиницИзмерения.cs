
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlassifikatorEdinicIzmereniya")]
	[Route("/Catalogs/KlassifikatorEdinicIzmereniya/{Code}")]
	public class KlassifikatorEdinicIzmereniyaRequest/*КлассификаторЕдиницИзмеренияЗапрос*/: V82.СправочникиСсылка.КлассификаторЕдиницИзмерения,IReturn<KlassifikatorEdinicIzmereniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlassifikatorEdinicIzmereniyaResponse//КлассификаторЕдиницИзмеренияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlassifikatorEdinicIzmereniyas")]
	[Route("/Catalogs/KlassifikatorEdinicIzmereniyas/{Codes}")]
	public class KlassifikatorEdinicIzmereniyasRequest/*КлассификаторЕдиницИзмеренияЗапрос*/: IReturn<List<KlassifikatorEdinicIzmereniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlassifikatorEdinicIzmereniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlassifikatorEdinicIzmereniyasResponse//КлассификаторЕдиницИзмеренияОтвет
	{
		public string Result {get;set;}
	}


	public class KlassifikatorEdinicIzmereniyaService /*КлассификаторЕдиницИзмеренияСервис*/ : Service
	{
		public object Any(KlassifikatorEdinicIzmereniyaRequest request)
		{
			return new KlassifikatorEdinicIzmereniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlassifikatorEdinicIzmereniyaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КлассификаторЕдиницИзмерения.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KlassifikatorEdinicIzmereniyaResponse() {Result = "КлассификаторЕдиницИзмерения c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КлассификаторЕдиницИзмерения.НайтиПоКоду(1);
			}
		}

		public object Get(KlassifikatorEdinicIzmereniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлассификаторЕдиницИзмерения>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КлассификаторЕдиницИзмерения.НайтиПоКоду(СтрокаКод);
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
