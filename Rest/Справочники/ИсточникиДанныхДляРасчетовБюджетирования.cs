
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/IstochnikiDannykhDlyaRaschetovByudzhetirovaniya")]
	[Route("/Catalogs/IstochnikiDannykhDlyaRaschetovByudzhetirovaniya/{Code}")]
	public class IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaRequest/*»сточникиƒанныхƒл€–асчетовЅюджетировани€«апрос*/: V82.—правочники—сылка.»сточникиƒанныхƒл€–асчетовЅюджетировани€,IReturn<IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaResponse//»сточникиƒанныхƒл€–асчетовЅюджетировани€ќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/IstochnikiDannykhDlyaRaschetovByudzhetirovaniyas")]
	[Route("/Catalogs/IstochnikiDannykhDlyaRaschetovByudzhetirovaniyas/{Codes}")]
	public class IstochnikiDannykhDlyaRaschetovByudzhetirovaniyasRequest/*»сточникиƒанныхƒл€–асчетовЅюджетировани€«апрос*/: IReturn<List<IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public IstochnikiDannykhDlyaRaschetovByudzhetirovaniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class IstochnikiDannykhDlyaRaschetovByudzhetirovaniyasResponse//»сточникиƒанныхƒл€–асчетовЅюджетировани€ќтвет
	{
		public string Result {get;set;}
	}


	public class IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaService /*»сточникиƒанныхƒл€–асчетовЅюджетировани€—ервис*/ : Service
	{
		public object Any(IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaRequest request)
		{
			return new IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.»сточникиƒанныхƒл€–асчетовЅюджетировани€.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaResponse() {Result = "»сточникиƒанныхƒл€–асчетовЅюджетировани€ c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.»сточникиƒанныхƒл€–асчетовЅюджетировани€.Ќайтиѕо оду(1);
			}
		}

		public object Get(IstochnikiDannykhDlyaRaschetovByudzhetirovaniyasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.»сточникиƒанныхƒл€–асчетовЅюджетировани€>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.»сточникиƒанныхƒл€–асчетовЅюджетировани€.Ќайтиѕо оду(—трока од);
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
