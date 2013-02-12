
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ФизическиеЛица:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ФизическиеЛицаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ФизическиеЛица/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ФизическиеЛицаЗапрос ФизическиеЛицаЗапрос = null;
			try
			{
				ФизическиеЛицаЗапрос = Клиент.Get(new ФизическиеЛицаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ФизическиеЛицаЗапрос;
		}
		public static ФизическиеЛицаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ФизическиеЛица/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ФизическиеЛицаЗапрос ФизическиеЛицаЗапрос = null;
			try
			{
				ФизическиеЛицаЗапрос = Клиент.Get(new ФизическиеЛицаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ФизическиеЛицаЗапрос;
		}
		public static ФизическиеЛицаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ФизическиеЛица/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ФизическиеЛицаЗапрос ФизическиеЛицаЗапрос = null;
			try
			{
				ФизическиеЛицаЗапрос = Клиент.Get(new ФизическиеЛицаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ФизическиеЛицаЗапрос;
		}
		public static void ЗаписатьНовый(ФизическиеЛицаЗапрос ФизическиеЛицаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ФизическиеЛица?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ФизическиеЛицаОтвет = Клиент.Post(ФизическиеЛицаЗапрос);
		}
		public static void Записать(ФизическиеЛицаЗапрос ФизическиеЛицаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ФизическиеЛица?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ФизическиеЛицаОтвет = Клиент.Put(ФизическиеЛицаЗапрос);
		}
		public static void Удалить(ФизическиеЛицаЗапрос ФизическиеЛицаЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ФизическиеЛица?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ФизическиеЛицаОтвет = Клиент.Delete(ФизическиеЛицаЗапрос);
		}
	}
}