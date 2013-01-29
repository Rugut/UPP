
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/ZnacheniyaSvojjstvObektov")]
	[Route("/Catalogs/ZnacheniyaSvojjstvObektov/{Code}")]
	public class ZnacheniyaSvojjstvObektovRequest/*«начени€—войствќбъектов«апрос*/: V82.—правочники—сылка.«начени€—войствќбъектов,IReturn<ZnacheniyaSvojjstvObektovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ZnacheniyaSvojjstvObektovResponse//«начени€—войствќбъектовќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ZnacheniyaSvojjstvObektovs")]
	[Route("/Catalogs/ZnacheniyaSvojjstvObektovs/{Codes}")]
	public class ZnacheniyaSvojjstvObektovsRequest/*«начени€—войствќбъектов«апрос*/: IReturn<List<ZnacheniyaSvojjstvObektovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ZnacheniyaSvojjstvObektovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ZnacheniyaSvojjstvObektovsResponse//«начени€—войствќбъектовќтвет
	{
		public string Result {get;set;}
	}


	public class ZnacheniyaSvojjstvObektovService /*«начени€—войствќбъектов—ервис*/ : Service
	{
		public object Any(ZnacheniyaSvojjstvObektovRequest request)
		{
			return new ZnacheniyaSvojjstvObektovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ZnacheniyaSvojjstvObektovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.«начени€—войствќбъектов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new ZnacheniyaSvojjstvObektovResponse() {Result = "«начени€—войствќбъектов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.«начени€—войствќбъектов.Ќайтиѕо оду(1);
			}
		}

		public object Get(ZnacheniyaSvojjstvObektovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.«начени€—войствќбъектов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.«начени€—войствќбъектов.Ќайтиѕо оду(—трока од);
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
