
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniya")]
	[Route("/Catalogs/SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniya/{Code}")]
	public class SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaRequest/*—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€«апрос*/: V82.—правочники—сылка.—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€,IReturn<SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaResponse//—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€ќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyas")]
	[Route("/Catalogs/SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyas/{Codes}")]
	public class SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyasRequest/*—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€«апрос*/: IReturn<List<SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyasResponse//—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€ќтвет
	{
		public string Result {get;set;}
	}


	public class SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaService /*—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€—ервис*/ : Service
	{
		public object Any(SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaRequest request)
		{
			return new SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyaResponse() {Result = "—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€ c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€.Ќайтиѕо оду(1);
			}
		}

		public object Get(SpiskiProfessijjDolzhnostejjLgotnogoPensionnogoObespecheniyasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—пискиѕрофессийƒолжностейЋьготногоѕенсионногоќбеспечени€.Ќайтиѕо оду(—трока од);
					if (—сылка != null)
					{
						 оллекци€.Add(—сылка);
					}
				}
			}
			return  оллекци€;
		}

	}
}
