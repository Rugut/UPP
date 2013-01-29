
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NomenklaturnyeGruppy")]
	[Route("/Catalogs/NomenklaturnyeGruppy/{Code}")]
	public class NomenklaturnyeGruppyRequest/*НоменклатурныеГруппыЗапрос*/: V82.СправочникиСсылка.НоменклатурныеГруппы,IReturn<NomenklaturnyeGruppyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NomenklaturnyeGruppyResponse//НоменклатурныеГруппыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NomenklaturnyeGruppys")]
	[Route("/Catalogs/NomenklaturnyeGruppys/{Codes}")]
	public class NomenklaturnyeGruppysRequest/*НоменклатурныеГруппыЗапрос*/: IReturn<List<NomenklaturnyeGruppyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NomenklaturnyeGruppysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NomenklaturnyeGruppysResponse//НоменклатурныеГруппыОтвет
	{
		public string Result {get;set;}
	}


	public class NomenklaturnyeGruppyService /*НоменклатурныеГруппыСервис*/ : Service
	{
		public object Any(NomenklaturnyeGruppyRequest request)
		{
			return new NomenklaturnyeGruppyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NomenklaturnyeGruppyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.НоменклатурныеГруппы.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NomenklaturnyeGruppyResponse() {Result = "НоменклатурныеГруппы c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.НоменклатурныеГруппы.НайтиПоКоду(1);
			}
		}

		public object Get(NomenklaturnyeGruppysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НоменклатурныеГруппы>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.НоменклатурныеГруппы.НайтиПоКоду(СтрокаКод);
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
