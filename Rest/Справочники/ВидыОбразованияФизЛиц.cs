
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/VidyObrazovaniyaFizLic")]
	[Route("/Catalogs/VidyObrazovaniyaFizLic/{Code}")]
	public class VidyObrazovaniyaFizLicRequest/*¬идыќбразовани€‘изЋиц«апрос*/: V82.—правочники—сылка.¬идыќбразовани€‘изЋиц,IReturn<VidyObrazovaniyaFizLicRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyObrazovaniyaFizLicResponse//¬идыќбразовани€‘изЋицќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyObrazovaniyaFizLics")]
	[Route("/Catalogs/VidyObrazovaniyaFizLics/{Codes}")]
	public class VidyObrazovaniyaFizLicsRequest/*¬идыќбразовани€‘изЋиц«апрос*/: IReturn<List<VidyObrazovaniyaFizLicRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyObrazovaniyaFizLicsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyObrazovaniyaFizLicsResponse//¬идыќбразовани€‘изЋицќтвет
	{
		public string Result {get;set;}
	}


	public class VidyObrazovaniyaFizLicService /*¬идыќбразовани€‘изЋиц—ервис*/ : Service
	{
		public object Any(VidyObrazovaniyaFizLicRequest request)
		{
			return new VidyObrazovaniyaFizLicResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyObrazovaniyaFizLicRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.¬идыќбразовани€‘изЋиц.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new VidyObrazovaniyaFizLicResponse() {Result = "¬идыќбразовани€‘изЋиц c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.¬идыќбразовани€‘изЋиц.Ќайтиѕо оду(1);
			}
		}

		public object Get(VidyObrazovaniyaFizLicsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.¬идыќбразовани€‘изЋиц>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.¬идыќбразовани€‘изЋиц.Ќайтиѕо оду(—трока од);
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
