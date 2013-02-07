
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyObsluzhivaniyaOsnovnykhSredstv")]
	[Route("/Catalogs/VidyObsluzhivaniyaOsnovnykhSredstv/FindById/{Id}")]
	[Route("/Catalogs/VidyObsluzhivaniyaOsnovnykhSredstv/FindByCode/{Code}")]
	[Route("/Catalogs/VidyObsluzhivaniyaOsnovnykhSredstv/FindByDescr/{Descr}")]
	public class VidyObsluzhivaniyaOsnovnykhSredstvRequest/*ВидыОбслуживанияОсновныхСредствЗапрос*/: V82.СправочникиСсылка.ВидыОбслуживанияОсновныхСредств,IReturn<VidyObsluzhivaniyaOsnovnykhSredstvRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyObsluzhivaniyaOsnovnykhSredstvResponse//ВидыОбслуживанияОсновныхСредствОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyObsluzhivaniyaOsnovnykhSredstvs")]
	[Route("/Catalogs/VidyObsluzhivaniyaOsnovnykhSredstvs/{Codes}")]
	public class VidyObsluzhivaniyaOsnovnykhSredstvsRequest/*ВидыОбслуживанияОсновныхСредствЗапрос*/: IReturn<List<VidyObsluzhivaniyaOsnovnykhSredstvRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyObsluzhivaniyaOsnovnykhSredstvsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyObsluzhivaniyaOsnovnykhSredstvsResponse//ВидыОбслуживанияОсновныхСредствОтвет
	{
		public string Result {get;set;}
	}


	public class VidyObsluzhivaniyaOsnovnykhSredstvService /*ВидыОбслуживанияОсновныхСредствСервис*/ : Service
	{
		public object Any(VidyObsluzhivaniyaOsnovnykhSredstvRequest request)
		{
			return new VidyObsluzhivaniyaOsnovnykhSredstvResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyObsluzhivaniyaOsnovnykhSredstvRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ВидыОбслуживанияОсновныхСредств.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyObsluzhivaniyaOsnovnykhSredstvResponse() {Result = "ВидыОбслуживанияОсновныхСредств c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyObsluzhivaniyaOsnovnykhSredstvsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыОбслуживанияОсновныхСредств>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ВидыОбслуживанияОсновныхСредств.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}