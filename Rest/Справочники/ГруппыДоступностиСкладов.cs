
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/GruppyDostupnostiSkladov")]
	[Route("/Catalogs/GruppyDostupnostiSkladov/{Code}")]
	public class GruppyDostupnostiSkladovRequest/*ГруппыДоступностиСкладовЗапрос*/: V82.СправочникиСсылка.ГруппыДоступностиСкладов,IReturn<GruppyDostupnostiSkladovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppyDostupnostiSkladovResponse//ГруппыДоступностиСкладовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppyDostupnostiSkladovs")]
	[Route("/Catalogs/GruppyDostupnostiSkladovs/{Codes}")]
	public class GruppyDostupnostiSkladovsRequest/*ГруппыДоступностиСкладовЗапрос*/: IReturn<List<GruppyDostupnostiSkladovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppyDostupnostiSkladovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppyDostupnostiSkladovsResponse//ГруппыДоступностиСкладовОтвет
	{
		public string Result {get;set;}
	}


	public class GruppyDostupnostiSkladovService /*ГруппыДоступностиСкладовСервис*/ : Service
	{
		public object Any(GruppyDostupnostiSkladovRequest request)
		{
			return new GruppyDostupnostiSkladovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppyDostupnostiSkladovRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ГруппыДоступностиСкладов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new GruppyDostupnostiSkladovResponse() {Result = "ГруппыДоступностиСкладов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(GruppyDostupnostiSkladovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ГруппыДоступностиСкладов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ГруппыДоступностиСкладов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
