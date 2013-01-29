
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/GruppyPisemEHlektronnojjPochty")]
	[Route("/Catalogs/GruppyPisemEHlektronnojjPochty/{Code}")]
	public class GruppyPisemEHlektronnojjPochtyRequest/*√руппыѕисемЁлектроннойѕочты«апрос*/: V82.—правочники—сылка.√руппыѕисемЁлектроннойѕочты,IReturn<GruppyPisemEHlektronnojjPochtyRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class GruppyPisemEHlektronnojjPochtyResponse//√руппыѕисемЁлектроннойѕочтыќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/GruppyPisemEHlektronnojjPochtys")]
	[Route("/Catalogs/GruppyPisemEHlektronnojjPochtys/{Codes}")]
	public class GruppyPisemEHlektronnojjPochtysRequest/*√руппыѕисемЁлектроннойѕочты«апрос*/: IReturn<List<GruppyPisemEHlektronnojjPochtyRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public GruppyPisemEHlektronnojjPochtysRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class GruppyPisemEHlektronnojjPochtysResponse//√руппыѕисемЁлектроннойѕочтыќтвет
	{
		public string Result {get;set;}
	}


	public class GruppyPisemEHlektronnojjPochtyService /*√руппыѕисемЁлектроннойѕочты—ервис*/ : Service
	{
		public object Any(GruppyPisemEHlektronnojjPochtyRequest request)
		{
			return new GruppyPisemEHlektronnojjPochtyResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(GruppyPisemEHlektronnojjPochtyRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.√руппыѕисемЁлектроннойѕочты.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new GruppyPisemEHlektronnojjPochtyResponse() {Result = "√руппыѕисемЁлектроннойѕочты c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.√руппыѕисемЁлектроннойѕочты.Ќайтиѕо оду(1);
			}
		}

		public object Get(GruppyPisemEHlektronnojjPochtysRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.√руппыѕисемЁлектроннойѕочты>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.√руппыѕисемЁлектроннойѕочты.Ќайтиѕо оду(—трока од);
					if (—сылка != null)
					{
						 оллекци€.Add(—сылка);
					}
				}
			}
			return  оллекци€;
		}

	}
}
