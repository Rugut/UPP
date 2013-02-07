
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyAnalizovNomenklatury")]
	[Route("/Catalogs/VidyAnalizovNomenklatury/FindById/{Id}")]
	[Route("/Catalogs/VidyAnalizovNomenklatury/FindByCode/{Code}")]
	[Route("/Catalogs/VidyAnalizovNomenklatury/FindByDescr/{Descr}")]
	public class VidyAnalizovNomenklaturyRequest/*ВидыАнализовНоменклатурыЗапрос*/: V82.СправочникиСсылка.ВидыАнализовНоменклатуры,IReturn<VidyAnalizovNomenklaturyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyAnalizovNomenklaturyResponse//ВидыАнализовНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyAnalizovNomenklaturys")]
	[Route("/Catalogs/VidyAnalizovNomenklaturys/{Codes}")]
	public class VidyAnalizovNomenklaturysRequest/*ВидыАнализовНоменклатурыЗапрос*/: IReturn<List<VidyAnalizovNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyAnalizovNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyAnalizovNomenklaturysResponse//ВидыАнализовНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class VidyAnalizovNomenklaturyService /*ВидыАнализовНоменклатурыСервис*/ : Service
	{
		public object Any(VidyAnalizovNomenklaturyRequest request)
		{
			return new VidyAnalizovNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyAnalizovNomenklaturyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ВидыАнализовНоменклатуры.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyAnalizovNomenklaturyResponse() {Result = "ВидыАнализовНоменклатуры c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyAnalizovNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыАнализовНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ВидыАнализовНоменклатуры.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}