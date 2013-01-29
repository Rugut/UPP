
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/OformleniyaStrokPisem")]
	[Route("/Catalogs/OformleniyaStrokPisem/{Code}")]
	public class OformleniyaStrokPisemRequest/*ќформлени€—трокѕисем«апрос*/: V82.—правочники—сылка.ќформлени€—трокѕисем,IReturn<OformleniyaStrokPisemRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OformleniyaStrokPisemResponse//ќформлени€—трокѕисемќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OformleniyaStrokPisems")]
	[Route("/Catalogs/OformleniyaStrokPisems/{Codes}")]
	public class OformleniyaStrokPisemsRequest/*ќформлени€—трокѕисем«апрос*/: IReturn<List<OformleniyaStrokPisemRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OformleniyaStrokPisemsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OformleniyaStrokPisemsResponse//ќформлени€—трокѕисемќтвет
	{
		public string Result {get;set;}
	}


	public class OformleniyaStrokPisemService /*ќформлени€—трокѕисем—ервис*/ : Service
	{
		public object Any(OformleniyaStrokPisemRequest request)
		{
			return new OformleniyaStrokPisemResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OformleniyaStrokPisemRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.ќформлени€—трокѕисем.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new OformleniyaStrokPisemResponse() {Result = "ќформлени€—трокѕисем c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.ќформлени€—трокѕисем.Ќайтиѕо оду(1);
			}
		}

		public object Get(OformleniyaStrokPisemsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.ќформлени€—трокѕисем>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.ќформлени€—трокѕисем.Ќайтиѕо оду(—трока од);
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
