
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СценарииПланирования:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СценарииПланированияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СценарииПланирования/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СценарииПланированияЗапрос СценарииПланированияЗапрос = null;
			try
			{
				СценарииПланированияЗапрос = Клиент.Get(new СценарииПланированияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СценарииПланированияЗапрос;
		}
		public static СценарииПланированияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/СценарииПланирования/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СценарииПланированияЗапрос СценарииПланированияЗапрос = null;
			try
			{
				СценарииПланированияЗапрос = Клиент.Get(new СценарииПланированияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СценарииПланированияЗапрос;
		}
		public static СценарииПланированияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СценарииПланирования/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СценарииПланированияЗапрос СценарииПланированияЗапрос = null;
			try
			{
				СценарииПланированияЗапрос = Клиент.Get(new СценарииПланированияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СценарииПланированияЗапрос;
		}
		public static void ЗаписатьНовый(СценарииПланированияЗапрос СценарииПланированияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/СценарииПланирования?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СценарииПланированияОтвет = Клиент.Post(СценарииПланированияЗапрос);
		}
		public static void Записать(СценарииПланированияЗапрос СценарииПланированияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/СценарииПланирования?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СценарииПланированияОтвет = Клиент.Put(СценарииПланированияЗапрос);
		}
		public static void Удалить(СценарииПланированияЗапрос СценарииПланированияЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/СценарииПланирования?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СценарииПланированияОтвет = Клиент.Delete(СценарииПланированияЗапрос);
		}
	}
}