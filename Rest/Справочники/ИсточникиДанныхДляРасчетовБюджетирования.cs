
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/IstochnikiDannykhDlyaRaschetovByudzhetirovaniya")]
	[Route("/Catalogs/IstochnikiDannykhDlyaRaschetovByudzhetirovaniya/{Code}")]
	public class IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaRequest/*ИсточникиДанныхДляРасчетовБюджетированияЗапрос*/: V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования,IReturn<IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaResponse//ИсточникиДанныхДляРасчетовБюджетированияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/IstochnikiDannykhDlyaRaschetovByudzhetirovaniyas")]
	[Route("/Catalogs/IstochnikiDannykhDlyaRaschetovByudzhetirovaniyas/{Codes}")]
	public class IstochnikiDannykhDlyaRaschetovByudzhetirovaniyasRequest/*ИсточникиДанныхДляРасчетовБюджетированияЗапрос*/: IReturn<List<IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public IstochnikiDannykhDlyaRaschetovByudzhetirovaniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class IstochnikiDannykhDlyaRaschetovByudzhetirovaniyasResponse//ИсточникиДанныхДляРасчетовБюджетированияОтвет
	{
		public string Result {get;set;}
	}


	public class IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaService /*ИсточникиДанныхДляРасчетовБюджетированияСервис*/ : Service
	{
		public object Any(IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaRequest request)
		{
			return new IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ИсточникиДанныхДляРасчетовБюджетирования.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new IstochnikiDannykhDlyaRaschetovByudzhetirovaniyaResponse() {Result = "ИсточникиДанныхДляРасчетовБюджетирования c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(IstochnikiDannykhDlyaRaschetovByudzhetirovaniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ИсточникиДанныхДляРасчетовБюджетирования.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
