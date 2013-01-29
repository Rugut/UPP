
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/PokazateliSkhemMotivacii")]
	[Route("/Catalogs/PokazateliSkhemMotivacii/{Code}")]
	public class PokazateliSkhemMotivaciiRequest/*ПоказателиСхемМотивацииЗапрос*/: V82.СправочникиСсылка.ПоказателиСхемМотивации,IReturn<PokazateliSkhemMotivaciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class PokazateliSkhemMotivaciiResponse//ПоказателиСхемМотивацииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/PokazateliSkhemMotivaciis")]
	[Route("/Catalogs/PokazateliSkhemMotivaciis/{Codes}")]
	public class PokazateliSkhemMotivaciisRequest/*ПоказателиСхемМотивацииЗапрос*/: IReturn<List<PokazateliSkhemMotivaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public PokazateliSkhemMotivaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class PokazateliSkhemMotivaciisResponse//ПоказателиСхемМотивацииОтвет
	{
		public string Result {get;set;}
	}


	public class PokazateliSkhemMotivaciiService /*ПоказателиСхемМотивацииСервис*/ : Service
	{
		public object Any(PokazateliSkhemMotivaciiRequest request)
		{
			return new PokazateliSkhemMotivaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(PokazateliSkhemMotivaciiRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ПоказателиСхемМотивации.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new PokazateliSkhemMotivaciiResponse() {Result = "ПоказателиСхемМотивации c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ПоказателиСхемМотивации.НайтиПоКоду(1);
			}
		}

		public object Get(PokazateliSkhemMotivaciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ПоказателиСхемМотивации>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ПоказателиСхемМотивации.НайтиПоКоду(СтрокаКод);
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
