
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SpecifikaciiNomenklatury")]
	[Route("/Catalogs/SpecifikaciiNomenklatury/{Code}")]
	public class SpecifikaciiNomenklaturyRequest/*СпецификацииНоменклатурыЗапрос*/: V82.СправочникиСсылка.СпецификацииНоменклатуры,IReturn<SpecifikaciiNomenklaturyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SpecifikaciiNomenklaturyResponse//СпецификацииНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SpecifikaciiNomenklaturys")]
	[Route("/Catalogs/SpecifikaciiNomenklaturys/{Codes}")]
	public class SpecifikaciiNomenklaturysRequest/*СпецификацииНоменклатурыЗапрос*/: IReturn<List<SpecifikaciiNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SpecifikaciiNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SpecifikaciiNomenklaturysResponse//СпецификацииНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class SpecifikaciiNomenklaturyService /*СпецификацииНоменклатурыСервис*/ : Service
	{
		public object Any(SpecifikaciiNomenklaturyRequest request)
		{
			return new SpecifikaciiNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SpecifikaciiNomenklaturyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СпецификацииНоменклатуры.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new SpecifikaciiNomenklaturyResponse() {Result = "СпецификацииНоменклатуры c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СпецификацииНоменклатуры.НайтиПоКоду(1);
			}
		}

		public object Get(SpecifikaciiNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СпецификацииНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СпецификацииНоменклатуры.НайтиПоКоду(СтрокаКод);
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
