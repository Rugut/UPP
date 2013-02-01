
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/OsnovaniyaIschislyaemogoTrudovogoStazha")]
	[Route("/Catalogs/OsnovaniyaIschislyaemogoTrudovogoStazha/{Code}")]
	public class OsnovaniyaIschislyaemogoTrudovogoStazhaRequest/*ОснованияИсчисляемогоТрудовогоСтажаЗапрос*/: V82.СправочникиСсылка.ОснованияИсчисляемогоТрудовогоСтажа,IReturn<OsnovaniyaIschislyaemogoTrudovogoStazhaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class OsnovaniyaIschislyaemogoTrudovogoStazhaResponse//ОснованияИсчисляемогоТрудовогоСтажаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/OsnovaniyaIschislyaemogoTrudovogoStazhas")]
	[Route("/Catalogs/OsnovaniyaIschislyaemogoTrudovogoStazhas/{Codes}")]
	public class OsnovaniyaIschislyaemogoTrudovogoStazhasRequest/*ОснованияИсчисляемогоТрудовогоСтажаЗапрос*/: IReturn<List<OsnovaniyaIschislyaemogoTrudovogoStazhaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public OsnovaniyaIschislyaemogoTrudovogoStazhasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class OsnovaniyaIschislyaemogoTrudovogoStazhasResponse//ОснованияИсчисляемогоТрудовогоСтажаОтвет
	{
		public string Result {get;set;}
	}


	public class OsnovaniyaIschislyaemogoTrudovogoStazhaService /*ОснованияИсчисляемогоТрудовогоСтажаСервис*/ : Service
	{
		public object Any(OsnovaniyaIschislyaemogoTrudovogoStazhaRequest request)
		{
			return new OsnovaniyaIschislyaemogoTrudovogoStazhaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(OsnovaniyaIschislyaemogoTrudovogoStazhaRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ОснованияИсчисляемогоТрудовогоСтажа.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new OsnovaniyaIschislyaemogoTrudovogoStazhaResponse() {Result = "ОснованияИсчисляемогоТрудовогоСтажа c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ОснованияИсчисляемогоТрудовогоСтажа.НайтиПоКоду(1);
			}
		}

		public object Get(OsnovaniyaIschislyaemogoTrudovogoStazhasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ОснованияИсчисляемогоТрудовогоСтажа>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ОснованияИсчисляемогоТрудовогоСтажа.НайтиПоКоду(СтрокаКод);
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
