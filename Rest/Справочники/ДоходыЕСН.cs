
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DokhodyESN")]
	[Route("/Catalogs/DokhodyESN/{Code}")]
	public class DokhodyESNRequest/*ДоходыЕСНЗапрос*/: V82.СправочникиСсылка.ДоходыЕСН,IReturn<DokhodyESNRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokhodyESNResponse//ДоходыЕСНОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokhodyESNs")]
	[Route("/Catalogs/DokhodyESNs/{Codes}")]
	public class DokhodyESNsRequest/*ДоходыЕСНЗапрос*/: IReturn<List<DokhodyESNRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokhodyESNsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokhodyESNsResponse//ДоходыЕСНОтвет
	{
		public string Result {get;set;}
	}


	public class DokhodyESNService /*ДоходыЕСНСервис*/ : Service
	{
		public object Any(DokhodyESNRequest request)
		{
			return new DokhodyESNResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokhodyESNRequest request)
		{
			return null;
		}

		public object Get(DokhodyESNsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДоходыЕСН>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}
