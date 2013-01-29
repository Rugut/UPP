
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KlassifikatorOKOPF")]
	[Route("/Catalogs/KlassifikatorOKOPF/{Code}")]
	public class KlassifikatorOKOPFRequest/*КлассификаторОКОПФЗапрос*/: V82.СправочникиСсылка.КлассификаторОКОПФ,IReturn<KlassifikatorOKOPFRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KlassifikatorOKOPFResponse//КлассификаторОКОПФОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KlassifikatorOKOPFs")]
	[Route("/Catalogs/KlassifikatorOKOPFs/{Codes}")]
	public class KlassifikatorOKOPFsRequest/*КлассификаторОКОПФЗапрос*/: IReturn<List<KlassifikatorOKOPFRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KlassifikatorOKOPFsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KlassifikatorOKOPFsResponse//КлассификаторОКОПФОтвет
	{
		public string Result {get;set;}
	}


	public class KlassifikatorOKOPFService /*КлассификаторОКОПФСервис*/ : Service
	{
		public object Any(KlassifikatorOKOPFRequest request)
		{
			return new KlassifikatorOKOPFResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KlassifikatorOKOPFRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КлассификаторОКОПФ.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KlassifikatorOKOPFResponse() {Result = "КлассификаторОКОПФ c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КлассификаторОКОПФ.НайтиПоКоду(1);
			}
		}

		public object Get(KlassifikatorOKOPFsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КлассификаторОКОПФ>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КлассификаторОКОПФ.НайтиПоКоду(СтрокаКод);
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
