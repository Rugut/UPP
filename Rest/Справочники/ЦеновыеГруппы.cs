
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/CenovyeGruppy")]
	[Route("/Catalogs/CenovyeGruppy/FindById/{Id}")]
	[Route("/Catalogs/CenovyeGruppy/FindByCode/{Code}")]
	[Route("/Catalogs/CenovyeGruppy/FindByDescr/{Descr}")]
	public class CenovyeGruppyRequest/*ЦеновыеГруппыЗапрос*/: V82.СправочникиСсылка.ЦеновыеГруппы,IReturn<CenovyeGruppyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class CenovyeGruppyResponse//ЦеновыеГруппыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/CenovyeGruppys")]
	[Route("/Catalogs/CenovyeGruppys/{Codes}")]
	public class CenovyeGruppysRequest/*ЦеновыеГруппыЗапрос*/: IReturn<List<CenovyeGruppyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public CenovyeGruppysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class CenovyeGruppysResponse//ЦеновыеГруппыОтвет
	{
		public string Result {get;set;}
	}


	public class CenovyeGruppyService /*ЦеновыеГруппыСервис*/ : Service
	{
		public object Any(CenovyeGruppyRequest request)
		{
			return new CenovyeGruppyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(CenovyeGruppyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ЦеновыеГруппы.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new CenovyeGruppyResponse() {Result = "ЦеновыеГруппы c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(CenovyeGruppysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЦеновыеГруппы>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ЦеновыеГруппы.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}