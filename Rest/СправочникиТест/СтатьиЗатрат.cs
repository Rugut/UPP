
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СтатьиЗатрат:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СтатьиЗатратЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СтатьиЗатрат/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтатьиЗатратЗапрос СтатьиЗатратЗапрос = null;
			try
			{
				СтатьиЗатратЗапрос = Клиент.Get(new СтатьиЗатратЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтатьиЗатратЗапрос;
		}
		public static СтатьиЗатратЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/СтатьиЗатрат/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтатьиЗатратЗапрос СтатьиЗатратЗапрос = null;
			try
			{
				СтатьиЗатратЗапрос = Клиент.Get(new СтатьиЗатратЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтатьиЗатратЗапрос;
		}
		public static СтатьиЗатратЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СтатьиЗатрат/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтатьиЗатратЗапрос СтатьиЗатратЗапрос = null;
			try
			{
				СтатьиЗатратЗапрос = Клиент.Get(new СтатьиЗатратЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтатьиЗатратЗапрос;
		}
		public static void ЗаписатьНовый(СтатьиЗатратЗапрос СтатьиЗатратЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/СтатьиЗатрат?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтатьиЗатратОтвет = Клиент.Post(СтатьиЗатратЗапрос);
		}
		public static void Записать(СтатьиЗатратЗапрос СтатьиЗатратЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/СтатьиЗатрат?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтатьиЗатратОтвет = Клиент.Put(СтатьиЗатратЗапрос);
		}
		public static void Удалить(СтатьиЗатратЗапрос СтатьиЗатратЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/СтатьиЗатрат?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтатьиЗатратОтвет = Клиент.Delete(СтатьиЗатратЗапрос);
		}
	}
}