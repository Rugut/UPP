
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/Subkonto")]
	[Route("/Catalogs/Subkonto/{Code}")]
	public class SubkontoRequest/*СубконтоЗапрос*/: V82.СправочникиСсылка.Субконто,IReturn<SubkontoRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SubkontoResponse//СубконтоОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/Subkontos")]
	[Route("/Catalogs/Subkontos/{Codes}")]
	public class SubkontosRequest/*СубконтоЗапрос*/: IReturn<List<SubkontoRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SubkontosRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SubkontosResponse//СубконтоОтвет
	{
		public string Result {get;set;}
	}


	public class SubkontoService /*СубконтоСервис*/ : Service
	{
		public object Any(SubkontoRequest request)
		{
			return new SubkontoResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SubkontoRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.Субконто.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SubkontoResponse() {Result = "Субконто c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SubkontosRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.Субконто>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.Субконто.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
