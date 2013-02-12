
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Смены:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СменыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Смены/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СменыЗапрос СменыЗапрос = null;
			try
			{
				СменыЗапрос = Клиент.Get(new СменыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СменыЗапрос;
		}
		public static СменыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/Смены/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СменыЗапрос СменыЗапрос = null;
			try
			{
				СменыЗапрос = Клиент.Get(new СменыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СменыЗапрос;
		}
		public static СменыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Смены/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СменыЗапрос СменыЗапрос = null;
			try
			{
				СменыЗапрос = Клиент.Get(new СменыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СменыЗапрос;
		}
		public static void ЗаписатьНовый(СменыЗапрос СменыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/Смены?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СменыОтвет = Клиент.Post(СменыЗапрос);
		}
		public static void Записать(СменыЗапрос СменыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/Смены?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СменыОтвет = Клиент.Put(СменыЗапрос);
		}
		public static void Удалить(СменыЗапрос СменыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/Смены?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СменыОтвет = Клиент.Delete(СменыЗапрос);
		}
	}
}