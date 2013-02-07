
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyFinRezervov")]
	[Route("/Catalogs/VidyFinRezervov/FindById/{Id}")]
	[Route("/Catalogs/VidyFinRezervov/FindByCode/{Code}")]
	[Route("/Catalogs/VidyFinRezervov/FindByDescr/{Descr}")]
	public class VidyFinRezervovRequest/*ВидыФинРезервовЗапрос*/: V82.СправочникиСсылка.ВидыФинРезервов,IReturn<VidyFinRezervovRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyFinRezervovResponse//ВидыФинРезервовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyFinRezervovs")]
	[Route("/Catalogs/VidyFinRezervovs/{Codes}")]
	public class VidyFinRezervovsRequest/*ВидыФинРезервовЗапрос*/: IReturn<List<VidyFinRezervovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyFinRezervovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyFinRezervovsResponse//ВидыФинРезервовОтвет
	{
		public string Result {get;set;}
	}


	public class VidyFinRezervovService /*ВидыФинРезервовСервис*/ : Service
	{
		public object Any(VidyFinRezervovRequest request)
		{
			return new VidyFinRezervovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyFinRezervovRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ВидыФинРезервов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyFinRezervovResponse() {Result = "ВидыФинРезервов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyFinRezervovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыФинРезервов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ВидыФинРезервов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}