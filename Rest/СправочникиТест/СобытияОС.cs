
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СобытияОС:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СобытияОСЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СобытияОС/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СобытияОСЗапрос СобытияОСЗапрос = null;
			try
			{
				СобытияОСЗапрос = Клиент.Get(new СобытияОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СобытияОСЗапрос;
		}
		public static СобытияОСЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/СобытияОС/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СобытияОСЗапрос СобытияОСЗапрос = null;
			try
			{
				СобытияОСЗапрос = Клиент.Get(new СобытияОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СобытияОСЗапрос;
		}
		public static СобытияОСЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СобытияОС/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СобытияОСЗапрос СобытияОСЗапрос = null;
			try
			{
				СобытияОСЗапрос = Клиент.Get(new СобытияОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СобытияОСЗапрос;
		}
		public static void ЗаписатьНовый(СобытияОСЗапрос СобытияОСЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/СобытияОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СобытияОСОтвет = Клиент.Post(СобытияОСЗапрос);
		}
		public static void Записать(СобытияОСЗапрос СобытияОСЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/СобытияОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СобытияОСОтвет = Клиент.Put(СобытияОСЗапрос);
		}
		public static void Удалить(СобытияОСЗапрос СобытияОСЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/СобытияОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СобытияОСОтвет = Клиент.Delete(СобытияОСЗапрос);
		}
	}
}