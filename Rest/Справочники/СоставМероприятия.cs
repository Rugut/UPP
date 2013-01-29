
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SostavMeropriyatiya")]
	[Route("/Catalogs/SostavMeropriyatiya/{Code}")]
	public class SostavMeropriyatiyaRequest/*СоставМероприятияЗапрос*/: V82.СправочникиСсылка.СоставМероприятия,IReturn<SostavMeropriyatiyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SostavMeropriyatiyaResponse//СоставМероприятияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SostavMeropriyatiyas")]
	[Route("/Catalogs/SostavMeropriyatiyas/{Codes}")]
	public class SostavMeropriyatiyasRequest/*СоставМероприятияЗапрос*/: IReturn<List<SostavMeropriyatiyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SostavMeropriyatiyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SostavMeropriyatiyasResponse//СоставМероприятияОтвет
	{
		public string Result {get;set;}
	}


	public class SostavMeropriyatiyaService /*СоставМероприятияСервис*/ : Service
	{
		public object Any(SostavMeropriyatiyaRequest request)
		{
			return new SostavMeropriyatiyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SostavMeropriyatiyaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СоставМероприятия.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new SostavMeropriyatiyaResponse() {Result = "СоставМероприятия c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СоставМероприятия.НайтиПоКоду(1);
			}
		}

		public object Get(SostavMeropriyatiyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СоставМероприятия>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СоставМероприятия.НайтиПоКоду(СтрокаКод);
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
