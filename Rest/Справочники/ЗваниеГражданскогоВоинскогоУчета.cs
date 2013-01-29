
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/ZvanieGrazhdanskogoVoinskogoUcheta")]
	[Route("/Catalogs/ZvanieGrazhdanskogoVoinskogoUcheta/{Code}")]
	public class ZvanieGrazhdanskogoVoinskogoUchetaRequest/*«вание√ражданского¬оинского”чета«апрос*/: V82.—правочники—сылка.«вание√ражданского¬оинского”чета,IReturn<ZvanieGrazhdanskogoVoinskogoUchetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ZvanieGrazhdanskogoVoinskogoUchetaResponse//«вание√ражданского¬оинского”четаќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ZvanieGrazhdanskogoVoinskogoUchetas")]
	[Route("/Catalogs/ZvanieGrazhdanskogoVoinskogoUchetas/{Codes}")]
	public class ZvanieGrazhdanskogoVoinskogoUchetasRequest/*«вание√ражданского¬оинского”чета«апрос*/: IReturn<List<ZvanieGrazhdanskogoVoinskogoUchetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ZvanieGrazhdanskogoVoinskogoUchetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ZvanieGrazhdanskogoVoinskogoUchetasResponse//«вание√ражданского¬оинского”четаќтвет
	{
		public string Result {get;set;}
	}


	public class ZvanieGrazhdanskogoVoinskogoUchetaService /*«вание√ражданского¬оинского”чета—ервис*/ : Service
	{
		public object Any(ZvanieGrazhdanskogoVoinskogoUchetaRequest request)
		{
			return new ZvanieGrazhdanskogoVoinskogoUchetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ZvanieGrazhdanskogoVoinskogoUchetaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.«вание√ражданского¬оинского”чета.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new ZvanieGrazhdanskogoVoinskogoUchetaResponse() {Result = "«вание√ражданского¬оинского”чета c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.«вание√ражданского¬оинского”чета.Ќайтиѕо оду(1);
			}
		}

		public object Get(ZvanieGrazhdanskogoVoinskogoUchetasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.«вание√ражданского¬оинского”чета>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.«вание√ражданского¬оинского”чета.Ќайтиѕо оду(—трока од);
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
