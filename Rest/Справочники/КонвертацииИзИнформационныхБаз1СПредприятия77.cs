
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77")]
	[Route("/Catalogs/KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77/{Code}")]
	public class KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77Request/*КонвертацииИзИнформационныхБаз1СПредприятия77Запрос*/: V82.СправочникиСсылка.КонвертацииИзИнформационныхБаз1СПредприятия77,IReturn<KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77Request>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77Response//КонвертацииИзИнформационныхБаз1СПредприятия77Ответ
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77s")]
	[Route("/Catalogs/KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77s/{Codes}")]
	public class KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77sRequest/*КонвертацииИзИнформационныхБаз1СПредприятия77Запрос*/: IReturn<List<KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77Request>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77sRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77sResponse//КонвертацииИзИнформационныхБаз1СПредприятия77Ответ
	{
		public string Result {get;set;}
	}


	public class KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77Service /*КонвертацииИзИнформационныхБаз1СПредприятия77Сервис*/ : Service
	{
		public object Any(KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77Request request)
		{
			return new KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77Response {Result = "Tovar, " + request.Code};
		}

		public object Get(KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77Request request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.КонвертацииИзИнформационныхБаз1СПредприятия77.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77Response() {Result = "КонвертацииИзИнформационныхБаз1СПредприятия77 c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.КонвертацииИзИнформационныхБаз1СПредприятия77.НайтиПоКоду(1);
			}
		}

		public object Get(KonvertaciiIzInformacionnykhBaz1SPredpriyatiya77sRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.КонвертацииИзИнформационныхБаз1СПредприятия77>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.КонвертацииИзИнформационныхБаз1СПредприятия77.НайтиПоКоду(СтрокаКод);
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
