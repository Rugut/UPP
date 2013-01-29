
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/SchetaByudzheta")]
	[Route("/Catalogs/SchetaByudzheta/{Code}")]
	public class SchetaByudzhetaRequest/*—четаЅюджета«апрос*/: V82.—правочники—сылка.—четаЅюджета,IReturn<SchetaByudzhetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SchetaByudzhetaResponse//—четаЅюджетаќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SchetaByudzhetas")]
	[Route("/Catalogs/SchetaByudzhetas/{Codes}")]
	public class SchetaByudzhetasRequest/*—четаЅюджета«апрос*/: IReturn<List<SchetaByudzhetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SchetaByudzhetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SchetaByudzhetasResponse//—четаЅюджетаќтвет
	{
		public string Result {get;set;}
	}


	public class SchetaByudzhetaService /*—четаЅюджета—ервис*/ : Service
	{
		public object Any(SchetaByudzhetaRequest request)
		{
			return new SchetaByudzhetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SchetaByudzhetaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—четаЅюджета.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new SchetaByudzhetaResponse() {Result = "—четаЅюджета c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—четаЅюджета.Ќайтиѕо оду(1);
			}
		}

		public object Get(SchetaByudzhetasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—четаЅюджета>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—четаЅюджета.Ќайтиѕо оду(—трока од);
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
