
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniya")]
	[Route("/Catalogs/SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniya/FindById/{Id}")]
	[Route("/Catalogs/SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniya/FindByCode/{Code}")]
	[Route("/Catalogs/SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniya/FindByDescr/{Descr}")]
	public class SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaRequest/*СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспеченияЗапрос*/: V82.СправочникиСсылка.СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения,IReturn<SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaResponse//СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспеченияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyas")]
	[Route("/Catalogs/SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyas/{Codes}")]
	public class SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyasRequest/*СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспеченияЗапрос*/: IReturn<List<SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyasResponse//СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспеченияОтвет
	{
		public string Result {get;set;}
	}


	public class SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaService /*СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспеченияСервис*/ : Service
	{
		public object Any(SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaRequest request)
		{
			return new SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaResponse() {Result = "СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}