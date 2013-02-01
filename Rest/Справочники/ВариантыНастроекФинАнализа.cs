
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VariantyNastroekFinAnaliza")]
	[Route("/Catalogs/VariantyNastroekFinAnaliza/{Code}")]
	public class VariantyNastroekFinAnalizaRequest/*ВариантыНастроекФинАнализаЗапрос*/: V82.СправочникиСсылка.ВариантыНастроекФинАнализа,IReturn<VariantyNastroekFinAnalizaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VariantyNastroekFinAnalizaResponse//ВариантыНастроекФинАнализаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VariantyNastroekFinAnalizas")]
	[Route("/Catalogs/VariantyNastroekFinAnalizas/{Codes}")]
	public class VariantyNastroekFinAnalizasRequest/*ВариантыНастроекФинАнализаЗапрос*/: IReturn<List<VariantyNastroekFinAnalizaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VariantyNastroekFinAnalizasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VariantyNastroekFinAnalizasResponse//ВариантыНастроекФинАнализаОтвет
	{
		public string Result {get;set;}
	}


	public class VariantyNastroekFinAnalizaService /*ВариантыНастроекФинАнализаСервис*/ : Service
	{
		public object Any(VariantyNastroekFinAnalizaRequest request)
		{
			return new VariantyNastroekFinAnalizaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VariantyNastroekFinAnalizaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВариантыНастроекФинАнализа.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VariantyNastroekFinAnalizaResponse() {Result = "ВариантыНастроекФинАнализа c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВариантыНастроекФинАнализа.НайтиПоКоду(1);
			}
		}

		public object Get(VariantyNastroekFinAnalizasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВариантыНастроекФинАнализа>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВариантыНастроекФинАнализа.НайтиПоКоду(СтрокаКод);
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
