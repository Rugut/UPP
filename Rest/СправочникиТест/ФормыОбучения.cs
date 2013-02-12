
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ФормыОбучения:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ФормыОбученияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ФормыОбучения/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ФормыОбученияЗапрос ФормыОбученияЗапрос = null;
			try
			{
				ФормыОбученияЗапрос = Клиент.Get(new ФормыОбученияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ФормыОбученияЗапрос;
		}
		public static ФормыОбученияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ФормыОбучения/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ФормыОбученияЗапрос ФормыОбученияЗапрос = null;
			try
			{
				ФормыОбученияЗапрос = Клиент.Get(new ФормыОбученияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ФормыОбученияЗапрос;
		}
		public static ФормыОбученияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ФормыОбучения/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ФормыОбученияЗапрос ФормыОбученияЗапрос = null;
			try
			{
				ФормыОбученияЗапрос = Клиент.Get(new ФормыОбученияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ФормыОбученияЗапрос;
		}
		public static void ЗаписатьНовый(ФормыОбученияЗапрос ФормыОбученияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ФормыОбучения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ФормыОбученияОтвет = Клиент.Post(ФормыОбученияЗапрос);
		}
		public static void Записать(ФормыОбученияЗапрос ФормыОбученияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ФормыОбучения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ФормыОбученияОтвет = Клиент.Put(ФормыОбученияЗапрос);
		}
		public static void Удалить(ФормыОбученияЗапрос ФормыОбученияЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ФормыОбучения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ФормыОбученияОтвет = Клиент.Delete(ФормыОбученияЗапрос);
		}
	}
}