
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Nomenklatura")]
	[Route("/Catalogs/Nomenklatura/{Code}")]
	public class NomenklaturaRequest/*НоменклатураЗапрос*/: V82.СправочникиСсылка.Номенклатура,IReturn<NomenklaturaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NomenklaturaResponse//НоменклатураОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Nomenklaturas")]
	[Route("/Catalogs/Nomenklaturas/{Codes}")]
	public class NomenklaturasRequest/*НоменклатураЗапрос*/: IReturn<List<NomenklaturaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NomenklaturasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NomenklaturasResponse//НоменклатураОтвет
	{
		public string Result {get;set;}
	}


	public class NomenklaturaService /*НоменклатураСервис*/ : Service
	{
		public object Any(NomenklaturaRequest request)
		{
			return new NomenklaturaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NomenklaturaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.Номенклатура.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NomenklaturaResponse() {Result = "Номенклатура c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NomenklaturasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Номенклатура>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.Номенклатура.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
