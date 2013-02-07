
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyZametok")]
	[Route("/Catalogs/VidyZametok/FindById/{Id}")]
	[Route("/Catalogs/VidyZametok/FindByCode/{Code}")]
	[Route("/Catalogs/VidyZametok/FindByDescr/{Descr}")]
	public class VidyZametokRequest/*ВидыЗаметокЗапрос*/: V82.СправочникиСсылка.ВидыЗаметок,IReturn<VidyZametokRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyZametokResponse//ВидыЗаметокОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyZametoks")]
	[Route("/Catalogs/VidyZametoks/{Codes}")]
	public class VidyZametoksRequest/*ВидыЗаметокЗапрос*/: IReturn<List<VidyZametokRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyZametoksRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyZametoksResponse//ВидыЗаметокОтвет
	{
		public string Result {get;set;}
	}


	public class VidyZametokService /*ВидыЗаметокСервис*/ : Service
	{
		public object Any(VidyZametokRequest request)
		{
			return new VidyZametokResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyZametokRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				return new VidyZametokResponse() {Result = "ВидыЗаметок c кодом '" + request.Code+"' не найдено."};
			}
			var Ссылка = V82.Справочники.ВидыЗаметок.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyZametokResponse() {Result = "ВидыЗаметок c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyZametoksRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыЗаметок>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
				continue;//ToDo: Регестрация ошибки.
				}
				var Ссылка = V82.Справочники.ВидыЗаметок.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}