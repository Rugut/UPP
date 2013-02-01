
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/CenovyeGruppy")]
	[Route("/Catalogs/CenovyeGruppy/{Code}")]
	public class CenovyeGruppyRequest/*ЦеновыеГруппыЗапрос*/: V82.СправочникиСсылка.ЦеновыеГруппы,IReturn<CenovyeGruppyRequest>
	{
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
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ЦеновыеГруппы.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new CenovyeGruppyResponse() {Result = "ЦеновыеГруппы c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ЦеновыеГруппы.НайтиПоКоду(1);
			}
		}

		public object Get(CenovyeGruppysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЦеновыеГруппы>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ЦеновыеГруппы.НайтиПоКоду(СтрокаКод);
					if (Ссылка != null)
					{
						Коллекция.Add(Ссылка);
					}
				}
			}
			return Коллекция;
		}

	}
}
