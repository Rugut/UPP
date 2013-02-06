
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OsnovaniyaUvolneniya")]
	[Route("/Catalogs/OsnovaniyaUvolneniya/{Code}")]
	public class OsnovaniyaUvolneniyaRequest/*ОснованияУвольненияЗапрос*/: V82.СправочникиСсылка.ОснованияУвольнения,IReturn<OsnovaniyaUvolneniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsnovaniyaUvolneniyaResponse//ОснованияУвольненияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsnovaniyaUvolneniyas")]
	[Route("/Catalogs/OsnovaniyaUvolneniyas/{Codes}")]
	public class OsnovaniyaUvolneniyasRequest/*ОснованияУвольненияЗапрос*/: IReturn<List<OsnovaniyaUvolneniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsnovaniyaUvolneniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsnovaniyaUvolneniyasResponse//ОснованияУвольненияОтвет
	{
		public string Result {get;set;}
	}


	public class OsnovaniyaUvolneniyaService /*ОснованияУвольненияСервис*/ : Service
	{
		public object Any(OsnovaniyaUvolneniyaRequest request)
		{
			return new OsnovaniyaUvolneniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsnovaniyaUvolneniyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ОснованияУвольнения.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new OsnovaniyaUvolneniyaResponse() {Result = "ОснованияУвольнения c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(OsnovaniyaUvolneniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОснованияУвольнения>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ОснованияУвольнения.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
