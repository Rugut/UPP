
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlyuchevyeResursyPredpriyatiya")]
	[Route("/Catalogs/KlyuchevyeResursyPredpriyatiya/{Code}")]
	public class KlyuchevyeResursyPredpriyatiyaRequest/*КлючевыеРесурсыПредприятияЗапрос*/: V82.СправочникиСсылка.КлючевыеРесурсыПредприятия,IReturn<KlyuchevyeResursyPredpriyatiyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlyuchevyeResursyPredpriyatiyaResponse//КлючевыеРесурсыПредприятияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlyuchevyeResursyPredpriyatiyas")]
	[Route("/Catalogs/KlyuchevyeResursyPredpriyatiyas/{Codes}")]
	public class KlyuchevyeResursyPredpriyatiyasRequest/*КлючевыеРесурсыПредприятияЗапрос*/: IReturn<List<KlyuchevyeResursyPredpriyatiyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlyuchevyeResursyPredpriyatiyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlyuchevyeResursyPredpriyatiyasResponse//КлючевыеРесурсыПредприятияОтвет
	{
		public string Result {get;set;}
	}


	public class KlyuchevyeResursyPredpriyatiyaService /*КлючевыеРесурсыПредприятияСервис*/ : Service
	{
		public object Any(KlyuchevyeResursyPredpriyatiyaRequest request)
		{
			return new KlyuchevyeResursyPredpriyatiyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlyuchevyeResursyPredpriyatiyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.КлючевыеРесурсыПредприятия.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new KlyuchevyeResursyPredpriyatiyaResponse() {Result = "КлючевыеРесурсыПредприятия c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(KlyuchevyeResursyPredpriyatiyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлючевыеРесурсыПредприятия>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.КлючевыеРесурсыПредприятия.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
