
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Meropriyatiya")]
	[Route("/Catalogs/Meropriyatiya/{Code}")]
	public class MeropriyatiyaRequest/*МероприятияЗапрос*/: V82.СправочникиСсылка.Мероприятия,IReturn<MeropriyatiyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class MeropriyatiyaResponse//МероприятияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Meropriyatiyas")]
	[Route("/Catalogs/Meropriyatiyas/{Codes}")]
	public class MeropriyatiyasRequest/*МероприятияЗапрос*/: IReturn<List<MeropriyatiyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public MeropriyatiyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class MeropriyatiyasResponse//МероприятияОтвет
	{
		public string Result {get;set;}
	}


	public class MeropriyatiyaService /*МероприятияСервис*/ : Service
	{
		public object Any(MeropriyatiyaRequest request)
		{
			return new MeropriyatiyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(MeropriyatiyaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.Мероприятия.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new MeropriyatiyaResponse() {Result = "Мероприятия c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.Мероприятия.НайтиПоКоду(1);
			}
		}

		public object Get(MeropriyatiyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Мероприятия>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.Мероприятия.НайтиПоКоду(СтрокаКод);
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
