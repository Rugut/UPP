
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/TomaKHraneniyaFajjlov")]
	[Route("/Catalogs/TomaKHraneniyaFajjlov/{Code}")]
	public class TomaKHraneniyaFajjlovRequest/*ТомаХраненияФайловЗапрос*/: V82.СправочникиСсылка.ТомаХраненияФайлов,IReturn<TomaKHraneniyaFajjlovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class TomaKHraneniyaFajjlovResponse//ТомаХраненияФайловОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/TomaKHraneniyaFajjlovs")]
	[Route("/Catalogs/TomaKHraneniyaFajjlovs/{Codes}")]
	public class TomaKHraneniyaFajjlovsRequest/*ТомаХраненияФайловЗапрос*/: IReturn<List<TomaKHraneniyaFajjlovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public TomaKHraneniyaFajjlovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class TomaKHraneniyaFajjlovsResponse//ТомаХраненияФайловОтвет
	{
		public string Result {get;set;}
	}


	public class TomaKHraneniyaFajjlovService /*ТомаХраненияФайловСервис*/ : Service
	{
		public object Any(TomaKHraneniyaFajjlovRequest request)
		{
			return new TomaKHraneniyaFajjlovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(TomaKHraneniyaFajjlovRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ТомаХраненияФайлов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new TomaKHraneniyaFajjlovResponse() {Result = "ТомаХраненияФайлов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(TomaKHraneniyaFajjlovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ТомаХраненияФайлов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ТомаХраненияФайлов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
