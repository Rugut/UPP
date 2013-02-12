
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class МаршрутыСогласования:V82.Rest.СправочникиТест.СправочникТест
	{
		public static МаршрутыСогласованияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/МаршрутыСогласования/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			МаршрутыСогласованияЗапрос МаршрутыСогласованияЗапрос = null;
			try
			{
				МаршрутыСогласованияЗапрос = Клиент.Get(new МаршрутыСогласованияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return МаршрутыСогласованияЗапрос;
		}
		public static МаршрутыСогласованияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/МаршрутыСогласования/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			МаршрутыСогласованияЗапрос МаршрутыСогласованияЗапрос = null;
			try
			{
				МаршрутыСогласованияЗапрос = Клиент.Get(new МаршрутыСогласованияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return МаршрутыСогласованияЗапрос;
		}
		public static void ЗаписатьНовый(МаршрутыСогласованияЗапрос МаршрутыСогласованияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/МаршрутыСогласования?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var МаршрутыСогласованияОтвет = Клиент.Post(МаршрутыСогласованияЗапрос);
		}
		public static void Записать(МаршрутыСогласованияЗапрос МаршрутыСогласованияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/МаршрутыСогласования?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var МаршрутыСогласованияОтвет = Клиент.Put(МаршрутыСогласованияЗапрос);
		}
		public static void Удалить(МаршрутыСогласованияЗапрос МаршрутыСогласованияЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/МаршрутыСогласования?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var МаршрутыСогласованияОтвет = Клиент.Delete(МаршрутыСогласованияЗапрос);
		}
	}
}