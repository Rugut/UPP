
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НастройкиЗакрытияМесяца:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НастройкиЗакрытияМесяцаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиЗакрытияМесяца/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиЗакрытияМесяцаЗапрос НастройкиЗакрытияМесяцаЗапрос = null;
			try
			{
				НастройкиЗакрытияМесяцаЗапрос = Клиент.Get(new НастройкиЗакрытияМесяцаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиЗакрытияМесяцаЗапрос;
		}
		public static НастройкиЗакрытияМесяцаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиЗакрытияМесяца/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиЗакрытияМесяцаЗапрос НастройкиЗакрытияМесяцаЗапрос = null;
			try
			{
				НастройкиЗакрытияМесяцаЗапрос = Клиент.Get(new НастройкиЗакрытияМесяцаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиЗакрытияМесяцаЗапрос;
		}
		public static void ЗаписатьНовый(НастройкиЗакрытияМесяцаЗапрос НастройкиЗакрытияМесяцаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиЗакрытияМесяца?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиЗакрытияМесяцаОтвет = Клиент.Post(НастройкиЗакрытияМесяцаЗапрос);
		}
		public static void Записать(НастройкиЗакрытияМесяцаЗапрос НастройкиЗакрытияМесяцаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиЗакрытияМесяца?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиЗакрытияМесяцаОтвет = Клиент.Put(НастройкиЗакрытияМесяцаЗапрос);
		}
		public static void Удалить(НастройкиЗакрытияМесяцаЗапрос НастройкиЗакрытияМесяцаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиЗакрытияМесяца?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиЗакрытияМесяцаОтвет = Клиент.Delete(НастройкиЗакрытияМесяцаЗапрос);
		}
	}
}