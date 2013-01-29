
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GruppyZayavokKandidatov")]
	[Route("/Catalogs/GruppyZayavokKandidatov/{Code}")]
	public class GruppyZayavokKandidatovRequest/*ГруппыЗаявокКандидатовЗапрос*/: V82.СправочникиСсылка.ГруппыЗаявокКандидатов,IReturn<GruppyZayavokKandidatovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppyZayavokKandidatovResponse//ГруппыЗаявокКандидатовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppyZayavokKandidatovs")]
	[Route("/Catalogs/GruppyZayavokKandidatovs/{Codes}")]
	public class GruppyZayavokKandidatovsRequest/*ГруппыЗаявокКандидатовЗапрос*/: IReturn<List<GruppyZayavokKandidatovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppyZayavokKandidatovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppyZayavokKandidatovsResponse//ГруппыЗаявокКандидатовОтвет
	{
		public string Result {get;set;}
	}


	public class GruppyZayavokKandidatovService /*ГруппыЗаявокКандидатовСервис*/ : Service
	{
		public object Any(GruppyZayavokKandidatovRequest request)
		{
			return new GruppyZayavokKandidatovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppyZayavokKandidatovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ГруппыЗаявокКандидатов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new GruppyZayavokKandidatovResponse() {Result = "ГруппыЗаявокКандидатов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ГруппыЗаявокКандидатов.НайтиПоКоду(1);
			}
		}

		public object Get(GruppyZayavokKandidatovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГруппыЗаявокКандидатов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ГруппыЗаявокКандидатов.НайтиПоКоду(СтрокаКод);
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
