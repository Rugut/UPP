
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Мероприятия:V82.Rest.СправочникиТест.СправочникТест
	{
		public static МероприятияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Мероприятия/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			МероприятияЗапрос МероприятияЗапрос = null;
			try
			{
				МероприятияЗапрос = Клиент.Get(new МероприятияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return МероприятияЗапрос;
		}
		public static МероприятияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/Мероприятия/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			МероприятияЗапрос МероприятияЗапрос = null;
			try
			{
				МероприятияЗапрос = Клиент.Get(new МероприятияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return МероприятияЗапрос;
		}
		public static МероприятияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Мероприятия/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			МероприятияЗапрос МероприятияЗапрос = null;
			try
			{
				МероприятияЗапрос = Клиент.Get(new МероприятияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return МероприятияЗапрос;
		}
		public static void ЗаписатьНовый(МероприятияЗапрос МероприятияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/Мероприятия?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var МероприятияОтвет = Клиент.Post(МероприятияЗапрос);
		}
		public static void Записать(МероприятияЗапрос МероприятияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/Мероприятия?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var МероприятияОтвет = Клиент.Put(МероприятияЗапрос);
		}
		public static void Удалить(МероприятияЗапрос МероприятияЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/Мероприятия?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var МероприятияОтвет = Клиент.Delete(МероприятияЗапрос);
		}
	}
}