
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/VidySchetchikovDlyaZnachenijjRazryadov")]
	[Route("/Catalogs/VidySchetchikovDlyaZnachenijjRazryadov/{Code}")]
	public class VidySchetchikovDlyaZnachenijjRazryadovRequest/*¬иды—четчиковƒл€«начений–азр€дов«апрос*/: V82.—правочники—сылка.¬иды—четчиковƒл€«начений–азр€дов,IReturn<VidySchetchikovDlyaZnachenijjRazryadovRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class VidySchetchikovDlyaZnachenijjRazryadovResponse//¬иды—четчиковƒл€«начений–азр€довќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/VidySchetchikovDlyaZnachenijjRazryadovs")]
	[Route("/Catalogs/VidySchetchikovDlyaZnachenijjRazryadovs/{Codes}")]
	public class VidySchetchikovDlyaZnachenijjRazryadovsRequest/*¬иды—четчиковƒл€«начений–азр€дов«апрос*/: IReturn<List<VidySchetchikovDlyaZnachenijjRazryadovRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public VidySchetchikovDlyaZnachenijjRazryadovsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class VidySchetchikovDlyaZnachenijjRazryadovsResponse//¬иды—четчиковƒл€«начений–азр€довќтвет
	{
		public string Result {get;set;}
	}


	public class VidySchetchikovDlyaZnachenijjRazryadovService /*¬иды—четчиковƒл€«начений–азр€дов—ервис*/ : Service
	{
		public object Any(VidySchetchikovDlyaZnachenijjRazryadovRequest request)
		{
			return new VidySchetchikovDlyaZnachenijjRazryadovResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(VidySchetchikovDlyaZnachenijjRazryadovRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.¬иды—четчиковƒл€«начений–азр€дов.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new VidySchetchikovDlyaZnachenijjRazryadovResponse() {Result = "¬иды—четчиковƒл€«начений–азр€дов c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.¬иды—четчиковƒл€«начений–азр€дов.Ќайтиѕо оду(1);
			}
		}

		public object Get(VidySchetchikovDlyaZnachenijjRazryadovsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.¬иды—четчиковƒл€«начений–азр€дов>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.¬иды—четчиковƒл€«начений–азр€дов.Ќайтиѕо оду(—трока од);
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
