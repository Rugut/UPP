
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SchetchikDlyaFormirovaniyaSerijjnykhNomerov")]
	[Route("/Catalogs/SchetchikDlyaFormirovaniyaSerijjnykhNomerov/{Code}")]
	public class SchetchikDlyaFormirovaniyaSerijjnykhNomerovRequest/*СчетчикДляФормированияСерийныхНомеровЗапрос*/: V82.СправочникиСсылка.СчетчикДляФормированияСерийныхНомеров,IReturn<SchetchikDlyaFormirovaniyaSerijjnykhNomerovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SchetchikDlyaFormirovaniyaSerijjnykhNomerovResponse//СчетчикДляФормированияСерийныхНомеровОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SchetchikDlyaFormirovaniyaSerijjnykhNomerovs")]
	[Route("/Catalogs/SchetchikDlyaFormirovaniyaSerijjnykhNomerovs/{Codes}")]
	public class SchetchikDlyaFormirovaniyaSerijjnykhNomerovsRequest/*СчетчикДляФормированияСерийныхНомеровЗапрос*/: IReturn<List<SchetchikDlyaFormirovaniyaSerijjnykhNomerovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SchetchikDlyaFormirovaniyaSerijjnykhNomerovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SchetchikDlyaFormirovaniyaSerijjnykhNomerovsResponse//СчетчикДляФормированияСерийныхНомеровОтвет
	{
		public string Result {get;set;}
	}


	public class SchetchikDlyaFormirovaniyaSerijjnykhNomerovService /*СчетчикДляФормированияСерийныхНомеровСервис*/ : Service
	{
		public object Any(SchetchikDlyaFormirovaniyaSerijjnykhNomerovRequest request)
		{
			return new SchetchikDlyaFormirovaniyaSerijjnykhNomerovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SchetchikDlyaFormirovaniyaSerijjnykhNomerovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СчетчикДляФормированияСерийныхНомеров.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new SchetchikDlyaFormirovaniyaSerijjnykhNomerovResponse() {Result = "СчетчикДляФормированияСерийныхНомеров c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СчетчикДляФормированияСерийныхНомеров.НайтиПоКоду(1);
			}
		}

		public object Get(SchetchikDlyaFormirovaniyaSerijjnykhNomerovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СчетчикДляФормированияСерийныхНомеров>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СчетчикДляФормированияСерийныхНомеров.НайтиПоКоду(СтрокаКод);
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
