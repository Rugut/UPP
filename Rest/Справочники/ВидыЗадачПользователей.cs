
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyZadachPolzovatelejj")]
	[Route("/Catalogs/VidyZadachPolzovatelejj/FindById/{Id}")]
	[Route("/Catalogs/VidyZadachPolzovatelejj/FindByCode/{Code}")]
	[Route("/Catalogs/VidyZadachPolzovatelejj/FindByDescr/{Descr}")]
	public class VidyZadachPolzovatelejjRequest/*ВидыЗадачПользователейЗапрос*/: V82.СправочникиСсылка.ВидыЗадачПользователей,IReturn<VidyZadachPolzovatelejjRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyZadachPolzovatelejjResponse//ВидыЗадачПользователейОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyZadachPolzovatelejjs")]
	[Route("/Catalogs/VidyZadachPolzovatelejjs/{Codes}")]
	public class VidyZadachPolzovatelejjsRequest/*ВидыЗадачПользователейЗапрос*/: IReturn<List<VidyZadachPolzovatelejjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyZadachPolzovatelejjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyZadachPolzovatelejjsResponse//ВидыЗадачПользователейОтвет
	{
		public string Result {get;set;}
	}


	public class VidyZadachPolzovatelejjService /*ВидыЗадачПользователейСервис*/ : Service
	{
		public object Any(VidyZadachPolzovatelejjRequest request)
		{
			return new VidyZadachPolzovatelejjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyZadachPolzovatelejjRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ВидыЗадачПользователей.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyZadachPolzovatelejjResponse() {Result = "ВидыЗадачПользователей c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyZadachPolzovatelejjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыЗадачПользователей>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ВидыЗадачПользователей.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}