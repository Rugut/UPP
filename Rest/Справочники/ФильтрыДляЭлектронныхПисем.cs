
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisem")]
	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisem/FindById/{Id}")]
	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisem/FindByCode/{Code}")]
	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisem/FindByDescr/{Descr}")]
	public class FiltryDlyaEHlektronnykhPisemRequest/*ФильтрыДляЭлектронныхПисемЗапрос*/: V82.СправочникиСсылка.ФильтрыДляЭлектронныхПисем,IReturn<FiltryDlyaEHlektronnykhPisemRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class FiltryDlyaEHlektronnykhPisemResponse//ФильтрыДляЭлектронныхПисемОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisems")]
	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisems/{Codes}")]
	public class FiltryDlyaEHlektronnykhPisemsRequest/*ФильтрыДляЭлектронныхПисемЗапрос*/: IReturn<List<FiltryDlyaEHlektronnykhPisemRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public FiltryDlyaEHlektronnykhPisemsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class FiltryDlyaEHlektronnykhPisemsResponse//ФильтрыДляЭлектронныхПисемОтвет
	{
		public string Result {get;set;}
	}


	public class FiltryDlyaEHlektronnykhPisemService /*ФильтрыДляЭлектронныхПисемСервис*/ : Service
	{
		public object Any(FiltryDlyaEHlektronnykhPisemRequest request)
		{
			return new FiltryDlyaEHlektronnykhPisemResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(FiltryDlyaEHlektronnykhPisemRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ФильтрыДляЭлектронныхПисем.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new FiltryDlyaEHlektronnykhPisemResponse() {Result = "ФильтрыДляЭлектронныхПисем c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(FiltryDlyaEHlektronnykhPisemsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ФильтрыДляЭлектронныхПисем>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ФильтрыДляЭлектронныхПисем.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}