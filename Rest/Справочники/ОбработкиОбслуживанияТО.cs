
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ObrabotkiObsluzhivaniyaTO")]
	[Route("/Catalogs/ObrabotkiObsluzhivaniyaTO/{Code}")]
	public class ObrabotkiObsluzhivaniyaTORequest/*ОбработкиОбслуживанияТОЗапрос*/: V82.СправочникиСсылка.ОбработкиОбслуживанияТО,IReturn<ObrabotkiObsluzhivaniyaTORequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ObrabotkiObsluzhivaniyaTOResponse//ОбработкиОбслуживанияТООтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ObrabotkiObsluzhivaniyaTOs")]
	[Route("/Catalogs/ObrabotkiObsluzhivaniyaTOs/{Codes}")]
	public class ObrabotkiObsluzhivaniyaTOsRequest/*ОбработкиОбслуживанияТОЗапрос*/: IReturn<List<ObrabotkiObsluzhivaniyaTORequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ObrabotkiObsluzhivaniyaTOsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ObrabotkiObsluzhivaniyaTOsResponse//ОбработкиОбслуживанияТООтвет
	{
		public string Result {get;set;}
	}


	public class ObrabotkiObsluzhivaniyaTOService /*ОбработкиОбслуживанияТОСервис*/ : Service
	{
		public object Any(ObrabotkiObsluzhivaniyaTORequest request)
		{
			return new ObrabotkiObsluzhivaniyaTOResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ObrabotkiObsluzhivaniyaTORequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ОбработкиОбслуживанияТО.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new ObrabotkiObsluzhivaniyaTOResponse() {Result = "ОбработкиОбслуживанияТО c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ОбработкиОбслуживанияТО.НайтиПоКоду(1);
			}
		}

		public object Get(ObrabotkiObsluzhivaniyaTOsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОбработкиОбслуживанияТО>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ОбработкиОбслуживанияТО.НайтиПоКоду(СтрокаКод);
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
