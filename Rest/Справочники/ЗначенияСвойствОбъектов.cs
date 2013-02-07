
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ZnacheniyaSvojjstvObektov")]
	[Route("/Catalogs/ZnacheniyaSvojjstvObektov/FindById/{Id}")]
	[Route("/Catalogs/ZnacheniyaSvojjstvObektov/FindByCode/{Code}")]
	[Route("/Catalogs/ZnacheniyaSvojjstvObektov/FindByDescr/{Descr}")]
	public class ZnacheniyaSvojjstvObektovRequest/*ЗначенияСвойствОбъектовЗапрос*/: V82.СправочникиСсылка.ЗначенияСвойствОбъектов,IReturn<ZnacheniyaSvojjstvObektovRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ZnacheniyaSvojjstvObektovResponse//ЗначенияСвойствОбъектовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ZnacheniyaSvojjstvObektovs")]
	[Route("/Catalogs/ZnacheniyaSvojjstvObektovs/{Codes}")]
	public class ZnacheniyaSvojjstvObektovsRequest/*ЗначенияСвойствОбъектовЗапрос*/: IReturn<List<ZnacheniyaSvojjstvObektovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ZnacheniyaSvojjstvObektovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ZnacheniyaSvojjstvObektovsResponse//ЗначенияСвойствОбъектовОтвет
	{
		public string Result {get;set;}
	}


	public class ZnacheniyaSvojjstvObektovService /*ЗначенияСвойствОбъектовСервис*/ : Service
	{
		public object Any(ZnacheniyaSvojjstvObektovRequest request)
		{
			return new ZnacheniyaSvojjstvObektovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ZnacheniyaSvojjstvObektovRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ЗначенияСвойствОбъектов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ZnacheniyaSvojjstvObektovResponse() {Result = "ЗначенияСвойствОбъектов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(ZnacheniyaSvojjstvObektovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЗначенияСвойствОбъектов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ЗначенияСвойствОбъектов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}