
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НастройкиОбменаССайтом:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НастройкиОбменаССайтомЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаССайтом/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиОбменаССайтомЗапрос НастройкиОбменаССайтомЗапрос = null;
			try
			{
				НастройкиОбменаССайтомЗапрос = Клиент.Get(new НастройкиОбменаССайтомЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиОбменаССайтомЗапрос;
		}
		public static НастройкиОбменаССайтомЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаССайтом/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиОбменаССайтомЗапрос НастройкиОбменаССайтомЗапрос = null;
			try
			{
				НастройкиОбменаССайтомЗапрос = Клиент.Get(new НастройкиОбменаССайтомЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиОбменаССайтомЗапрос;
		}
		public static НастройкиОбменаССайтомЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаССайтом/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиОбменаССайтомЗапрос НастройкиОбменаССайтомЗапрос = null;
			try
			{
				НастройкиОбменаССайтомЗапрос = Клиент.Get(new НастройкиОбменаССайтомЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиОбменаССайтомЗапрос;
		}
		public static void ЗаписатьНовый(НастройкиОбменаССайтомЗапрос НастройкиОбменаССайтомЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаССайтом?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиОбменаССайтомОтвет = Клиент.Post(НастройкиОбменаССайтомЗапрос);
		}
		public static void Записать(НастройкиОбменаССайтомЗапрос НастройкиОбменаССайтомЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаССайтом?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиОбменаССайтомОтвет = Клиент.Put(НастройкиОбменаССайтомЗапрос);
		}
		public static void Удалить(НастройкиОбменаССайтомЗапрос НастройкиОбменаССайтомЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаССайтом?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиОбменаССайтомОтвет = Клиент.Delete(НастройкиОбменаССайтомЗапрос);
		}
	}
}