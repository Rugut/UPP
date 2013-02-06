
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GruppyZamenyaemostiRabochikhCentrov")]
	[Route("/Catalogs/GruppyZamenyaemostiRabochikhCentrov/{Code}")]
	public class GruppyZamenyaemostiRabochikhCentrovRequest/*ГруппыЗаменяемостиРабочихЦентровЗапрос*/: V82.СправочникиСсылка.ГруппыЗаменяемостиРабочихЦентров,IReturn<GruppyZamenyaemostiRabochikhCentrovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppyZamenyaemostiRabochikhCentrovResponse//ГруппыЗаменяемостиРабочихЦентровОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppyZamenyaemostiRabochikhCentrovs")]
	[Route("/Catalogs/GruppyZamenyaemostiRabochikhCentrovs/{Codes}")]
	public class GruppyZamenyaemostiRabochikhCentrovsRequest/*ГруппыЗаменяемостиРабочихЦентровЗапрос*/: IReturn<List<GruppyZamenyaemostiRabochikhCentrovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppyZamenyaemostiRabochikhCentrovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppyZamenyaemostiRabochikhCentrovsResponse//ГруппыЗаменяемостиРабочихЦентровОтвет
	{
		public string Result {get;set;}
	}


	public class GruppyZamenyaemostiRabochikhCentrovService /*ГруппыЗаменяемостиРабочихЦентровСервис*/ : Service
	{
		public object Any(GruppyZamenyaemostiRabochikhCentrovRequest request)
		{
			return new GruppyZamenyaemostiRabochikhCentrovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppyZamenyaemostiRabochikhCentrovRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ГруппыЗаменяемостиРабочихЦентров.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new GruppyZamenyaemostiRabochikhCentrovResponse() {Result = "ГруппыЗаменяемостиРабочихЦентров c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(GruppyZamenyaemostiRabochikhCentrovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГруппыЗаменяемостиРабочихЦентров>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ГруппыЗаменяемостиРабочихЦентров.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
