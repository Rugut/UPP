
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyKontaktnojjInformacii")]
	[Route("/Catalogs/VidyKontaktnojjInformacii/{Code}")]
	public class VidyKontaktnojjInformaciiRequest/*ВидыКонтактнойИнформацииЗапрос*/: V82.СправочникиСсылка.ВидыКонтактнойИнформации,IReturn<VidyKontaktnojjInformaciiRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyKontaktnojjInformaciiResponse//ВидыКонтактнойИнформацииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyKontaktnojjInformaciis")]
	[Route("/Catalogs/VidyKontaktnojjInformaciis/{Codes}")]
	public class VidyKontaktnojjInformaciisRequest/*ВидыКонтактнойИнформацииЗапрос*/: IReturn<List<VidyKontaktnojjInformaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyKontaktnojjInformaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyKontaktnojjInformaciisResponse//ВидыКонтактнойИнформацииОтвет
	{
		public string Result {get;set;}
	}


	public class VidyKontaktnojjInformaciiService /*ВидыКонтактнойИнформацииСервис*/ : Service
	{
		public object Any(VidyKontaktnojjInformaciiRequest request)
		{
			return new VidyKontaktnojjInformaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyKontaktnojjInformaciiRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВидыКонтактнойИнформации.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VidyKontaktnojjInformaciiResponse() {Result = "ВидыКонтактнойИнформации c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВидыКонтактнойИнформации.НайтиПоКоду(1);
			}
		}

		public object Get(VidyKontaktnojjInformaciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыКонтактнойИнформации>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВидыКонтактнойИнформации.НайтиПоКоду(СтрокаКод);
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
