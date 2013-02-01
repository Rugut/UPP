
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NastrojjkiAnalitikiUcheta")]
	[Route("/Catalogs/NastrojjkiAnalitikiUcheta/{Code}")]
	public class NastrojjkiAnalitikiUchetaRequest/*НастройкиАналитикиУчетаЗапрос*/: V82.СправочникиСсылка.НастройкиАналитикиУчета,IReturn<NastrojjkiAnalitikiUchetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NastrojjkiAnalitikiUchetaResponse//НастройкиАналитикиУчетаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NastrojjkiAnalitikiUchetas")]
	[Route("/Catalogs/NastrojjkiAnalitikiUchetas/{Codes}")]
	public class NastrojjkiAnalitikiUchetasRequest/*НастройкиАналитикиУчетаЗапрос*/: IReturn<List<NastrojjkiAnalitikiUchetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NastrojjkiAnalitikiUchetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NastrojjkiAnalitikiUchetasResponse//НастройкиАналитикиУчетаОтвет
	{
		public string Result {get;set;}
	}


	public class NastrojjkiAnalitikiUchetaService /*НастройкиАналитикиУчетаСервис*/ : Service
	{
		public object Any(NastrojjkiAnalitikiUchetaRequest request)
		{
			return new NastrojjkiAnalitikiUchetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NastrojjkiAnalitikiUchetaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.НастройкиАналитикиУчета.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new NastrojjkiAnalitikiUchetaResponse() {Result = "НастройкиАналитикиУчета c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.НастройкиАналитикиУчета.НайтиПоКоду(1);
			}
		}

		public object Get(NastrojjkiAnalitikiUchetasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НастройкиАналитикиУчета>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.НастройкиАналитикиУчета.НайтиПоКоду(СтрокаКод);
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
