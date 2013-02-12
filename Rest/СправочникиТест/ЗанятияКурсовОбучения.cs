
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ЗанятияКурсовОбучения:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ЗанятияКурсовОбученияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ЗанятияКурсовОбучения/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЗанятияКурсовОбученияЗапрос ЗанятияКурсовОбученияЗапрос = null;
			try
			{
				ЗанятияКурсовОбученияЗапрос = Клиент.Get(new ЗанятияКурсовОбученияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЗанятияКурсовОбученияЗапрос;
		}
		public static ЗанятияКурсовОбученияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ЗанятияКурсовОбучения/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЗанятияКурсовОбученияЗапрос ЗанятияКурсовОбученияЗапрос = null;
			try
			{
				ЗанятияКурсовОбученияЗапрос = Клиент.Get(new ЗанятияКурсовОбученияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЗанятияКурсовОбученияЗапрос;
		}
		public static void ЗаписатьНовый(ЗанятияКурсовОбученияЗапрос ЗанятияКурсовОбученияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ЗанятияКурсовОбучения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЗанятияКурсовОбученияОтвет = Клиент.Post(ЗанятияКурсовОбученияЗапрос);
		}
		public static void Записать(ЗанятияКурсовОбученияЗапрос ЗанятияКурсовОбученияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ЗанятияКурсовОбучения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЗанятияКурсовОбученияОтвет = Клиент.Put(ЗанятияКурсовОбученияЗапрос);
		}
		public static void Удалить(ЗанятияКурсовОбученияЗапрос ЗанятияКурсовОбученияЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ЗанятияКурсовОбучения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЗанятияКурсовОбученияОтвет = Клиент.Delete(ЗанятияКурсовОбученияЗапрос);
		}
	}
}