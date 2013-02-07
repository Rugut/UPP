
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondov")]
	[Route("/Catalogs/EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondov/FindById/{Id}")]
	[Route("/Catalogs/EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondov/FindByCode/{Code}")]
	[Route("/Catalogs/EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondov/FindByDescr/{Descr}")]
	public class EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovRequest/*ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондовЗапрос*/: V82.СправочникиСсылка.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов,IReturn<EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovResponse//ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovs")]
	[Route("/Catalogs/EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovs/{Codes}")]
	public class EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovsRequest/*ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондовЗапрос*/: IReturn<List<EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovsResponse//ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондовОтвет
	{
		public string Result {get;set;}
	}


	public class EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovService /*ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондовСервис*/ : Service
	{
		public object Any(EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovRequest request)
		{
			return new EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				return new EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovResponse() {Result = "ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов c кодом '" + request.Code+"' не найдено."};
			}
			var Ссылка = V82.Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovResponse() {Result = "ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(EdinyeNormyAmortizacionnykhOtchislenijjOsnovnykhFondovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
				continue;//ToDo: Регестрация ошибки.
				}
				var Ссылка = V82.Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}