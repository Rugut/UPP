
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/InformacionnyeKarty")]
	[Route("/Catalogs/InformacionnyeKarty/{Code}")]
	public class InformacionnyeKartyRequest/*ИнформационныеКартыЗапрос*/: V82.СправочникиСсылка.ИнформационныеКарты,IReturn<InformacionnyeKartyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class InformacionnyeKartyResponse//ИнформационныеКартыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/InformacionnyeKartys")]
	[Route("/Catalogs/InformacionnyeKartys/{Codes}")]
	public class InformacionnyeKartysRequest/*ИнформационныеКартыЗапрос*/: IReturn<List<InformacionnyeKartyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public InformacionnyeKartysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class InformacionnyeKartysResponse//ИнформационныеКартыОтвет
	{
		public string Result {get;set;}
	}


	public class InformacionnyeKartyService /*ИнформационныеКартыСервис*/ : Service
	{
		public object Any(InformacionnyeKartyRequest request)
		{
			return new InformacionnyeKartyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(InformacionnyeKartyRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ИнформационныеКарты.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new InformacionnyeKartyResponse() {Result = "ИнформационныеКарты c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ИнформационныеКарты.НайтиПоКоду(1);
			}
		}

		public object Get(InformacionnyeKartysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ИнформационныеКарты>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ИнформационныеКарты.НайтиПоКоду(СтрокаКод);
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
