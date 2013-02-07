
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/MestaKHraneniya")]
	[Route("/Catalogs/MestaKHraneniya/FindById/{Id}")]
	[Route("/Catalogs/MestaKHraneniya/FindByCode/{Code}")]
	[Route("/Catalogs/MestaKHraneniya/FindByDescr/{Descr}")]
	public class MestaKHraneniyaRequest/*МестаХраненияЗапрос*/: V82.СправочникиСсылка.МестаХранения,IReturn<MestaKHraneniyaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class MestaKHraneniyaResponse//МестаХраненияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/MestaKHraneniyas")]
	[Route("/Catalogs/MestaKHraneniyas/{Codes}")]
	public class MestaKHraneniyasRequest/*МестаХраненияЗапрос*/: IReturn<List<MestaKHraneniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public MestaKHraneniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class MestaKHraneniyasResponse//МестаХраненияОтвет
	{
		public string Result {get;set;}
	}


	public class MestaKHraneniyaService /*МестаХраненияСервис*/ : Service
	{
		public object Any(MestaKHraneniyaRequest request)
		{
			return new MestaKHraneniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(MestaKHraneniyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.МестаХранения.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new MestaKHraneniyaResponse() {Result = "МестаХранения c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(MestaKHraneniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.МестаХранения>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.МестаХранения.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}