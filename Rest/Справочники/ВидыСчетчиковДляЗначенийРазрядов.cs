
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidySchetchikovDlyaZnachenijjRazryadov")]
	[Route("/Catalogs/VidySchetchikovDlyaZnachenijjRazryadov/{Code}")]
	public class VidySchetchikovDlyaZnachenijjRazryadovRequest/*ВидыСчетчиковДляЗначенийРазрядовЗапрос*/: V82.СправочникиСсылка.ВидыСчетчиковДляЗначенийРазрядов,IReturn<VidySchetchikovDlyaZnachenijjRazryadovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidySchetchikovDlyaZnachenijjRazryadovResponse//ВидыСчетчиковДляЗначенийРазрядовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidySchetchikovDlyaZnachenijjRazryadovs")]
	[Route("/Catalogs/VidySchetchikovDlyaZnachenijjRazryadovs/{Codes}")]
	public class VidySchetchikovDlyaZnachenijjRazryadovsRequest/*ВидыСчетчиковДляЗначенийРазрядовЗапрос*/: IReturn<List<VidySchetchikovDlyaZnachenijjRazryadovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidySchetchikovDlyaZnachenijjRazryadovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidySchetchikovDlyaZnachenijjRazryadovsResponse//ВидыСчетчиковДляЗначенийРазрядовОтвет
	{
		public string Result {get;set;}
	}


	public class VidySchetchikovDlyaZnachenijjRazryadovService /*ВидыСчетчиковДляЗначенийРазрядовСервис*/ : Service
	{
		public object Any(VidySchetchikovDlyaZnachenijjRazryadovRequest request)
		{
			return new VidySchetchikovDlyaZnachenijjRazryadovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidySchetchikovDlyaZnachenijjRazryadovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВидыСчетчиковДляЗначенийРазрядов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VidySchetchikovDlyaZnachenijjRazryadovResponse() {Result = "ВидыСчетчиковДляЗначенийРазрядов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВидыСчетчиковДляЗначенийРазрядов.НайтиПоКоду(1);
			}
		}

		public object Get(VidySchetchikovDlyaZnachenijjRazryadovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыСчетчиковДляЗначенийРазрядов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВидыСчетчиковДляЗначенийРазрядов.НайтиПоКоду(СтрокаКод);
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
