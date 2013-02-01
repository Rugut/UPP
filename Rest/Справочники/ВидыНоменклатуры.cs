
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyNomenklatury")]
	[Route("/Catalogs/VidyNomenklatury/{Code}")]
	public class VidyNomenklaturyRequest/*ВидыНоменклатурыЗапрос*/: V82.СправочникиСсылка.ВидыНоменклатуры,IReturn<VidyNomenklaturyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyNomenklaturyResponse//ВидыНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyNomenklaturys")]
	[Route("/Catalogs/VidyNomenklaturys/{Codes}")]
	public class VidyNomenklaturysRequest/*ВидыНоменклатурыЗапрос*/: IReturn<List<VidyNomenklaturyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyNomenklaturysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyNomenklaturysResponse//ВидыНоменклатурыОтвет
	{
		public string Result {get;set;}
	}


	public class VidyNomenklaturyService /*ВидыНоменклатурыСервис*/ : Service
	{
		public object Any(VidyNomenklaturyRequest request)
		{
			return new VidyNomenklaturyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyNomenklaturyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВидыНоменклатуры.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VidyNomenklaturyResponse() {Result = "ВидыНоменклатуры c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВидыНоменклатуры.НайтиПоКоду(1);
			}
		}

		public object Get(VidyNomenklaturysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыНоменклатуры>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВидыНоменклатуры.НайтиПоКоду(СтрокаКод);
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
