
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ProgrammyMedicinskogoStrakhovaniya")]
	[Route("/Catalogs/ProgrammyMedicinskogoStrakhovaniya/{Code}")]
	public class ProgrammyMedicinskogoStrakhovaniyaRequest/*ПрограммыМедицинскогоСтрахованияЗапрос*/: V82.СправочникиСсылка.ПрограммыМедицинскогоСтрахования,IReturn<ProgrammyMedicinskogoStrakhovaniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ProgrammyMedicinskogoStrakhovaniyaResponse//ПрограммыМедицинскогоСтрахованияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ProgrammyMedicinskogoStrakhovaniyas")]
	[Route("/Catalogs/ProgrammyMedicinskogoStrakhovaniyas/{Codes}")]
	public class ProgrammyMedicinskogoStrakhovaniyasRequest/*ПрограммыМедицинскогоСтрахованияЗапрос*/: IReturn<List<ProgrammyMedicinskogoStrakhovaniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ProgrammyMedicinskogoStrakhovaniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ProgrammyMedicinskogoStrakhovaniyasResponse//ПрограммыМедицинскогоСтрахованияОтвет
	{
		public string Result {get;set;}
	}


	public class ProgrammyMedicinskogoStrakhovaniyaService /*ПрограммыМедицинскогоСтрахованияСервис*/ : Service
	{
		public object Any(ProgrammyMedicinskogoStrakhovaniyaRequest request)
		{
			return new ProgrammyMedicinskogoStrakhovaniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ProgrammyMedicinskogoStrakhovaniyaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ПрограммыМедицинскогоСтрахования.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new ProgrammyMedicinskogoStrakhovaniyaResponse() {Result = "ПрограммыМедицинскогоСтрахования c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ПрограммыМедицинскогоСтрахования.НайтиПоКоду(1);
			}
		}

		public object Get(ProgrammyMedicinskogoStrakhovaniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПрограммыМедицинскогоСтрахования>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ПрограммыМедицинскогоСтрахования.НайтиПоКоду(СтрокаКод);
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
