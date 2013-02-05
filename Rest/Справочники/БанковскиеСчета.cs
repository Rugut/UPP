
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/BankovskieScheta")]
	[Route("/Catalogs/BankovskieScheta/{Code}")]
	public class BankovskieSchetaRequest/*БанковскиеСчетаЗапрос*/: V82.СправочникиСсылка.БанковскиеСчета,IReturn<BankovskieSchetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class BankovskieSchetaResponse//БанковскиеСчетаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/BankovskieSchetas")]
	[Route("/Catalogs/BankovskieSchetas/{Codes}")]
	public class BankovskieSchetasRequest/*БанковскиеСчетаЗапрос*/: IReturn<List<BankovskieSchetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public BankovskieSchetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class BankovskieSchetasResponse//БанковскиеСчетаОтвет
	{
		public string Result {get;set;}
	}


	public class BankovskieSchetaService /*БанковскиеСчетаСервис*/ : Service
	{
		public object Any(BankovskieSchetaRequest request)
		{
			return new BankovskieSchetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(BankovskieSchetaRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.БанковскиеСчета.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new BankovskieSchetaResponse() {Result = "БанковскиеСчета c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(BankovskieSchetasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.БанковскиеСчета>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.БанковскиеСчета.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
