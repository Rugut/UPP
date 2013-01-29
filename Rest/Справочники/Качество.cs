
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Kachestvo")]
	[Route("/Catalogs/Kachestvo/{Code}")]
	public class KachestvoRequest/*КачествоЗапрос*/: V82.СправочникиСсылка.Качество,IReturn<KachestvoRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KachestvoResponse//КачествоОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Kachestvos")]
	[Route("/Catalogs/Kachestvos/{Codes}")]
	public class KachestvosRequest/*КачествоЗапрос*/: IReturn<List<KachestvoRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KachestvosRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KachestvosResponse//КачествоОтвет
	{
		public string Result {get;set;}
	}


	public class KachestvoService /*КачествоСервис*/ : Service
	{
		public object Any(KachestvoRequest request)
		{
			return new KachestvoResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(KachestvoRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.Качество.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KachestvoResponse() {Result = "Качество c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.Качество.НайтиПоКоду(1);
			}
		}

		public object Get(KachestvosRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Качество>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.Качество.НайтиПоКоду(СтрокаКод);
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
