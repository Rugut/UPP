
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyObshhestvennoPoleznojjDeyatelnosti")]
	[Route("/Catalogs/VidyObshhestvennoPoleznojjDeyatelnosti/FindById/{Id}")]
	[Route("/Catalogs/VidyObshhestvennoPoleznojjDeyatelnosti/FindByCode/{Code}")]
	[Route("/Catalogs/VidyObshhestvennoPoleznojjDeyatelnosti/FindByDescr/{Descr}")]
	public class VidyObshhestvennoPoleznojjDeyatelnostiRequest/*ВидыОбщественноПолезнойДеятельностиЗапрос*/: V82.СправочникиСсылка.ВидыОбщественноПолезнойДеятельности,IReturn<VidyObshhestvennoPoleznojjDeyatelnostiRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyObshhestvennoPoleznojjDeyatelnostiResponse//ВидыОбщественноПолезнойДеятельностиОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyObshhestvennoPoleznojjDeyatelnostis")]
	[Route("/Catalogs/VidyObshhestvennoPoleznojjDeyatelnostis/{Codes}")]
	public class VidyObshhestvennoPoleznojjDeyatelnostisRequest/*ВидыОбщественноПолезнойДеятельностиЗапрос*/: IReturn<List<VidyObshhestvennoPoleznojjDeyatelnostiRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyObshhestvennoPoleznojjDeyatelnostisRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyObshhestvennoPoleznojjDeyatelnostisResponse//ВидыОбщественноПолезнойДеятельностиОтвет
	{
		public string Result {get;set;}
	}


	public class VidyObshhestvennoPoleznojjDeyatelnostiService /*ВидыОбщественноПолезнойДеятельностиСервис*/ : Service
	{
		public object Any(VidyObshhestvennoPoleznojjDeyatelnostiRequest request)
		{
			return new VidyObshhestvennoPoleznojjDeyatelnostiResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyObshhestvennoPoleznojjDeyatelnostiRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ВидыОбщественноПолезнойДеятельности.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyObshhestvennoPoleznojjDeyatelnostiResponse() {Result = "ВидыОбщественноПолезнойДеятельности c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyObshhestvennoPoleznojjDeyatelnostisRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыОбщественноПолезнойДеятельности>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ВидыОбщественноПолезнойДеятельности.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}