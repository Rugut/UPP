
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VariantyCkhemMotivacii")]
	[Route("/Catalogs/VariantyCkhemMotivacii/FindById/{Id}")]
	[Route("/Catalogs/VariantyCkhemMotivacii/FindByCode/{Code}")]
	[Route("/Catalogs/VariantyCkhemMotivacii/FindByDescr/{Descr}")]
	public class VariantyCkhemMotivaciiRequest/*ВариантыCхемМотивацииЗапрос*/: V82.СправочникиСсылка.ВариантыCхемМотивации,IReturn<VariantyCkhemMotivaciiRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VariantyCkhemMotivaciiResponse//ВариантыCхемМотивацииОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VariantyCkhemMotivaciis")]
	[Route("/Catalogs/VariantyCkhemMotivaciis/{Codes}")]
	public class VariantyCkhemMotivaciisRequest/*ВариантыCхемМотивацииЗапрос*/: IReturn<List<VariantyCkhemMotivaciiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VariantyCkhemMotivaciisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VariantyCkhemMotivaciisResponse//ВариантыCхемМотивацииОтвет
	{
		public string Result {get;set;}
	}


	public class VariantyCkhemMotivaciiService /*ВариантыCхемМотивацииСервис*/ : Service
	{
		public object Any(VariantyCkhemMotivaciiRequest request)
		{
			return new VariantyCkhemMotivaciiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VariantyCkhemMotivaciiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ВариантыCхемМотивации.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VariantyCkhemMotivaciiResponse() {Result = "ВариантыCхемМотивации c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VariantyCkhemMotivaciisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВариантыCхемМотивации>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ВариантыCхемМотивации.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}