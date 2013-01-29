
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyAlkogolnojjProdukcii")]
	[Route("/Catalogs/VidyAlkogolnojjProdukcii/{Code}")]
	public class VidyAlkogolnojjProdukciiRequest/*ВидыАлкогольнойПродукцииЗапрос*/: V82.СправочникиСсылка.ВидыАлкогольнойПродукции,IReturn<VidyAlkogolnojjProdukciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyAlkogolnojjProdukciiResponse//ВидыАлкогольнойПродукцииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyAlkogolnojjProdukciis")]
	[Route("/Catalogs/VidyAlkogolnojjProdukciis/{Codes}")]
	public class VidyAlkogolnojjProdukciisRequest/*ВидыАлкогольнойПродукцииЗапрос*/: IReturn<List<VidyAlkogolnojjProdukciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyAlkogolnojjProdukciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyAlkogolnojjProdukciisResponse//ВидыАлкогольнойПродукцииОтвет
	{
		public string Result {get;set;}
	}


	public class VidyAlkogolnojjProdukciiService /*ВидыАлкогольнойПродукцииСервис*/ : Service
	{
		public object Any(VidyAlkogolnojjProdukciiRequest request)
		{
			return new VidyAlkogolnojjProdukciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyAlkogolnojjProdukciiRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВидыАлкогольнойПродукции.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VidyAlkogolnojjProdukciiResponse() {Result = "ВидыАлкогольнойПродукции c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВидыАлкогольнойПродукции.НайтиПоКоду(1);
			}
		}

		public object Get(VidyAlkogolnojjProdukciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыАлкогольнойПродукции>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВидыАлкогольнойПродукции.НайтиПоКоду(СтрокаКод);
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
