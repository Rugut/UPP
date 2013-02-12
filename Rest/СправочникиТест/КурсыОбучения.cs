
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КурсыОбучения:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КурсыОбученияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КурсыОбучения/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КурсыОбученияЗапрос КурсыОбученияЗапрос = null;
			try
			{
				КурсыОбученияЗапрос = Клиент.Get(new КурсыОбученияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КурсыОбученияЗапрос;
		}
		public static КурсыОбученияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КурсыОбучения/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КурсыОбученияЗапрос КурсыОбученияЗапрос = null;
			try
			{
				КурсыОбученияЗапрос = Клиент.Get(new КурсыОбученияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КурсыОбученияЗапрос;
		}
		public static void ЗаписатьНовый(КурсыОбученияЗапрос КурсыОбученияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/КурсыОбучения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КурсыОбученияОтвет = Клиент.Post(КурсыОбученияЗапрос);
		}
		public static void Записать(КурсыОбученияЗапрос КурсыОбученияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/КурсыОбучения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КурсыОбученияОтвет = Клиент.Put(КурсыОбученияЗапрос);
		}
		public static void Удалить(КурсыОбученияЗапрос КурсыОбученияЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/КурсыОбучения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КурсыОбученияОтвет = Клиент.Delete(КурсыОбученияЗапрос);
		}
	}
}