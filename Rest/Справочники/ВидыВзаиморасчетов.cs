
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/VidyVzaimoraschetov")]
	[Route("/Catalogs/VidyVzaimoraschetov/{Code}")]
	public class VidyVzaimoraschetovRequest/*¬иды¬заиморасчетов«апрос*/: V82.—правочники—сылка.¬иды¬заиморасчетов,IReturn<VidyVzaimoraschetovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyVzaimoraschetovResponse//¬иды¬заиморасчетовќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyVzaimoraschetovs")]
	[Route("/Catalogs/VidyVzaimoraschetovs/{Codes}")]
	public class VidyVzaimoraschetovsRequest/*¬иды¬заиморасчетов«апрос*/: IReturn<List<VidyVzaimoraschetovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyVzaimoraschetovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyVzaimoraschetovsResponse//¬иды¬заиморасчетовќтвет
	{
		public string Result {get;set;}
	}


	public class VidyVzaimoraschetovService /*¬иды¬заиморасчетов—ервис*/ : Service
	{
		public object Any(VidyVzaimoraschetovRequest request)
		{
			return new VidyVzaimoraschetovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyVzaimoraschetovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.¬иды¬заиморасчетов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new VidyVzaimoraschetovResponse() {Result = "¬иды¬заиморасчетов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.¬иды¬заиморасчетов.Ќайтиѕо оду(1);
			}
		}

		public object Get(VidyVzaimoraschetovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.¬иды¬заиморасчетов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.¬иды¬заиморасчетов.Ќайтиѕо оду(—трока од);
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
