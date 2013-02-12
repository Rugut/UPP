
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КонтактныеЛица:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КонтактныеЛицаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/КонтактныеЛица/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КонтактныеЛицаЗапрос КонтактныеЛицаЗапрос = null;
			try
			{
				КонтактныеЛицаЗапрос = Клиент.Get(new КонтактныеЛицаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КонтактныеЛицаЗапрос;
		}
		public static КонтактныеЛицаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/КонтактныеЛица/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КонтактныеЛицаЗапрос КонтактныеЛицаЗапрос = null;
			try
			{
				КонтактныеЛицаЗапрос = Клиент.Get(new КонтактныеЛицаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КонтактныеЛицаЗапрос;
		}
		public static КонтактныеЛицаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/КонтактныеЛица/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КонтактныеЛицаЗапрос КонтактныеЛицаЗапрос = null;
			try
			{
				КонтактныеЛицаЗапрос = Клиент.Get(new КонтактныеЛицаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КонтактныеЛицаЗапрос;
		}
		public static void ЗаписатьНовый(КонтактныеЛицаЗапрос КонтактныеЛицаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/КонтактныеЛица?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КонтактныеЛицаОтвет = Клиент.Post(КонтактныеЛицаЗапрос);
		}
		public static void Записать(КонтактныеЛицаЗапрос КонтактныеЛицаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/КонтактныеЛица?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КонтактныеЛицаОтвет = Клиент.Put(КонтактныеЛицаЗапрос);
		}
		public static void Удалить(КонтактныеЛицаЗапрос КонтактныеЛицаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/КонтактныеЛица?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КонтактныеЛицаОтвет = Клиент.Delete(КонтактныеЛицаЗапрос);
		}
	}
}