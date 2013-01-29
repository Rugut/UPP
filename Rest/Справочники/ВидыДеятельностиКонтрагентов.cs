
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyDeyatelnostiKontragentov")]
	[Route("/Catalogs/VidyDeyatelnostiKontragentov/{Code}")]
	public class VidyDeyatelnostiKontragentovRequest/*ВидыДеятельностиКонтрагентовЗапрос*/: V82.СправочникиСсылка.ВидыДеятельностиКонтрагентов,IReturn<VidyDeyatelnostiKontragentovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyDeyatelnostiKontragentovResponse//ВидыДеятельностиКонтрагентовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyDeyatelnostiKontragentovs")]
	[Route("/Catalogs/VidyDeyatelnostiKontragentovs/{Codes}")]
	public class VidyDeyatelnostiKontragentovsRequest/*ВидыДеятельностиКонтрагентовЗапрос*/: IReturn<List<VidyDeyatelnostiKontragentovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyDeyatelnostiKontragentovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyDeyatelnostiKontragentovsResponse//ВидыДеятельностиКонтрагентовОтвет
	{
		public string Result {get;set;}
	}


	public class VidyDeyatelnostiKontragentovService /*ВидыДеятельностиКонтрагентовСервис*/ : Service
	{
		public object Any(VidyDeyatelnostiKontragentovRequest request)
		{
			return new VidyDeyatelnostiKontragentovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyDeyatelnostiKontragentovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВидыДеятельностиКонтрагентов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VidyDeyatelnostiKontragentovResponse() {Result = "ВидыДеятельностиКонтрагентов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВидыДеятельностиКонтрагентов.НайтиПоКоду(1);
			}
		}

		public object Get(VidyDeyatelnostiKontragentovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыДеятельностиКонтрагентов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВидыДеятельностиКонтрагентов.НайтиПоКоду(СтрокаКод);
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
