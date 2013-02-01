
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisem")]
	[Route("/Catalogs/FiltryDlyaEHlektronnykhPisem/{Code}")]
	public class FiltryDlyaEHlektronnykhPisemRequest/*ФильтрыДляЭлектронныхПисемЗапрос*/: V82.СправочникиСсылка.ФильтрыДляЭлектронныхПисем,IReturn<FiltryDlyaEHlektronnykhPisemRequest>
	{
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
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ФильтрыДляЭлектронныхПисем.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new FiltryDlyaEHlektronnykhPisemResponse() {Result = "ФильтрыДляЭлектронныхПисем c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ФильтрыДляЭлектронныхПисем.НайтиПоКоду(1);
			}
		}

		public object Get(FiltryDlyaEHlektronnykhPisemsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ФильтрыДляЭлектронныхПисем>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ФильтрыДляЭлектронныхПисем.НайтиПоКоду(СтрокаКод);
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
