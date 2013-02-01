
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiZapolneniyaForm")]
	[Route("/Catalogs/NastrojjkiZapolneniyaForm/{Code}")]
	public class NastrojjkiZapolneniyaFormRequest/*НастройкиЗаполненияФормЗапрос*/: V82.СправочникиСсылка.НастройкиЗаполненияФорм,IReturn<NastrojjkiZapolneniyaFormRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiZapolneniyaFormResponse//НастройкиЗаполненияФормОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiZapolneniyaForms")]
	[Route("/Catalogs/NastrojjkiZapolneniyaForms/{Codes}")]
	public class NastrojjkiZapolneniyaFormsRequest/*НастройкиЗаполненияФормЗапрос*/: IReturn<List<NastrojjkiZapolneniyaFormRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiZapolneniyaFormsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiZapolneniyaFormsResponse//НастройкиЗаполненияФормОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiZapolneniyaFormService /*НастройкиЗаполненияФормСервис*/ : Service
	{
		public object Any(NastrojjkiZapolneniyaFormRequest request)
		{
			return new NastrojjkiZapolneniyaFormResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiZapolneniyaFormRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.НастройкиЗаполненияФорм.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NastrojjkiZapolneniyaFormResponse() {Result = "НастройкиЗаполненияФорм c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.НастройкиЗаполненияФорм.НайтиПоКоду(1);
			}
		}

		public object Get(NastrojjkiZapolneniyaFormsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиЗаполненияФорм>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.НастройкиЗаполненияФорм.НайтиПоКоду(СтрокаКод);
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
