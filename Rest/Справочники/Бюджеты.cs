
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Byudzhety")]
	[Route("/Catalogs/Byudzhety/FindById/{Id}")]
	[Route("/Catalogs/Byudzhety/FindByCode/{Code}")]
	[Route("/Catalogs/Byudzhety/FindByDescr/{Descr}")]
	public class ByudzhetyRequest/*БюджетыЗапрос*/: V82.СправочникиСсылка.Бюджеты,IReturn<ByudzhetyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ByudzhetyResponse//БюджетыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Byudzhetys")]
	[Route("/Catalogs/Byudzhetys/{Codes}")]
	public class ByudzhetysRequest/*БюджетыЗапрос*/: IReturn<List<ByudzhetyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ByudzhetysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ByudzhetysResponse//БюджетыОтвет
	{
		public string Result {get;set;}
	}


	public class ByudzhetyService /*БюджетыСервис*/ : Service
	{
		public object Any(ByudzhetyRequest request)
		{
			return new ByudzhetyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ByudzhetyRequest request)
		{
			return null;
		}

		public object Get(ByudzhetysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Бюджеты>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}