
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyEzhegodnykhOtpuskov")]
	[Route("/Catalogs/VidyEzhegodnykhOtpuskov/{Code}")]
	public class VidyEzhegodnykhOtpuskovRequest/*ВидыЕжегодныхОтпусковЗапрос*/: V82.СправочникиСсылка.ВидыЕжегодныхОтпусков,IReturn<VidyEzhegodnykhOtpuskovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyEzhegodnykhOtpuskovResponse//ВидыЕжегодныхОтпусковОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyEzhegodnykhOtpuskovs")]
	[Route("/Catalogs/VidyEzhegodnykhOtpuskovs/{Codes}")]
	public class VidyEzhegodnykhOtpuskovsRequest/*ВидыЕжегодныхОтпусковЗапрос*/: IReturn<List<VidyEzhegodnykhOtpuskovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyEzhegodnykhOtpuskovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyEzhegodnykhOtpuskovsResponse//ВидыЕжегодныхОтпусковОтвет
	{
		public string Result {get;set;}
	}


	public class VidyEzhegodnykhOtpuskovService /*ВидыЕжегодныхОтпусковСервис*/ : Service
	{
		public object Any(VidyEzhegodnykhOtpuskovRequest request)
		{
			return new VidyEzhegodnykhOtpuskovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyEzhegodnykhOtpuskovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВидыЕжегодныхОтпусков.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VidyEzhegodnykhOtpuskovResponse() {Result = "ВидыЕжегодныхОтпусков c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВидыЕжегодныхОтпусков.НайтиПоКоду(1);
			}
		}

		public object Get(VidyEzhegodnykhOtpuskovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыЕжегодныхОтпусков>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВидыЕжегодныхОтпусков.НайтиПоКоду(СтрокаКод);
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
