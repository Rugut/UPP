
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/EHlektronnyePredstavleniyaReglamentirovannykhOtchetov")]
	[Route("/Catalogs/EHlektronnyePredstavleniyaReglamentirovannykhOtchetov/{Code}")]
	public class EHlektronnyePredstavleniyaReglamentirovannykhOtchetovRequest/*ЭлектронныеПредставленияРегламентированныхОтчетовЗапрос*/: V82.СправочникиСсылка.ЭлектронныеПредставленияРегламентированныхОтчетов,IReturn<EHlektronnyePredstavleniyaReglamentirovannykhOtchetovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class EHlektronnyePredstavleniyaReglamentirovannykhOtchetovResponse//ЭлектронныеПредставленияРегламентированныхОтчетовОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/EHlektronnyePredstavleniyaReglamentirovannykhOtchetovs")]
	[Route("/Catalogs/EHlektronnyePredstavleniyaReglamentirovannykhOtchetovs/{Codes}")]
	public class EHlektronnyePredstavleniyaReglamentirovannykhOtchetovsRequest/*ЭлектронныеПредставленияРегламентированныхОтчетовЗапрос*/: IReturn<List<EHlektronnyePredstavleniyaReglamentirovannykhOtchetovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public EHlektronnyePredstavleniyaReglamentirovannykhOtchetovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class EHlektronnyePredstavleniyaReglamentirovannykhOtchetovsResponse//ЭлектронныеПредставленияРегламентированныхОтчетовОтвет
	{
		public string Result {get;set;}
	}


	public class EHlektronnyePredstavleniyaReglamentirovannykhOtchetovService /*ЭлектронныеПредставленияРегламентированныхОтчетовСервис*/ : Service
	{
		public object Any(EHlektronnyePredstavleniyaReglamentirovannykhOtchetovRequest request)
		{
			return new EHlektronnyePredstavleniyaReglamentirovannykhOtchetovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(EHlektronnyePredstavleniyaReglamentirovannykhOtchetovRequest request)
		{
			string СтрокаКод = request.Code;
			var Ссылка = V82.Справочники.ЭлектронныеПредставленияРегламентированныхОтчетов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new EHlektronnyePredstavleniyaReglamentirovannykhOtchetovResponse() {Result = "ЭлектронныеПредставленияРегламентированныхОтчетов c кодом '" + request.Code+"' не найдено."};
			}
			return Ссылка;
		}

		public object Get(EHlektronnyePredstavleniyaReglamentirovannykhOtchetovsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ЭлектронныеПредставленияРегламентированныхОтчетов>();
			foreach (var Code in request.Codes)
			{
				string СтрокаКод = Code;
				var Ссылка = V82.Справочники.ЭлектронныеПредставленияРегламентированныхОтчетов.НайтиПоКоду(СтрокаКод);
				if (Ссылка != null)
				{
					Коллекция.Add(Ссылка);
				}
			}
			return Коллекция;
		}

	}
}
