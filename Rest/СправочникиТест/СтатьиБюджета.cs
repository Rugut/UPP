
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СтатьиБюджета:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СтатьиБюджетаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СтатьиБюджета/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтатьиБюджетаЗапрос СтатьиБюджетаЗапрос = null;
			try
			{
				СтатьиБюджетаЗапрос = Клиент.Get(new СтатьиБюджетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтатьиБюджетаЗапрос;
		}
		public static СтатьиБюджетаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/СтатьиБюджета/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтатьиБюджетаЗапрос СтатьиБюджетаЗапрос = null;
			try
			{
				СтатьиБюджетаЗапрос = Клиент.Get(new СтатьиБюджетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтатьиБюджетаЗапрос;
		}
		public static СтатьиБюджетаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СтатьиБюджета/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтатьиБюджетаЗапрос СтатьиБюджетаЗапрос = null;
			try
			{
				СтатьиБюджетаЗапрос = Клиент.Get(new СтатьиБюджетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтатьиБюджетаЗапрос;
		}
		public static void ЗаписатьНовый(СтатьиБюджетаЗапрос СтатьиБюджетаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/СтатьиБюджета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтатьиБюджетаОтвет = Клиент.Post(СтатьиБюджетаЗапрос);
		}
		public static void Записать(СтатьиБюджетаЗапрос СтатьиБюджетаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/СтатьиБюджета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтатьиБюджетаОтвет = Клиент.Put(СтатьиБюджетаЗапрос);
		}
		public static void Удалить(СтатьиБюджетаЗапрос СтатьиБюджетаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/СтатьиБюджета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтатьиБюджетаОтвет = Клиент.Delete(СтатьиБюджетаЗапрос);
		}
	}
}