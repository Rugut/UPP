
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Контрагенты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КонтрагентыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Контрагенты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КонтрагентыЗапрос КонтрагентыЗапрос = null;
			try
			{
				КонтрагентыЗапрос = Клиент.Get(new КонтрагентыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КонтрагентыЗапрос;
		}
		public static КонтрагентыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Контрагенты/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КонтрагентыЗапрос КонтрагентыЗапрос = null;
			try
			{
				КонтрагентыЗапрос = Клиент.Get(new КонтрагентыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КонтрагентыЗапрос;
		}
		public static КонтрагентыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Контрагенты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КонтрагентыЗапрос КонтрагентыЗапрос = null;
			try
			{
				КонтрагентыЗапрос = Клиент.Get(new КонтрагентыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КонтрагентыЗапрос;
		}
		public static void ЗаписатьНовый(КонтрагентыЗапрос КонтрагентыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Контрагенты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КонтрагентыОтвет = Клиент.Post(КонтрагентыЗапрос);
		}
		public static void Записать(КонтрагентыЗапрос КонтрагентыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Контрагенты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КонтрагентыОтвет = Клиент.Put(КонтрагентыЗапрос);
		}
		public static void Удалить(КонтрагентыЗапрос КонтрагентыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Контрагенты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КонтрагентыОтвет = Клиент.Delete(КонтрагентыЗапрос);
		}
	}
}