
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/UdalitOcenochnyeObyazatelstva")]
	[Route("/Catalogs/UdalitOcenochnyeObyazatelstva/{Code}")]
	public class UdalitOcenochnyeObyazatelstvaRequest/*УдалитьОценочныеОбязательстваЗапрос*/: V82.СправочникиСсылка.УдалитьОценочныеОбязательства,IReturn<UdalitOcenochnyeObyazatelstvaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class UdalitOcenochnyeObyazatelstvaResponse//УдалитьОценочныеОбязательстваОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/UdalitOcenochnyeObyazatelstvas")]
	[Route("/Catalogs/UdalitOcenochnyeObyazatelstvas/{Codes}")]
	public class UdalitOcenochnyeObyazatelstvasRequest/*УдалитьОценочныеОбязательстваЗапрос*/: IReturn<List<UdalitOcenochnyeObyazatelstvaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public UdalitOcenochnyeObyazatelstvasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class UdalitOcenochnyeObyazatelstvasResponse//УдалитьОценочныеОбязательстваОтвет
	{
		public string Result {get;set;}
	}


	public class UdalitOcenochnyeObyazatelstvaService /*УдалитьОценочныеОбязательстваСервис*/ : Service
	{
		public object Any(UdalitOcenochnyeObyazatelstvaRequest request)
		{
			return new UdalitOcenochnyeObyazatelstvaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(UdalitOcenochnyeObyazatelstvaRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.УдалитьОценочныеОбязательства.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new UdalitOcenochnyeObyazatelstvaResponse() {Result = "УдалитьОценочныеОбязательства c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(UdalitOcenochnyeObyazatelstvasRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.УдалитьОценочныеОбязательства>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.УдалитьОценочныеОбязательства.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
