
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyOtpravlyaemykhDokumentov")]
	[Route("/Catalogs/VidyOtpravlyaemykhDokumentov/{Code}")]
	public class VidyOtpravlyaemykhDokumentovRequest/*ВидыОтправляемыхДокументовЗапрос*/: V82.СправочникиСсылка.ВидыОтправляемыхДокументов,IReturn<VidyOtpravlyaemykhDokumentovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyOtpravlyaemykhDokumentovResponse//ВидыОтправляемыхДокументовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyOtpravlyaemykhDokumentovs")]
	[Route("/Catalogs/VidyOtpravlyaemykhDokumentovs/{Codes}")]
	public class VidyOtpravlyaemykhDokumentovsRequest/*ВидыОтправляемыхДокументовЗапрос*/: IReturn<List<VidyOtpravlyaemykhDokumentovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyOtpravlyaemykhDokumentovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyOtpravlyaemykhDokumentovsResponse//ВидыОтправляемыхДокументовОтвет
	{
		public string Result {get;set;}
	}


	public class VidyOtpravlyaemykhDokumentovService /*ВидыОтправляемыхДокументовСервис*/ : Service
	{
		public object Any(VidyOtpravlyaemykhDokumentovRequest request)
		{
			return new VidyOtpravlyaemykhDokumentovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyOtpravlyaemykhDokumentovRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВидыОтправляемыхДокументов.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VidyOtpravlyaemykhDokumentovResponse() {Result = "ВидыОтправляемыхДокументов c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВидыОтправляемыхДокументов.НайтиПоКоду(1);
			}
		}

		public object Get(VidyOtpravlyaemykhDokumentovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыОтправляемыхДокументов>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВидыОтправляемыхДокументов.НайтиПоКоду(СтрокаКод);
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
