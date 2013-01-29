
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VychetyNDFL")]
	[Route("/Catalogs/VychetyNDFL/{Code}")]
	public class VychetyNDFLRequest/*ВычетыНДФЛЗапрос*/: V82.СправочникиСсылка.ВычетыНДФЛ,IReturn<VychetyNDFLRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VychetyNDFLResponse//ВычетыНДФЛОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VychetyNDFLs")]
	[Route("/Catalogs/VychetyNDFLs/{Codes}")]
	public class VychetyNDFLsRequest/*ВычетыНДФЛЗапрос*/: IReturn<List<VychetyNDFLRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VychetyNDFLsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VychetyNDFLsResponse//ВычетыНДФЛОтвет
	{
		public string Result {get;set;}
	}


	public class VychetyNDFLService /*ВычетыНДФЛСервис*/ : Service
	{
		public object Any(VychetyNDFLRequest request)
		{
			return new VychetyNDFLResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VychetyNDFLRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВычетыНДФЛ.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VychetyNDFLResponse() {Result = "ВычетыНДФЛ c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВычетыНДФЛ.НайтиПоКоду(1);
			}
		}

		public object Get(VychetyNDFLsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВычетыНДФЛ>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВычетыНДФЛ.НайтиПоКоду(СтрокаКод);
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
