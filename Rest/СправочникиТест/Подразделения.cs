
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Подразделения:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПодразделенияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Подразделения/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПодразделенияЗапрос ПодразделенияЗапрос = null;
			try
			{
				ПодразделенияЗапрос = Клиент.Get(new ПодразделенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПодразделенияЗапрос;
		}
		public static ПодразделенияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Подразделения/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПодразделенияЗапрос ПодразделенияЗапрос = null;
			try
			{
				ПодразделенияЗапрос = Клиент.Get(new ПодразделенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПодразделенияЗапрос;
		}
		public static ПодразделенияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Подразделения/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПодразделенияЗапрос ПодразделенияЗапрос = null;
			try
			{
				ПодразделенияЗапрос = Клиент.Get(new ПодразделенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПодразделенияЗапрос;
		}
		public static void ЗаписатьНовый(ПодразделенияЗапрос ПодразделенияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Подразделения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПодразделенияОтвет = Клиент.Post(ПодразделенияЗапрос);
		}
		public static void Записать(ПодразделенияЗапрос ПодразделенияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Подразделения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПодразделенияОтвет = Клиент.Put(ПодразделенияЗапрос);
		}
		public static void Удалить(ПодразделенияЗапрос ПодразделенияЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Подразделения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПодразделенияОтвет = Клиент.Delete(ПодразделенияЗапрос);
		}
	}
}