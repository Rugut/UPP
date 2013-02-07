
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	[Route("/Catalogs/VlozheniyaEHlektronnykhPisem")]
	[Route("/Catalogs/VlozheniyaEHlektronnykhPisem/FindById/{Id}")]
	[Route("/Catalogs/VlozheniyaEHlektronnykhPisem/FindByCode/{Code}")]
	[Route("/Catalogs/VlozheniyaEHlektronnykhPisem/FindByDescr/{Descr}")]
	public class VlozheniyaEHlektronnykhPisemRequest/*ВложенияЭлектронныхПисемЗапрос*/: V82.СправочникиСсылка.ВложенияЭлектронныхПисем,IReturn<VlozheniyaEHlektronnykhPisemRequest>
	{
		public string Id { get; set; }
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
			return null;
		}

		public object Get(VlozheniyaEHlektronnykhPisemsRequest request)
		{
			var Коллекция = new List<V82.СправочникиСсылка.ВложенияЭлектронныхПисем>();
			foreach (var Code in request.Codes)
			{
					Коллекция.Add(null);
			}
			return Коллекция;
		}

	}
}