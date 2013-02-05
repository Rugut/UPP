
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/NalogovyeOrgany")]
	[Route("/Catalogs/NalogovyeOrgany/{Code}")]
	public class NalogovyeOrganyRequest/*НалоговыеОрганыЗапрос*/: V82.СправочникиСсылка.НалоговыеОрганы,IReturn<NalogovyeOrganyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NalogovyeOrganyResponse//НалоговыеОрганыОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NalogovyeOrganys")]
	[Route("/Catalogs/NalogovyeOrganys/{Codes}")]
	public class NalogovyeOrganysRequest/*НалоговыеОрганыЗапрос*/: IReturn<List<NalogovyeOrganyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NalogovyeOrganysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NalogovyeOrganysResponse//НалоговыеОрганыОтвет
	{
		public string Result {get;set;}
	}


	public class NalogovyeOrganyService /*НалоговыеОрганыСервис*/ : Service
	{
		public object Any(NalogovyeOrganyRequest request)
		{
			return new NalogovyeOrganyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NalogovyeOrganyRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.НалоговыеОрганы.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new NalogovyeOrganyResponse() {Result = "НалоговыеОрганы c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(NalogovyeOrganysRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.НалоговыеОрганы>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.НалоговыеОрганы.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
