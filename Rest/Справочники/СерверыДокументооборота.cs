
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/ServeryDokumentooborota")]
	[Route("/Catalogs/ServeryDokumentooborota/{Code}")]
	public class ServeryDokumentooborotaRequest/*СерверыДокументооборотаЗапрос*/: V82.СправочникиСсылка.СерверыДокументооборота,IReturn<ServeryDokumentooborotaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class ServeryDokumentooborotaResponse//СерверыДокументооборотаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/ServeryDokumentooborotas")]
	[Route("/Catalogs/ServeryDokumentooborotas/{Codes}")]
	public class ServeryDokumentooborotasRequest/*СерверыДокументооборотаЗапрос*/: IReturn<List<ServeryDokumentooborotaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public ServeryDokumentooborotasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class ServeryDokumentooborotasResponse//СерверыДокументооборотаОтвет
	{
		public string Result {get;set;}
	}


	public class ServeryDokumentooborotaService /*СерверыДокументооборотаСервис*/ : Service
	{
		public object Any(ServeryDokumentooborotaRequest request)
		{
			return new ServeryDokumentooborotaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(ServeryDokumentooborotaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.СерверыДокументооборота.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new ServeryDokumentooborotaResponse() {Result = "СерверыДокументооборота c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.СерверыДокументооборота.НайтиПоКоду(1);
			}
		}

		public object Get(ServeryDokumentooborotasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.СерверыДокументооборота>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.СерверыДокументооборота.НайтиПоКоду(СтрокаКод);
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
