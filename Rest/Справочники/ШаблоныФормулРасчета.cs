
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/SHablonyFormulRascheta")]
	[Route("/Catalogs/SHablonyFormulRascheta/{Code}")]
	public class SHablonyFormulRaschetaRequest/*Ўаблоны‘ормул–асчета«апрос*/: V82.—правочники—сылка.Ўаблоны‘ормул–асчета,IReturn<SHablonyFormulRaschetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SHablonyFormulRaschetaResponse//Ўаблоны‘ормул–асчетаќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SHablonyFormulRaschetas")]
	[Route("/Catalogs/SHablonyFormulRaschetas/{Codes}")]
	public class SHablonyFormulRaschetasRequest/*Ўаблоны‘ормул–асчета«апрос*/: IReturn<List<SHablonyFormulRaschetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SHablonyFormulRaschetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SHablonyFormulRaschetasResponse//Ўаблоны‘ормул–асчетаќтвет
	{
		public string Result {get;set;}
	}


	public class SHablonyFormulRaschetaService /*Ўаблоны‘ормул–асчета—ервис*/ : Service
	{
		public object Any(SHablonyFormulRaschetaRequest request)
		{
			return new SHablonyFormulRaschetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SHablonyFormulRaschetaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.Ўаблоны‘ормул–асчета.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new SHablonyFormulRaschetaResponse() {Result = "Ўаблоны‘ормул–асчета c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.Ўаблоны‘ормул–асчета.Ќайтиѕо оду(1);
			}
		}

		public object Get(SHablonyFormulRaschetasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.Ўаблоны‘ормул–асчета>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.Ўаблоны‘ормул–асчета.Ќайтиѕо оду(—трока од);
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
