
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TipySkidokNacenok")]
	[Route("/Catalogs/TipySkidokNacenok/{Code}")]
	public class TipySkidokNacenokRequest/*ТипыСкидокНаценокЗапрос*/: V82.СправочникиСсылка.ТипыСкидокНаценок,IReturn<TipySkidokNacenokRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TipySkidokNacenokResponse//ТипыСкидокНаценокОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TipySkidokNacenoks")]
	[Route("/Catalogs/TipySkidokNacenoks/{Codes}")]
	public class TipySkidokNacenoksRequest/*ТипыСкидокНаценокЗапрос*/: IReturn<List<TipySkidokNacenokRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TipySkidokNacenoksRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TipySkidokNacenoksResponse//ТипыСкидокНаценокОтвет
	{
		public string Result {get;set;}
	}


	public class TipySkidokNacenokService /*ТипыСкидокНаценокСервис*/ : Service
	{
		public object Any(TipySkidokNacenokRequest request)
		{
			return new TipySkidokNacenokResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TipySkidokNacenokRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ТипыСкидокНаценок.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TipySkidokNacenokResponse() {Result = "ТипыСкидокНаценок c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TipySkidokNacenoksRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТипыСкидокНаценок>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ТипыСкидокНаценок.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
