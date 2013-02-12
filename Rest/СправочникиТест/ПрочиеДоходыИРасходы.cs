
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПрочиеДоходыИРасходы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПрочиеДоходыИРасходыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПрочиеДоходыИРасходы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрочиеДоходыИРасходыЗапрос ПрочиеДоходыИРасходыЗапрос = null;
			try
			{
				ПрочиеДоходыИРасходыЗапрос = Клиент.Get(new ПрочиеДоходыИРасходыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрочиеДоходыИРасходыЗапрос;
		}
		public static ПрочиеДоходыИРасходыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ПрочиеДоходыИРасходы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрочиеДоходыИРасходыЗапрос ПрочиеДоходыИРасходыЗапрос = null;
			try
			{
				ПрочиеДоходыИРасходыЗапрос = Клиент.Get(new ПрочиеДоходыИРасходыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрочиеДоходыИРасходыЗапрос;
		}
		public static ПрочиеДоходыИРасходыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПрочиеДоходыИРасходы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрочиеДоходыИРасходыЗапрос ПрочиеДоходыИРасходыЗапрос = null;
			try
			{
				ПрочиеДоходыИРасходыЗапрос = Клиент.Get(new ПрочиеДоходыИРасходыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрочиеДоходыИРасходыЗапрос;
		}
		public static void ЗаписатьНовый(ПрочиеДоходыИРасходыЗапрос ПрочиеДоходыИРасходыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ПрочиеДоходыИРасходы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрочиеДоходыИРасходыОтвет = Клиент.Post(ПрочиеДоходыИРасходыЗапрос);
		}
		public static void Записать(ПрочиеДоходыИРасходыЗапрос ПрочиеДоходыИРасходыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ПрочиеДоходыИРасходы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрочиеДоходыИРасходыОтвет = Клиент.Put(ПрочиеДоходыИРасходыЗапрос);
		}
		public static void Удалить(ПрочиеДоходыИРасходыЗапрос ПрочиеДоходыИРасходыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ПрочиеДоходыИРасходы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрочиеДоходыИРасходыОтвет = Клиент.Delete(ПрочиеДоходыИРасходыЗапрос);
		}
	}
}