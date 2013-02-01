
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/IstochnikiInformaciiPriObrashheniiPokupatelejj")]
	[Route("/Catalogs/IstochnikiInformaciiPriObrashheniiPokupatelejj/{Code}")]
	public class IstochnikiInformaciiPriObrashheniiPokupatelejjRequest/*ИсточникиИнформацииПриОбращенииПокупателейЗапрос*/: V82.СправочникиСсылка.ИсточникиИнформацииПриОбращенииПокупателей,IReturn<IstochnikiInformaciiPriObrashheniiPokupatelejjRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class IstochnikiInformaciiPriObrashheniiPokupatelejjResponse//ИсточникиИнформацииПриОбращенииПокупателейОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/IstochnikiInformaciiPriObrashheniiPokupatelejjs")]
	[Route("/Catalogs/IstochnikiInformaciiPriObrashheniiPokupatelejjs/{Codes}")]
	public class IstochnikiInformaciiPriObrashheniiPokupatelejjsRequest/*ИсточникиИнформацииПриОбращенииПокупателейЗапрос*/: IReturn<List<IstochnikiInformaciiPriObrashheniiPokupatelejjRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public IstochnikiInformaciiPriObrashheniiPokupatelejjsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class IstochnikiInformaciiPriObrashheniiPokupatelejjsResponse//ИсточникиИнформацииПриОбращенииПокупателейОтвет
	{
		public string Result {get;set;}
	}


	public class IstochnikiInformaciiPriObrashheniiPokupatelejjService /*ИсточникиИнформацииПриОбращенииПокупателейСервис*/ : Service
	{
		public object Any(IstochnikiInformaciiPriObrashheniiPokupatelejjRequest request)
		{
			return new IstochnikiInformaciiPriObrashheniiPokupatelejjResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(IstochnikiInformaciiPriObrashheniiPokupatelejjRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ИсточникиИнформацииПриОбращенииПокупателей.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new IstochnikiInformaciiPriObrashheniiPokupatelejjResponse() {Result = "ИсточникиИнформацииПриОбращенииПокупателей c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ИсточникиИнформацииПриОбращенииПокупателей.НайтиПоКоду(1);
			}
		}

		public object Get(IstochnikiInformaciiPriObrashheniiPokupatelejjsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ИсточникиИнформацииПриОбращенииПокупателей>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ИсточникиИнформацииПриОбращенииПокупателей.НайтиПоКоду(СтрокаКод);
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
