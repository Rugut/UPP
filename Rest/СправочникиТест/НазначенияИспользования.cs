
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НазначенияИспользования:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НазначенияИспользованияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияИспользования/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НазначенияИспользованияЗапрос НазначенияИспользованияЗапрос = null;
			try
			{
				НазначенияИспользованияЗапрос = Клиент.Get(new НазначенияИспользованияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НазначенияИспользованияЗапрос;
		}
		public static НазначенияИспользованияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияИспользования/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НазначенияИспользованияЗапрос НазначенияИспользованияЗапрос = null;
			try
			{
				НазначенияИспользованияЗапрос = Клиент.Get(new НазначенияИспользованияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НазначенияИспользованияЗапрос;
		}
		public static НазначенияИспользованияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияИспользования/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НазначенияИспользованияЗапрос НазначенияИспользованияЗапрос = null;
			try
			{
				НазначенияИспользованияЗапрос = Клиент.Get(new НазначенияИспользованияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НазначенияИспользованияЗапрос;
		}
		public static void ЗаписатьНовый(НазначенияИспользованияЗапрос НазначенияИспользованияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияИспользования?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НазначенияИспользованияОтвет = Клиент.Post(НазначенияИспользованияЗапрос);
		}
		public static void Записать(НазначенияИспользованияЗапрос НазначенияИспользованияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияИспользования?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НазначенияИспользованияОтвет = Клиент.Put(НазначенияИспользованияЗапрос);
		}
		public static void Удалить(НазначенияИспользованияЗапрос НазначенияИспользованияЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияИспользования?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НазначенияИспользованияОтвет = Клиент.Delete(НазначенияИспользованияЗапрос);
		}
	}
}