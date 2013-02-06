
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/PoryadokPrisvoeniyaSerijjnykhNomerov")]
	[Route("/Catalogs/PoryadokPrisvoeniyaSerijjnykhNomerov/{Code}")]
	public class PoryadokPrisvoeniyaSerijjnykhNomerovRequest/*ПорядокПрисвоенияСерийныхНомеровЗапрос*/: V82.СправочникиСсылка.ПорядокПрисвоенияСерийныхНомеров,IReturn<PoryadokPrisvoeniyaSerijjnykhNomerovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PoryadokPrisvoeniyaSerijjnykhNomerovResponse//ПорядокПрисвоенияСерийныхНомеровОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/PoryadokPrisvoeniyaSerijjnykhNomerovs")]
	[Route("/Catalogs/PoryadokPrisvoeniyaSerijjnykhNomerovs/{Codes}")]
	public class PoryadokPrisvoeniyaSerijjnykhNomerovsRequest/*ПорядокПрисвоенияСерийныхНомеровЗапрос*/: IReturn<List<PoryadokPrisvoeniyaSerijjnykhNomerovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PoryadokPrisvoeniyaSerijjnykhNomerovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PoryadokPrisvoeniyaSerijjnykhNomerovsResponse//ПорядокПрисвоенияСерийныхНомеровОтвет
	{
		public string Result {get;set;}
	}


	public class PoryadokPrisvoeniyaSerijjnykhNomerovService /*ПорядокПрисвоенияСерийныхНомеровСервис*/ : Service
	{
		public object Any(PoryadokPrisvoeniyaSerijjnykhNomerovRequest request)
		{
			return new PoryadokPrisvoeniyaSerijjnykhNomerovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PoryadokPrisvoeniyaSerijjnykhNomerovRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ПорядокПрисвоенияСерийныхНомеров.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new PoryadokPrisvoeniyaSerijjnykhNomerovResponse() {Result = "ПорядокПрисвоенияСерийныхНомеров c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(PoryadokPrisvoeniyaSerijjnykhNomerovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПорядокПрисвоенияСерийныхНомеров>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ПорядокПрисвоенияСерийныхНомеров.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
