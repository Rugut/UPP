
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SostoyaniyaZayavokKandidatov")]
	[Route("/Catalogs/SostoyaniyaZayavokKandidatov/{Code}")]
	public class SostoyaniyaZayavokKandidatovRequest/*СостоянияЗаявокКандидатовЗапрос*/: V82.СправочникиСсылка.СостоянияЗаявокКандидатов,IReturn<SostoyaniyaZayavokKandidatovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SostoyaniyaZayavokKandidatovResponse//СостоянияЗаявокКандидатовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SostoyaniyaZayavokKandidatovs")]
	[Route("/Catalogs/SostoyaniyaZayavokKandidatovs/{Codes}")]
	public class SostoyaniyaZayavokKandidatovsRequest/*СостоянияЗаявокКандидатовЗапрос*/: IReturn<List<SostoyaniyaZayavokKandidatovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SostoyaniyaZayavokKandidatovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SostoyaniyaZayavokKandidatovsResponse//СостоянияЗаявокКандидатовОтвет
	{
		public string Result {get;set;}
	}


	public class SostoyaniyaZayavokKandidatovService /*СостоянияЗаявокКандидатовСервис*/ : Service
	{
		public object Any(SostoyaniyaZayavokKandidatovRequest request)
		{
			return new SostoyaniyaZayavokKandidatovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SostoyaniyaZayavokKandidatovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СостоянияЗаявокКандидатов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new SostoyaniyaZayavokKandidatovResponse() {Result = "СостоянияЗаявокКандидатов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СостоянияЗаявокКандидатов.НайтиПоКоду(1);
			}
		}

		public object Get(SostoyaniyaZayavokKandidatovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СостоянияЗаявокКандидатов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СостоянияЗаявокКандидатов.НайтиПоКоду(СтрокаКод);
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
