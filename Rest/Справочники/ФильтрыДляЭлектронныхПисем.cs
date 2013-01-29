
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisem")]
	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisem/{Code}")]
	public class FiltryDlyaEHlektronnykhPisemRequest/*‘ильтрыƒл€Ёлектронныхѕисем«апрос*/: V82.—правочники—сылка.‘ильтрыƒл€Ёлектронныхѕисем,IReturn<FiltryDlyaEHlektronnykhPisemRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class FiltryDlyaEHlektronnykhPisemResponse//‘ильтрыƒл€Ёлектронныхѕисемќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisems")]
	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisems/{Codes}")]
	public class FiltryDlyaEHlektronnykhPisemsRequest/*‘ильтрыƒл€Ёлектронныхѕисем«апрос*/: IReturn<List<FiltryDlyaEHlektronnykhPisemRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public FiltryDlyaEHlektronnykhPisemsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class FiltryDlyaEHlektronnykhPisemsResponse//‘ильтрыƒл€Ёлектронныхѕисемќтвет
	{
		public string Result {get;set;}
	}


	public class FiltryDlyaEHlektronnykhPisemService /*‘ильтрыƒл€Ёлектронныхѕисем—ервис*/ : Service
	{
		public object Any(FiltryDlyaEHlektronnykhPisemRequest request)
		{
			return new FiltryDlyaEHlektronnykhPisemResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(FiltryDlyaEHlektronnykhPisemRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.‘ильтрыƒл€Ёлектронныхѕисем.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new FiltryDlyaEHlektronnykhPisemResponse() {Result = "‘ильтрыƒл€Ёлектронныхѕисем c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.‘ильтрыƒл€Ёлектронныхѕисем.Ќайтиѕо оду(1);
			}
		}

		public object Get(FiltryDlyaEHlektronnykhPisemsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.‘ильтрыƒл€Ёлектронныхѕисем>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.‘ильтрыƒл€Ёлектронныхѕисем.Ќайтиѕо оду(—трока од);
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
