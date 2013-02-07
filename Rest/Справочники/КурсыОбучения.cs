
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KursyObucheniya")]
	[Route("/Catalogs/KursyObucheniya/FindById/{Id}")]
	[Route("/Catalogs/KursyObucheniya/FindByCode/{Code}")]
	[Route("/Catalogs/KursyObucheniya/FindByDescr/{Descr}")]
	public class KursyObucheniyaRequest/*КурсыОбученияЗапрос*/: V82.СправочникиСсылка.КурсыОбучения,IReturn<KursyObucheniyaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KursyObucheniyaResponse//КурсыОбученияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KursyObucheniyas")]
	[Route("/Catalogs/KursyObucheniyas/{Codes}")]
	public class KursyObucheniyasRequest/*КурсыОбученияЗапрос*/: IReturn<List<KursyObucheniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KursyObucheniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KursyObucheniyasResponse//КурсыОбученияОтвет
	{
		public string Result {get;set;}
	}


	public class KursyObucheniyaService /*КурсыОбученияСервис*/ : Service
	{
		public object Any(KursyObucheniyaRequest request)
		{
			return new KursyObucheniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KursyObucheniyaRequest request)
		{
			return null;
		}

		public object Get(KursyObucheniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КурсыОбучения>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}