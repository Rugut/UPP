
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OsnovnoeSyre")]
	[Route("/Catalogs/OsnovnoeSyre/{Code}")]
	public class OsnovnoeSyreRequest/*ОсновноеСырьеЗапрос*/: V82.СправочникиСсылка.ОсновноеСырье,IReturn<OsnovnoeSyreRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsnovnoeSyreResponse//ОсновноеСырьеОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsnovnoeSyres")]
	[Route("/Catalogs/OsnovnoeSyres/{Codes}")]
	public class OsnovnoeSyresRequest/*ОсновноеСырьеЗапрос*/: IReturn<List<OsnovnoeSyreRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsnovnoeSyresRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsnovnoeSyresResponse//ОсновноеСырьеОтвет
	{
		public string Result {get;set;}
	}


	public class OsnovnoeSyreService /*ОсновноеСырьеСервис*/ : Service
	{
		public object Any(OsnovnoeSyreRequest request)
		{
			return new OsnovnoeSyreResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsnovnoeSyreRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ОсновноеСырье.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new OsnovnoeSyreResponse() {Result = "ОсновноеСырье c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ОсновноеСырье.НайтиПоКоду(1);
			}
		}

		public object Get(OsnovnoeSyresRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОсновноеСырье>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ОсновноеСырье.НайтиПоКоду(СтрокаКод);
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
