
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/DokumentyRealizaciiPolnomochijjNalogovykhOrganov")]
	[Route("/Catalogs/DokumentyRealizaciiPolnomochijjNalogovykhOrganov/FindById/{Id}")]
	[Route("/Catalogs/DokumentyRealizaciiPolnomochijjNalogovykhOrganov/FindByCode/{Code}")]
	[Route("/Catalogs/DokumentyRealizaciiPolnomochijjNalogovykhOrganov/FindByDescr/{Descr}")]
	public class DokumentyRealizaciiPolnomochijjNalogovykhOrganovRequest/*ДокументыРеализацииПолномочийНалоговыхОргановЗапрос*/: V82.СправочникиСсылка.ДокументыРеализацииПолномочийНалоговыхОрганов,IReturn<DokumentyRealizaciiPolnomochijjNalogovykhOrganovRequest>
	{
		public string Id { get; set; }
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class DokumentyRealizaciiPolnomochijjNalogovykhOrganovResponse//ДокументыРеализацииПолномочийНалоговыхОргановОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/DokumentyRealizaciiPolnomochijjNalogovykhOrganovs")]
	[Route("/Catalogs/DokumentyRealizaciiPolnomochijjNalogovykhOrganovs/{Codes}")]
	public class DokumentyRealizaciiPolnomochijjNalogovykhOrganovsRequest/*ДокументыРеализацииПолномочийНалоговыхОргановЗапрос*/: IReturn<List<DokumentyRealizaciiPolnomochijjNalogovykhOrganovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public DokumentyRealizaciiPolnomochijjNalogovykhOrganovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class DokumentyRealizaciiPolnomochijjNalogovykhOrganovsResponse//ДокументыРеализацииПолномочийНалоговыхОргановОтвет
	{
		public string Result {get;set;}
	}


	public class DokumentyRealizaciiPolnomochijjNalogovykhOrganovService /*ДокументыРеализацииПолномочийНалоговыхОргановСервис*/ : Service
	{
		public object Any(DokumentyRealizaciiPolnomochijjNalogovykhOrganovRequest request)
		{
			return new DokumentyRealizaciiPolnomochijjNalogovykhOrganovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(DokumentyRealizaciiPolnomochijjNalogovykhOrganovRequest request)
		{
			string СтрокаКод = System.Uri.UnescapeDataString(request.Code);
			var Ссылка = V82.Справочники.ДокументыРеализацииПолномочийНалоговыхОрганов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new DokumentyRealizaciiPolnomochijjNalogovykhOrganovResponse() {Result = "ДокументыРеализацииПолномочийНалоговыхОрганов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(DokumentyRealizaciiPolnomochijjNalogovykhOrganovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ДокументыРеализацииПолномочийНалоговыхОрганов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = System.Uri.UnescapeDataString(Code);
				var Ссылка = V82.Справочники.ДокументыРеализацииПолномочийНалоговыхОрганов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}