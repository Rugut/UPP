
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class УсловияПродаж:V82.Rest.СправочникиТест.СправочникТест
	{
		public static УсловияПродажЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/УсловияПродаж/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УсловияПродажЗапрос УсловияПродажЗапрос = null;
			try
			{
				УсловияПродажЗапрос = Клиент.Get(new УсловияПродажЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УсловияПродажЗапрос;
		}
		public static УсловияПродажЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/УсловияПродаж/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УсловияПродажЗапрос УсловияПродажЗапрос = null;
			try
			{
				УсловияПродажЗапрос = Клиент.Get(new УсловияПродажЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УсловияПродажЗапрос;
		}
		public static УсловияПродажЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/УсловияПродаж/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УсловияПродажЗапрос УсловияПродажЗапрос = null;
			try
			{
				УсловияПродажЗапрос = Клиент.Get(new УсловияПродажЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УсловияПродажЗапрос;
		}
		public static void ЗаписатьНовый(УсловияПродажЗапрос УсловияПродажЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/УсловияПродаж?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УсловияПродажОтвет = Клиент.Post(УсловияПродажЗапрос);
		}
		public static void Записать(УсловияПродажЗапрос УсловияПродажЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/УсловияПродаж?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УсловияПродажОтвет = Клиент.Put(УсловияПродажЗапрос);
		}
		public static void Удалить(УсловияПродажЗапрос УсловияПродажЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/УсловияПродаж?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УсловияПродажОтвет = Клиент.Delete(УсловияПродажЗапрос);
		}
	}
}