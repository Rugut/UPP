
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VneshnieObrabotki")]
	[Route("/Catalogs/VneshnieObrabotki/{Code}")]
	public class VneshnieObrabotkiRequest/*ВнешниеОбработкиЗапрос*/: V82.СправочникиСсылка.ВнешниеОбработки,IReturn<VneshnieObrabotkiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VneshnieObrabotkiResponse//ВнешниеОбработкиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VneshnieObrabotkis")]
	[Route("/Catalogs/VneshnieObrabotkis/{Codes}")]
	public class VneshnieObrabotkisRequest/*ВнешниеОбработкиЗапрос*/: IReturn<List<VneshnieObrabotkiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VneshnieObrabotkisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VneshnieObrabotkisResponse//ВнешниеОбработкиОтвет
	{
		public string Result {get;set;}
	}


	public class VneshnieObrabotkiService /*ВнешниеОбработкиСервис*/ : Service
	{
		public object Any(VneshnieObrabotkiRequest request)
		{
			return new VneshnieObrabotkiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VneshnieObrabotkiRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ВнешниеОбработки.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VneshnieObrabotkiResponse() {Result = "ВнешниеОбработки c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VneshnieObrabotkisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВнешниеОбработки>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ВнешниеОбработки.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
