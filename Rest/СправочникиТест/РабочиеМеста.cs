
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class РабочиеМеста:V82.Rest.СправочникиТест.СправочникТест
	{
		public static РабочиеМестаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/РабочиеМеста/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РабочиеМестаЗапрос РабочиеМестаЗапрос = null;
			try
			{
				РабочиеМестаЗапрос = Клиент.Get(new РабочиеМестаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РабочиеМестаЗапрос;
		}
		public static РабочиеМестаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/РабочиеМеста/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РабочиеМестаЗапрос РабочиеМестаЗапрос = null;
			try
			{
				РабочиеМестаЗапрос = Клиент.Get(new РабочиеМестаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РабочиеМестаЗапрос;
		}
		public static РабочиеМестаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/РабочиеМеста/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РабочиеМестаЗапрос РабочиеМестаЗапрос = null;
			try
			{
				РабочиеМестаЗапрос = Клиент.Get(new РабочиеМестаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РабочиеМестаЗапрос;
		}
		public static void ЗаписатьНовый(РабочиеМестаЗапрос РабочиеМестаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/РабочиеМеста?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РабочиеМестаОтвет = Клиент.Post(РабочиеМестаЗапрос);
		}
		public static void Записать(РабочиеМестаЗапрос РабочиеМестаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/РабочиеМеста?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РабочиеМестаОтвет = Клиент.Put(РабочиеМестаЗапрос);
		}
		public static void Удалить(РабочиеМестаЗапрос РабочиеМестаЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/РабочиеМеста?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РабочиеМестаОтвет = Клиент.Delete(РабочиеМестаЗапрос);
		}
	}
}