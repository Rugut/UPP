
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GrafikiRaboty")]
	[Route("/Catalogs/GrafikiRaboty/{Code}")]
	public class GrafikiRabotyRequest/*ГрафикиРаботыЗапрос*/: V82.СправочникиСсылка.ГрафикиРаботы,IReturn<GrafikiRabotyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GrafikiRabotyResponse//ГрафикиРаботыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GrafikiRabotys")]
	[Route("/Catalogs/GrafikiRabotys/{Codes}")]
	public class GrafikiRabotysRequest/*ГрафикиРаботыЗапрос*/: IReturn<List<GrafikiRabotyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GrafikiRabotysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GrafikiRabotysResponse//ГрафикиРаботыОтвет
	{
		public string Result {get;set;}
	}


	public class GrafikiRabotyService /*ГрафикиРаботыСервис*/ : Service
	{
		public object Any(GrafikiRabotyRequest request)
		{
			return new GrafikiRabotyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GrafikiRabotyRequest request)
		{
			return null;
		}

		public object Get(GrafikiRabotysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГрафикиРаботы>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					Коллекция.Add(null);
				}
			}
			return Коллекция;
		}

	}
}
