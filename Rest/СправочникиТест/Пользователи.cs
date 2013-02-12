
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Пользователи:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПользователиЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Пользователи/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПользователиЗапрос ПользователиЗапрос = null;
			try
			{
				ПользователиЗапрос = Клиент.Get(new ПользователиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПользователиЗапрос;
		}
		public static ПользователиЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/Пользователи/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПользователиЗапрос ПользователиЗапрос = null;
			try
			{
				ПользователиЗапрос = Клиент.Get(new ПользователиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПользователиЗапрос;
		}
		public static ПользователиЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Пользователи/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПользователиЗапрос ПользователиЗапрос = null;
			try
			{
				ПользователиЗапрос = Клиент.Get(new ПользователиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПользователиЗапрос;
		}
		public static void ЗаписатьНовый(ПользователиЗапрос ПользователиЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/Пользователи?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПользователиОтвет = Клиент.Post(ПользователиЗапрос);
		}
		public static void Записать(ПользователиЗапрос ПользователиЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/Пользователи?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПользователиОтвет = Клиент.Put(ПользователиЗапрос);
		}
		public static void Удалить(ПользователиЗапрос ПользователиЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/Пользователи?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПользователиОтвет = Клиент.Delete(ПользователиЗапрос);
		}
	}
}