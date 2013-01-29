
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/UdalitOcenochnyeObyazatelstva")]
	[Route("/Catalogs/UdalitOcenochnyeObyazatelstva/{Code}")]
	public class UdalitOcenochnyeObyazatelstvaRequest/*”далитьќценочныеќб€зательства«апрос*/: V82.—правочники—сылка.”далитьќценочныеќб€зательства,IReturn<UdalitOcenochnyeObyazatelstvaRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class UdalitOcenochnyeObyazatelstvaResponse//”далитьќценочныеќб€зательстваќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/UdalitOcenochnyeObyazatelstvas")]
	[Route("/Catalogs/UdalitOcenochnyeObyazatelstvas/{Codes}")]
	public class UdalitOcenochnyeObyazatelstvasRequest/*”далитьќценочныеќб€зательства«апрос*/: IReturn<List<UdalitOcenochnyeObyazatelstvaRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public UdalitOcenochnyeObyazatelstvasRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class UdalitOcenochnyeObyazatelstvasResponse//”далитьќценочныеќб€зательстваќтвет
	{
		public string Result {get;set;}
	}


	public class UdalitOcenochnyeObyazatelstvaService /*”далитьќценочныеќб€зательства—ервис*/ : Service
	{
		public object Any(UdalitOcenochnyeObyazatelstvaRequest request)
		{
			return new UdalitOcenochnyeObyazatelstvaResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(UdalitOcenochnyeObyazatelstvaRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.”далитьќценочныеќб€зательства.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new UdalitOcenochnyeObyazatelstvaResponse() {Result = "”далитьќценочныеќб€зательства c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.”далитьќценочныеќб€зательства.Ќайтиѕо оду(1);
			}
		}

		public object Get(UdalitOcenochnyeObyazatelstvasRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.”далитьќценочныеќб€зательства>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.”далитьќценочныеќб€зательства.Ќайтиѕо оду(—трока од);
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
