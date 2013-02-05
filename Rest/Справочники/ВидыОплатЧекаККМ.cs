
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyOplatCHekaKKM")]
	[Route("/Catalogs/VidyOplatCHekaKKM/{Code}")]
	public class VidyOplatCHekaKKMRequest/*ВидыОплатЧекаККМЗапрос*/: V82.СправочникиСсылка.ВидыОплатЧекаККМ,IReturn<VidyOplatCHekaKKMRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyOplatCHekaKKMResponse//ВидыОплатЧекаККМОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyOplatCHekaKKMs")]
	[Route("/Catalogs/VidyOplatCHekaKKMs/{Codes}")]
	public class VidyOplatCHekaKKMsRequest/*ВидыОплатЧекаККМЗапрос*/: IReturn<List<VidyOplatCHekaKKMRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyOplatCHekaKKMsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyOplatCHekaKKMsResponse//ВидыОплатЧекаККМОтвет
	{
		public string Result {get;set;}
	}


	public class VidyOplatCHekaKKMService /*ВидыОплатЧекаККМСервис*/ : Service
	{
		public object Any(VidyOplatCHekaKKMRequest request)
		{
			return new VidyOplatCHekaKKMResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyOplatCHekaKKMRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ВидыОплатЧекаККМ.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyOplatCHekaKKMResponse() {Result = "ВидыОплатЧекаККМ c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyOplatCHekaKKMsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыОплатЧекаККМ>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ВидыОплатЧекаККМ.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
