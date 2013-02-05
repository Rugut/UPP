
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyVzaimoraschetov")]
	[Route("/Catalogs/VidyVzaimoraschetov/{Code}")]
	public class VidyVzaimoraschetovRequest/*ВидыВзаиморасчетовЗапрос*/: V82.СправочникиСсылка.ВидыВзаиморасчетов,IReturn<VidyVzaimoraschetovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyVzaimoraschetovResponse//ВидыВзаиморасчетовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyVzaimoraschetovs")]
	[Route("/Catalogs/VidyVzaimoraschetovs/{Codes}")]
	public class VidyVzaimoraschetovsRequest/*ВидыВзаиморасчетовЗапрос*/: IReturn<List<VidyVzaimoraschetovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyVzaimoraschetovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyVzaimoraschetovsResponse//ВидыВзаиморасчетовОтвет
	{
		public string Result {get;set;}
	}


	public class VidyVzaimoraschetovService /*ВидыВзаиморасчетовСервис*/ : Service
	{
		public object Any(VidyVzaimoraschetovRequest request)
		{
			return new VidyVzaimoraschetovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyVzaimoraschetovRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ВидыВзаиморасчетов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyVzaimoraschetovResponse() {Result = "ВидыВзаиморасчетов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyVzaimoraschetovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыВзаиморасчетов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ВидыВзаиморасчетов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
