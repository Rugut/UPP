
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/SHablonyFormulRascheta")]
	[Route("/Catalogs/SHablonyFormulRascheta/{Code}")]
	public class SHablonyFormulRaschetaRequest/*ШаблоныФормулРасчетаЗапрос*/: V82.СправочникиСсылка.ШаблоныФормулРасчета,IReturn<SHablonyFormulRaschetaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class SHablonyFormulRaschetaResponse//ШаблоныФормулРасчетаОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/SHablonyFormulRaschetas")]
	[Route("/Catalogs/SHablonyFormulRaschetas/{Codes}")]
	public class SHablonyFormulRaschetasRequest/*ШаблоныФормулРасчетаЗапрос*/: IReturn<List<SHablonyFormulRaschetaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public SHablonyFormulRaschetasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class SHablonyFormulRaschetasResponse//ШаблоныФормулРасчетаОтвет
	{
		public string Result {get;set;}
	}


	public class SHablonyFormulRaschetaService /*ШаблоныФормулРасчетаСервис*/ : Service
	{
		public object Any(SHablonyFormulRaschetaRequest request)
		{
			return new SHablonyFormulRaschetaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(SHablonyFormulRaschetaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ШаблоныФормулРасчета.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new SHablonyFormulRaschetaResponse() {Result = "ШаблоныФормулРасчета c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(SHablonyFormulRaschetasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ШаблоныФормулРасчета>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ШаблоныФормулРасчета.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
