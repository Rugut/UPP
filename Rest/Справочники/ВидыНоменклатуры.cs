
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyNomenklatury")]
	[Route("/Catalogs/VidyNomenklatury/FindById/{Id}")]
	[Route("/Catalogs/VidyNomenklatury/FindByCode/{Code}")]
	[Route("/Catalogs/VidyNomenklatury/FindByDescr/{Descr}")]
	public class VidyNomenklaturyRequest/*ВидыНоменклатурыЗапрос*/: V82.СправочникиСсылка.ВидыНоменклатуры,IReturn<VidyNomenklaturyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyNomenklaturyResponse//ВидыНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyNomenklaturys")]
	[Route("/Catalogs/VidyNomenklaturys/{Codes}")]
	public class VidyNomenklaturysRequest/*ВидыНоменклатурыЗапрос*/: IReturn<List<VidyNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyNomenklaturysResponse//ВидыНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class VidyNomenklaturyService /*ВидыНоменклатурыСервис*/ : Service
	{
		public object Any(VidyNomenklaturyRequest request)
		{
			return new VidyNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyNomenklaturyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ВидыНоменклатуры.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyNomenklaturyResponse() {Result = "ВидыНоменклатуры c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ВидыНоменклатуры.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}