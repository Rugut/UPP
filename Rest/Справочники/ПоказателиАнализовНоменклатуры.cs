
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/PokazateliAnalizovNomenklatury")]
	[Route("/Catalogs/PokazateliAnalizovNomenklatury/{Code}")]
	public class PokazateliAnalizovNomenklaturyRequest/*ПоказателиАнализовНоменклатурыЗапрос*/: V82.СправочникиСсылка.ПоказателиАнализовНоменклатуры,IReturn<PokazateliAnalizovNomenklaturyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PokazateliAnalizovNomenklaturyResponse//ПоказателиАнализовНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/PokazateliAnalizovNomenklaturys")]
	[Route("/Catalogs/PokazateliAnalizovNomenklaturys/{Codes}")]
	public class PokazateliAnalizovNomenklaturysRequest/*ПоказателиАнализовНоменклатурыЗапрос*/: IReturn<List<PokazateliAnalizovNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PokazateliAnalizovNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PokazateliAnalizovNomenklaturysResponse//ПоказателиАнализовНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class PokazateliAnalizovNomenklaturyService /*ПоказателиАнализовНоменклатурыСервис*/ : Service
	{
		public object Any(PokazateliAnalizovNomenklaturyRequest request)
		{
			return new PokazateliAnalizovNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PokazateliAnalizovNomenklaturyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ПоказателиАнализовНоменклатуры.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new PokazateliAnalizovNomenklaturyResponse() {Result = "ПоказателиАнализовНоменклатуры c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ПоказателиАнализовНоменклатуры.НайтиПоКоду(1);
			}
		}

		public object Get(PokazateliAnalizovNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПоказателиАнализовНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ПоказателиАнализовНоменклатуры.НайтиПоКоду(СтрокаКод);
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
