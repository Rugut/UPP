
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VlozheniyaEHlektronnykhPisem")]
	[Route("/Catalogs/VlozheniyaEHlektronnykhPisem/{Code}")]
	public class VlozheniyaEHlektronnykhPisemRequest/*ВложенияЭлектронныхПисемЗапрос*/: V82.СправочникиСсылка.ВложенияЭлектронныхПисем,IReturn<VlozheniyaEHlektronnykhPisemRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VlozheniyaEHlektronnykhPisemResponse//ВложенияЭлектронныхПисемОтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VlozheniyaEHlektronnykhPisems")]
	[Route("/Catalogs/VlozheniyaEHlektronnykhPisems/{Codes}")]
	public class VlozheniyaEHlektronnykhPisemsRequest/*ВложенияЭлектронныхПисемЗапрос*/: IReturn<List<VlozheniyaEHlektronnykhPisemRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VlozheniyaEHlektronnykhPisemsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VlozheniyaEHlektronnykhPisemsResponse//ВложенияЭлектронныхПисемОтвет
	{
		public string Result {get;set;}
	}


	public class VlozheniyaEHlektronnykhPisemService /*ВложенияЭлектронныхПисемСервис*/ : Service
	{
		public object Any(VlozheniyaEHlektronnykhPisemRequest request)
		{
			return new VlozheniyaEHlektronnykhPisemResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VlozheniyaEHlektronnykhPisemRequest request)
		{
			decimal СтрокаКод = 0;
			if (decimal.TryParse(request.Code, out СтрокаКод))
			{
				var Ссылка = V82.Справочники.ВложенияЭлектронныхПисем.НайтиПоКоду(СтрокаКод);
				if (Ссылка == null)
				{
					return new VlozheniyaEHlektronnykhPisemResponse() {Result = "ВложенияЭлектронныхПисем c кодом '" + request.Code+"' не найдено."};
				}
				return Ссылка;
			}
			else
			{
				return V82.Справочники.ВложенияЭлектронныхПисем.НайтиПоКоду(1);
			}
		}

		public object Get(VlozheniyaEHlektronnykhPisemsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВложенияЭлектронныхПисем>();
			foreach (var Code in request.Codes)
			{
				decimal СтрокаКод = 0;
				if (decimal.TryParse(Code, out СтрокаКод))
				{
					var Ссылка = V82.Справочники.ВложенияЭлектронныхПисем.НайтиПоКоду(СтрокаКод);
					if (Ссылка != null)
					{
						Коллекция.Add(Ссылка);
					}
				}
			}
			return Коллекция;
		}

	}
}
