
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/VidyNalogovykhOrganov")]
	[Route("/Catalogs/VidyNalogovykhOrganov/{Code}")]
	public class VidyNalogovykhOrganovRequest/*¬идыЌалоговыхќрганов«апрос*/: V82.—правочники—сылка.¬идыЌалоговыхќрганов,IReturn<VidyNalogovykhOrganovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyNalogovykhOrganovResponse//¬идыЌалоговыхќргановќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyNalogovykhOrganovs")]
	[Route("/Catalogs/VidyNalogovykhOrganovs/{Codes}")]
	public class VidyNalogovykhOrganovsRequest/*¬идыЌалоговыхќрганов«апрос*/: IReturn<List<VidyNalogovykhOrganovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyNalogovykhOrganovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyNalogovykhOrganovsResponse//¬идыЌалоговыхќргановќтвет
	{
		public string Result {get;set;}
	}


	public class VidyNalogovykhOrganovService /*¬идыЌалоговыхќрганов—ервис*/ : Service
	{
		public object Any(VidyNalogovykhOrganovRequest request)
		{
			return new VidyNalogovykhOrganovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyNalogovykhOrganovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.¬идыЌалоговыхќрганов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new VidyNalogovykhOrganovResponse() {Result = "¬идыЌалоговыхќрганов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.¬идыЌалоговыхќрганов.Ќайтиѕо оду(1);
			}
		}

		public object Get(VidyNalogovykhOrganovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.¬идыЌалоговыхќрганов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.¬идыЌалоговыхќрганов.Ќайтиѕо оду(—трока од);
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
