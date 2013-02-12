
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Склады:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СкладыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Склады/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СкладыЗапрос СкладыЗапрос = null;
			try
			{
				СкладыЗапрос = Клиент.Get(new СкладыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СкладыЗапрос;
		}
		public static СкладыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Склады/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СкладыЗапрос СкладыЗапрос = null;
			try
			{
				СкладыЗапрос = Клиент.Get(new СкладыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СкладыЗапрос;
		}
		public static СкладыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Склады/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СкладыЗапрос СкладыЗапрос = null;
			try
			{
				СкладыЗапрос = Клиент.Get(new СкладыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СкладыЗапрос;
		}
		public static void ЗаписатьНовый(СкладыЗапрос СкладыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Склады?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СкладыОтвет = Клиент.Post(СкладыЗапрос);
		}
		public static void Записать(СкладыЗапрос СкладыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Склады?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СкладыОтвет = Клиент.Put(СкладыЗапрос);
		}
		public static void Удалить(СкладыЗапрос СкладыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Склады?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СкладыОтвет = Клиент.Delete(СкладыЗапрос);
		}
	}
}