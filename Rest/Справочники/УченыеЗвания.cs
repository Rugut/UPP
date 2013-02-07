
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/UchenyeZvaniya")]
	[Route("/Catalogs/UchenyeZvaniya/FindById/{Id}")]
	[Route("/Catalogs/UchenyeZvaniya/FindByCode/{Code}")]
	[Route("/Catalogs/UchenyeZvaniya/FindByDescr/{Descr}")]
	public class UchenyeZvaniyaRequest/*УченыеЗванияЗапрос*/: V82.СправочникиСсылка.УченыеЗвания,IReturn<UchenyeZvaniyaRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class UchenyeZvaniyaResponse//УченыеЗванияОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/UchenyeZvaniyas")]
	[Route("/Catalogs/UchenyeZvaniyas/{Codes}")]
	public class UchenyeZvaniyasRequest/*УченыеЗванияЗапрос*/: IReturn<List<UchenyeZvaniyaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public UchenyeZvaniyasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class UchenyeZvaniyasResponse//УченыеЗванияОтвет
	{
		public string Result {get;set;}
	}


	public class UchenyeZvaniyaService /*УченыеЗванияСервис*/ : Service
	{
		public object Any(UchenyeZvaniyaRequest request)
		{
			return new UchenyeZvaniyaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(UchenyeZvaniyaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.УченыеЗвания.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new UchenyeZvaniyaResponse() {Result = "УченыеЗвания c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(UchenyeZvaniyasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.УченыеЗвания>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.УченыеЗвания.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}