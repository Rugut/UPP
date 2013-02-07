
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TarifyBankovNaDenezhnyePerevody")]
	[Route("/Catalogs/TarifyBankovNaDenezhnyePerevody/FindById/{Id}")]
	[Route("/Catalogs/TarifyBankovNaDenezhnyePerevody/FindByCode/{Code}")]
	[Route("/Catalogs/TarifyBankovNaDenezhnyePerevody/FindByDescr/{Descr}")]
	public class TarifyBankovNaDenezhnyePerevodyRequest/*ТарифыБанковНаДенежныеПереводыЗапрос*/: V82.СправочникиСсылка.ТарифыБанковНаДенежныеПереводы,IReturn<TarifyBankovNaDenezhnyePerevodyRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TarifyBankovNaDenezhnyePerevodyResponse//ТарифыБанковНаДенежныеПереводыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TarifyBankovNaDenezhnyePerevodys")]
	[Route("/Catalogs/TarifyBankovNaDenezhnyePerevodys/{Codes}")]
	public class TarifyBankovNaDenezhnyePerevodysRequest/*ТарифыБанковНаДенежныеПереводыЗапрос*/: IReturn<List<TarifyBankovNaDenezhnyePerevodyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TarifyBankovNaDenezhnyePerevodysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TarifyBankovNaDenezhnyePerevodysResponse//ТарифыБанковНаДенежныеПереводыОтвет
	{
		public string Result {get;set;}
	}


	public class TarifyBankovNaDenezhnyePerevodyService /*ТарифыБанковНаДенежныеПереводыСервис*/ : Service
	{
		public object Any(TarifyBankovNaDenezhnyePerevodyRequest request)
		{
			return new TarifyBankovNaDenezhnyePerevodyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TarifyBankovNaDenezhnyePerevodyRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ТарифыБанковНаДенежныеПереводы.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TarifyBankovNaDenezhnyePerevodyResponse() {Result = "ТарифыБанковНаДенежныеПереводы c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TarifyBankovNaDenezhnyePerevodysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТарифыБанковНаДенежныеПереводы>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ТарифыБанковНаДенежныеПереводы.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}