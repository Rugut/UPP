
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OformleniyaStrokPisem")]
	[Route("/Catalogs/OformleniyaStrokPisem/{Code}")]
	public class OformleniyaStrokPisemRequest/*ОформленияСтрокПисемЗапрос*/: V82.СправочникиСсылка.ОформленияСтрокПисем,IReturn<OformleniyaStrokPisemRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OformleniyaStrokPisemResponse//ОформленияСтрокПисемОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OformleniyaStrokPisems")]
	[Route("/Catalogs/OformleniyaStrokPisems/{Codes}")]
	public class OformleniyaStrokPisemsRequest/*ОформленияСтрокПисемЗапрос*/: IReturn<List<OformleniyaStrokPisemRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OformleniyaStrokPisemsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OformleniyaStrokPisemsResponse//ОформленияСтрокПисемОтвет
	{
		public string Result {get;set;}
	}


	public class OformleniyaStrokPisemService /*ОформленияСтрокПисемСервис*/ : Service
	{
		public object Any(OformleniyaStrokPisemRequest request)
		{
			return new OformleniyaStrokPisemResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OformleniyaStrokPisemRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ОформленияСтрокПисем.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new OformleniyaStrokPisemResponse() {Result = "ОформленияСтрокПисем c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(OformleniyaStrokPisemsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОформленияСтрокПисем>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ОформленияСтрокПисем.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
