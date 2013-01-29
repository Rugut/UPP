
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/MedicinskieStrakhovyePolisy")]
	[Route("/Catalogs/MedicinskieStrakhovyePolisy/{Code}")]
	public class MedicinskieStrakhovyePolisyRequest/*МедицинскиеСтраховыеПолисыЗапрос*/: V82.СправочникиСсылка.МедицинскиеСтраховыеПолисы,IReturn<MedicinskieStrakhovyePolisyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class MedicinskieStrakhovyePolisyResponse//МедицинскиеСтраховыеПолисыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/MedicinskieStrakhovyePolisys")]
	[Route("/Catalogs/MedicinskieStrakhovyePolisys/{Codes}")]
	public class MedicinskieStrakhovyePolisysRequest/*МедицинскиеСтраховыеПолисыЗапрос*/: IReturn<List<MedicinskieStrakhovyePolisyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public MedicinskieStrakhovyePolisysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class MedicinskieStrakhovyePolisysResponse//МедицинскиеСтраховыеПолисыОтвет
	{
		public string Result {get;set;}
	}


	public class MedicinskieStrakhovyePolisyService /*МедицинскиеСтраховыеПолисыСервис*/ : Service
	{
		public object Any(MedicinskieStrakhovyePolisyRequest request)
		{
			return new MedicinskieStrakhovyePolisyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(MedicinskieStrakhovyePolisyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.МедицинскиеСтраховыеПолисы.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new MedicinskieStrakhovyePolisyResponse() {Result = "МедицинскиеСтраховыеПолисы c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.МедицинскиеСтраховыеПолисы.НайтиПоКоду(1);
			}
		}

		public object Get(MedicinskieStrakhovyePolisysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.МедицинскиеСтраховыеПолисы>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.МедицинскиеСтраховыеПолисы.НайтиПоКоду(СтрокаКод);
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
