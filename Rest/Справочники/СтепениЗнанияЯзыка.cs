
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/StepeniZnaniyaYAzyka")]
	[Route("/Catalogs/StepeniZnaniyaYAzyka/{Code}")]
	public class StepeniZnaniyaYAzykaRequest/*—тепени«нани€языка«апрос*/: V82.—правочники—сылка.—тепени«нани€языка,IReturn<StepeniZnaniyaYAzykaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class StepeniZnaniyaYAzykaResponse//—тепени«нани€языкаќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/StepeniZnaniyaYAzykas")]
	[Route("/Catalogs/StepeniZnaniyaYAzykas/{Codes}")]
	public class StepeniZnaniyaYAzykasRequest/*—тепени«нани€языка«апрос*/: IReturn<List<StepeniZnaniyaYAzykaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public StepeniZnaniyaYAzykasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class StepeniZnaniyaYAzykasResponse//—тепени«нани€языкаќтвет
	{
		public string Result {get;set;}
	}


	public class StepeniZnaniyaYAzykaService /*—тепени«нани€языка—ервис*/ : Service
	{
		public object Any(StepeniZnaniyaYAzykaRequest request)
		{
			return new StepeniZnaniyaYAzykaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(StepeniZnaniyaYAzykaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.—тепени«нани€языка.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new StepeniZnaniyaYAzykaResponse() {Result = "—тепени«нани€языка c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.—тепени«нани€языка.Ќайтиѕо оду(1);
			}
		}

		public object Get(StepeniZnaniyaYAzykasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.—тепени«нани€языка>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.—тепени«нани€языка.Ќайтиѕо оду(—трока од);
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
