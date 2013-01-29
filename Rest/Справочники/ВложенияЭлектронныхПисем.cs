
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/VlozheniyaEHlektronnykhPisem")]
	[Route("/Catalogs/VlozheniyaEHlektronnykhPisem/{Code}")]
	public class VlozheniyaEHlektronnykhPisemRequest/*¬ложени€Ёлектронныхѕисем«апрос*/: V82.—правочники—сылка.¬ложени€Ёлектронныхѕисем,IReturn<VlozheniyaEHlektronnykhPisemRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VlozheniyaEHlektronnykhPisemResponse//¬ложени€Ёлектронныхѕисемќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VlozheniyaEHlektronnykhPisems")]
	[Route("/Catalogs/VlozheniyaEHlektronnykhPisems/{Codes}")]
	public class VlozheniyaEHlektronnykhPisemsRequest/*¬ложени€Ёлектронныхѕисем«апрос*/: IReturn<List<VlozheniyaEHlektronnykhPisemRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VlozheniyaEHlektronnykhPisemsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VlozheniyaEHlektronnykhPisemsResponse//¬ложени€Ёлектронныхѕисемќтвет
	{
		public string Result {get;set;}
	}


	public class VlozheniyaEHlektronnykhPisemService /*¬ложени€Ёлектронныхѕисем—ервис*/ : Service
	{
		public object Any(VlozheniyaEHlektronnykhPisemRequest request)
		{
			return new VlozheniyaEHlektronnykhPisemResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VlozheniyaEHlektronnykhPisemRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.¬ложени€Ёлектронныхѕисем.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new VlozheniyaEHlektronnykhPisemResponse() {Result = "¬ложени€Ёлектронныхѕисем c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.¬ложени€Ёлектронныхѕисем.Ќайтиѕо оду(1);
			}
		}

		public object Get(VlozheniyaEHlektronnykhPisemsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.¬ложени€Ёлектронныхѕисем>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.¬ложени€Ёлектронныхѕисем.Ќайтиѕо оду(—трока од);
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
