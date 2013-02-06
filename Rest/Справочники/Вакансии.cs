
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Vakansii")]
	[Route("/Catalogs/Vakansii/{Code}")]
	public class VakansiiRequest/*ВакансииЗапрос*/: V82.СправочникиСсылка.Вакансии,IReturn<VakansiiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VakansiiResponse//ВакансииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Vakansiis")]
	[Route("/Catalogs/Vakansiis/{Codes}")]
	public class VakansiisRequest/*ВакансииЗапрос*/: IReturn<List<VakansiiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VakansiisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VakansiisResponse//ВакансииОтвет
	{
		public string Result {get;set;}
	}


	public class VakansiiService /*ВакансииСервис*/ : Service
	{
		public object Any(VakansiiRequest request)
		{
			return new VakansiiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VakansiiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.Вакансии.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VakansiiResponse() {Result = "Вакансии c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VakansiisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Вакансии>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.Вакансии.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
