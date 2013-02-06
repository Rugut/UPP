
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyCFO")]
	[Route("/Catalogs/VidyCFO/{Code}")]
	public class VidyCFORequest/*ВидыЦФОЗапрос*/: V82.СправочникиСсылка.ВидыЦФО,IReturn<VidyCFORequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyCFOResponse//ВидыЦФООтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyCFOs")]
	[Route("/Catalogs/VidyCFOs/{Codes}")]
	public class VidyCFOsRequest/*ВидыЦФОЗапрос*/: IReturn<List<VidyCFORequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyCFOsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyCFOsResponse//ВидыЦФООтвет
	{
		public string Result {get;set;}
	}


	public class VidyCFOService /*ВидыЦФОСервис*/ : Service
	{
		public object Any(VidyCFORequest request)
		{
			return new VidyCFOResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyCFORequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ВидыЦФО.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyCFOResponse() {Result = "ВидыЦФО c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyCFOsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыЦФО>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ВидыЦФО.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
