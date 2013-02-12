
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СтепениЗнанияЯзыка:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СтепениЗнанияЯзыкаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СтепениЗнанияЯзыка/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтепениЗнанияЯзыкаЗапрос СтепениЗнанияЯзыкаЗапрос = null;
			try
			{
				СтепениЗнанияЯзыкаЗапрос = Клиент.Get(new СтепениЗнанияЯзыкаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтепениЗнанияЯзыкаЗапрос;
		}
		public static СтепениЗнанияЯзыкаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/СтепениЗнанияЯзыка/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтепениЗнанияЯзыкаЗапрос СтепениЗнанияЯзыкаЗапрос = null;
			try
			{
				СтепениЗнанияЯзыкаЗапрос = Клиент.Get(new СтепениЗнанияЯзыкаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтепениЗнанияЯзыкаЗапрос;
		}
		public static СтепениЗнанияЯзыкаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СтепениЗнанияЯзыка/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтепениЗнанияЯзыкаЗапрос СтепениЗнанияЯзыкаЗапрос = null;
			try
			{
				СтепениЗнанияЯзыкаЗапрос = Клиент.Get(new СтепениЗнанияЯзыкаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтепениЗнанияЯзыкаЗапрос;
		}
		public static void ЗаписатьНовый(СтепениЗнанияЯзыкаЗапрос СтепениЗнанияЯзыкаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/СтепениЗнанияЯзыка?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтепениЗнанияЯзыкаОтвет = Клиент.Post(СтепениЗнанияЯзыкаЗапрос);
		}
		public static void Записать(СтепениЗнанияЯзыкаЗапрос СтепениЗнанияЯзыкаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/СтепениЗнанияЯзыка?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтепениЗнанияЯзыкаОтвет = Клиент.Put(СтепениЗнанияЯзыкаЗапрос);
		}
		public static void Удалить(СтепениЗнанияЯзыкаЗапрос СтепениЗнанияЯзыкаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/СтепениЗнанияЯзыка?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтепениЗнанияЯзыкаОтвет = Клиент.Delete(СтепениЗнанияЯзыкаЗапрос);
		}
	}
}