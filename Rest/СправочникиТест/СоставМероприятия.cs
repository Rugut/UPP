
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СоставМероприятия:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СоставМероприятияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СоставМероприятия/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СоставМероприятияЗапрос СоставМероприятияЗапрос = null;
			try
			{
				СоставМероприятияЗапрос = Клиент.Get(new СоставМероприятияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СоставМероприятияЗапрос;
		}
		public static СоставМероприятияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/СоставМероприятия/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СоставМероприятияЗапрос СоставМероприятияЗапрос = null;
			try
			{
				СоставМероприятияЗапрос = Клиент.Get(new СоставМероприятияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СоставМероприятияЗапрос;
		}
		public static СоставМероприятияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СоставМероприятия/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СоставМероприятияЗапрос СоставМероприятияЗапрос = null;
			try
			{
				СоставМероприятияЗапрос = Клиент.Get(new СоставМероприятияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СоставМероприятияЗапрос;
		}
		public static void ЗаписатьНовый(СоставМероприятияЗапрос СоставМероприятияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/СоставМероприятия?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СоставМероприятияОтвет = Клиент.Post(СоставМероприятияЗапрос);
		}
		public static void Записать(СоставМероприятияЗапрос СоставМероприятияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/СоставМероприятия?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СоставМероприятияОтвет = Клиент.Put(СоставМероприятияЗапрос);
		}
		public static void Удалить(СоставМероприятияЗапрос СоставМероприятияЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/СоставМероприятия?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СоставМероприятияОтвет = Клиент.Delete(СоставМероприятияЗапрос);
		}
	}
}