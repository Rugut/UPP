
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КатегорииОбъектов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КатегорииОбъектовЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КатегорииОбъектов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КатегорииОбъектовЗапрос КатегорииОбъектовЗапрос = null;
			try
			{
				КатегорииОбъектовЗапрос = Клиент.Get(new КатегорииОбъектовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КатегорииОбъектовЗапрос;
		}
		public static КатегорииОбъектовЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/КатегорииОбъектов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КатегорииОбъектовЗапрос КатегорииОбъектовЗапрос = null;
			try
			{
				КатегорииОбъектовЗапрос = Клиент.Get(new КатегорииОбъектовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КатегорииОбъектовЗапрос;
		}
		public static КатегорииОбъектовЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КатегорииОбъектов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КатегорииОбъектовЗапрос КатегорииОбъектовЗапрос = null;
			try
			{
				КатегорииОбъектовЗапрос = Клиент.Get(new КатегорииОбъектовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КатегорииОбъектовЗапрос;
		}
		public static void ЗаписатьНовый(КатегорииОбъектовЗапрос КатегорииОбъектовЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/КатегорииОбъектов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КатегорииОбъектовОтвет = Клиент.Post(КатегорииОбъектовЗапрос);
		}
		public static void Записать(КатегорииОбъектовЗапрос КатегорииОбъектовЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/КатегорииОбъектов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КатегорииОбъектовОтвет = Клиент.Put(КатегорииОбъектовЗапрос);
		}
		public static void Удалить(КатегорииОбъектовЗапрос КатегорииОбъектовЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/КатегорииОбъектов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КатегорииОбъектовОтвет = Клиент.Delete(КатегорииОбъектовЗапрос);
		}
	}
}