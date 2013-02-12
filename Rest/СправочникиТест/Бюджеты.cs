
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Бюджеты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static БюджетыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Бюджеты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			БюджетыЗапрос БюджетыЗапрос = null;
			try
			{
				БюджетыЗапрос = Клиент.Get(new БюджетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return БюджетыЗапрос;
		}
		public static БюджетыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Бюджеты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			БюджетыЗапрос БюджетыЗапрос = null;
			try
			{
				БюджетыЗапрос = Клиент.Get(new БюджетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return БюджетыЗапрос;
		}
		public static void ЗаписатьНовый(БюджетыЗапрос БюджетыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Бюджеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var БюджетыОтвет = Клиент.Post(БюджетыЗапрос);
		}
		public static void Записать(БюджетыЗапрос БюджетыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Бюджеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var БюджетыОтвет = Клиент.Put(БюджетыЗапрос);
		}
		public static void Удалить(БюджетыЗапрос БюджетыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Бюджеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var БюджетыОтвет = Клиент.Delete(БюджетыЗапрос);
		}
	}
}