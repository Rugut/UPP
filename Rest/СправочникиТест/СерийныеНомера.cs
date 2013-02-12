
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СерийныеНомера:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СерийныеНомераЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СерийныеНомера/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СерийныеНомераЗапрос СерийныеНомераЗапрос = null;
			try
			{
				СерийныеНомераЗапрос = Клиент.Get(new СерийныеНомераЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СерийныеНомераЗапрос;
		}
		public static СерийныеНомераЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/СерийныеНомера/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СерийныеНомераЗапрос СерийныеНомераЗапрос = null;
			try
			{
				СерийныеНомераЗапрос = Клиент.Get(new СерийныеНомераЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СерийныеНомераЗапрос;
		}
		public static void ЗаписатьНовый(СерийныеНомераЗапрос СерийныеНомераЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/СерийныеНомера?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СерийныеНомераОтвет = Клиент.Post(СерийныеНомераЗапрос);
		}
		public static void Записать(СерийныеНомераЗапрос СерийныеНомераЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/СерийныеНомера?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СерийныеНомераОтвет = Клиент.Put(СерийныеНомераЗапрос);
		}
		public static void Удалить(СерийныеНомераЗапрос СерийныеНомераЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/СерийныеНомера?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СерийныеНомераОтвет = Клиент.Delete(СерийныеНомераЗапрос);
		}
	}
}