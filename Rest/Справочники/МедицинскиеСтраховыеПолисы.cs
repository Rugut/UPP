
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/MedicinskieStrakhovyePolisy")]
	[Route("/Catalogs/MedicinskieStrakhovyePolisy/FindById/{Id}")]
	[Route("/Catalogs/MedicinskieStrakhovyePolisy/FindByCode/{Code}")]
	[Route("/Catalogs/MedicinskieStrakhovyePolisy/FindByDescr/{Descr}")]
	public class MedicinskieStrakhovyePolisyRequest/*МедицинскиеСтраховыеПолисыЗапрос*/: V82.СправочникиСсылка.МедицинскиеСтраховыеПолисы,IReturn<MedicinskieStrakhovyePolisyRequest>
	{
		public string Id { get; set; }
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
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.МедицинскиеСтраховыеПолисы.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new MedicinskieStrakhovyePolisyResponse() {Result = "МедицинскиеСтраховыеПолисы c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(MedicinskieStrakhovyePolisysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.МедицинскиеСтраховыеПолисы>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.МедицинскиеСтраховыеПолисы.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}