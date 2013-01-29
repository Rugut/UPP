
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/VidyObsluzhivaniyaOsnovnykhSredstv")]
	[Route("/Catalogs/VidyObsluzhivaniyaOsnovnykhSredstv/{Code}")]
	public class VidyObsluzhivaniyaOsnovnykhSredstvRequest/*¬идыќбслуживани€ќсновных—редств«апрос*/: V82.—правочники—сылка.¬идыќбслуживани€ќсновных—редств,IReturn<VidyObsluzhivaniyaOsnovnykhSredstvRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyObsluzhivaniyaOsnovnykhSredstvResponse//¬идыќбслуживани€ќсновных—редствќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyObsluzhivaniyaOsnovnykhSredstvs")]
	[Route("/Catalogs/VidyObsluzhivaniyaOsnovnykhSredstvs/{Codes}")]
	public class VidyObsluzhivaniyaOsnovnykhSredstvsRequest/*¬идыќбслуживани€ќсновных—редств«апрос*/: IReturn<List<VidyObsluzhivaniyaOsnovnykhSredstvRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyObsluzhivaniyaOsnovnykhSredstvsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyObsluzhivaniyaOsnovnykhSredstvsResponse//¬идыќбслуживани€ќсновных—редствќтвет
	{
		public string Result {get;set;}
	}


	public class VidyObsluzhivaniyaOsnovnykhSredstvService /*¬идыќбслуживани€ќсновных—редств—ервис*/ : Service
	{
		public object Any(VidyObsluzhivaniyaOsnovnykhSredstvRequest request)
		{
			return new VidyObsluzhivaniyaOsnovnykhSredstvResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyObsluzhivaniyaOsnovnykhSredstvRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.¬идыќбслуживани€ќсновных—редств.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new VidyObsluzhivaniyaOsnovnykhSredstvResponse() {Result = "¬идыќбслуживани€ќсновных—редств c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.¬идыќбслуживани€ќсновных—редств.Ќайтиѕо оду(1);
			}
		}

		public object Get(VidyObsluzhivaniyaOsnovnykhSredstvsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.¬идыќбслуживани€ќсновных—редств>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.¬идыќбслуживани€ќсновных—редств.Ќайтиѕо оду(—трока од);
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
