
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.—правочники
{
	[Route("/Catalogs/NaznachenieCelevykhSredstv")]
	[Route("/Catalogs/NaznachenieCelevykhSredstv/{Code}")]
	public class NaznachenieCelevykhSredstvRequest/*Ќазначение÷елевых—редств«апрос*/: V82.—правочники—сылка.Ќазначение÷елевых—редств,IReturn<NaznachenieCelevykhSredstvRequest>
	{
		public string Code {get;set;}
		public string Descr {get;set;}
	}

	public class NaznachenieCelevykhSredstvResponse//Ќазначение÷елевых—редствќтвет
	{
		public string Result {get;set;}
	}


	[Route("/Catalogs/NaznachenieCelevykhSredstvs")]
	[Route("/Catalogs/NaznachenieCelevykhSredstvs/{Codes}")]
	public class NaznachenieCelevykhSredstvsRequest/*Ќазначение÷елевых—редств«апрос*/: IReturn<List<NaznachenieCelevykhSredstvRequest>>
	{
		public string[] Codes {get;set;}
		public string[] Descrs {get;set;}
		public NaznachenieCelevykhSredstvsRequest(params string[] Codes)
		{
			this.Codes = Codes;
		}
	}

	public class NaznachenieCelevykhSredstvsResponse//Ќазначение÷елевых—редствќтвет
	{
		public string Result {get;set;}
	}


	public class NaznachenieCelevykhSredstvService /*Ќазначение÷елевых—редств—ервис*/ : Service
	{
		public object Any(NaznachenieCelevykhSredstvRequest request)
		{
			return new NaznachenieCelevykhSredstvResponse {Result = "Tovar, " + request.Code};
		}

		public object Get(NaznachenieCelevykhSredstvRequest request)
		{
			decimal —трока од = 0;
			if (decimal.TryParse(request.Code, out —трока од))
			{
				var —сылка = V82.—правочники.Ќазначение÷елевых—редств.Ќайтиѕо оду(—трока од);
				if (—сылка == null)
				{
					return new NaznachenieCelevykhSredstvResponse() {Result = "Ќазначение÷елевых—редств c кодом '" + request.Code+"' не найдено."};
				}
				return —сылка;
			}
			else
			{
				return V82.—правочники.Ќазначение÷елевых—редств.Ќайтиѕо оду(1);
			}
		}

		public object Get(NaznachenieCelevykhSredstvsRequest request)
		{
			var  оллекци€ = new List<V82.—правочники—сылка.Ќазначение÷елевых—редств>();
			foreach (var Code in request.Codes)
			{
				decimal —трока од = 0;
				if (decimal.TryParse(Code, out —трока од))
				{
					var —сылка = V82.—правочники.Ќазначение÷елевых—редств.Ќайтиѕо оду(—трока од);
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
