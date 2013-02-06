
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VidyNalogovykhOrganov")]
	[Route("/Catalogs/VidyNalogovykhOrganov/{Code}")]
	public class VidyNalogovykhOrganovRequest/*ВидыНалоговыхОргановЗапрос*/: V82.СправочникиСсылка.ВидыНалоговыхОрганов,IReturn<VidyNalogovykhOrganovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidyNalogovykhOrganovResponse//ВидыНалоговыхОргановОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidyNalogovykhOrganovs")]
	[Route("/Catalogs/VidyNalogovykhOrganovs/{Codes}")]
	public class VidyNalogovykhOrganovsRequest/*ВидыНалоговыхОргановЗапрос*/: IReturn<List<VidyNalogovykhOrganovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidyNalogovykhOrganovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidyNalogovykhOrganovsResponse//ВидыНалоговыхОргановОтвет
	{
		public string Result {get;set;}
	}


	public class VidyNalogovykhOrganovService /*ВидыНалоговыхОргановСервис*/ : Service
	{
		public object Any(VidyNalogovykhOrganovRequest request)
		{
			return new VidyNalogovykhOrganovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidyNalogovykhOrganovRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ВидыНалоговыхОрганов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new VidyNalogovykhOrganovResponse() {Result = "ВидыНалоговыхОрганов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(VidyNalogovykhOrganovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВидыНалоговыхОрганов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ВидыНалоговыхОрганов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
