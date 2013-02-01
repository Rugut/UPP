
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VariantyOtvetovOprosov")]
	[Route("/Catalogs/VariantyOtvetovOprosov/{Code}")]
	public class VariantyOtvetovOprosovRequest/*ВариантыОтветовОпросовЗапрос*/: V82.СправочникиСсылка.ВариантыОтветовОпросов,IReturn<VariantyOtvetovOprosovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VariantyOtvetovOprosovResponse//ВариантыОтветовОпросовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VariantyOtvetovOprosovs")]
	[Route("/Catalogs/VariantyOtvetovOprosovs/{Codes}")]
	public class VariantyOtvetovOprosovsRequest/*ВариантыОтветовОпросовЗапрос*/: IReturn<List<VariantyOtvetovOprosovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VariantyOtvetovOprosovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VariantyOtvetovOprosovsResponse//ВариантыОтветовОпросовОтвет
	{
		public string Result {get;set;}
	}


	public class VariantyOtvetovOprosovService /*ВариантыОтветовОпросовСервис*/ : Service
	{
		public object Any(VariantyOtvetovOprosovRequest request)
		{
			return new VariantyOtvetovOprosovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VariantyOtvetovOprosovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВариантыОтветовОпросов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VariantyOtvetovOprosovResponse() {Result = "ВариантыОтветовОпросов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВариантыОтветовОпросов.НайтиПоКоду(1);
			}
		}

		public object Get(VariantyOtvetovOprosovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВариантыОтветовОпросов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВариантыОтветовОпросов.НайтиПоКоду(СтрокаКод);
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
