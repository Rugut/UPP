
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Должности:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ДолжностиЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Должности/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДолжностиЗапрос ДолжностиЗапрос = null;
			try
			{
				ДолжностиЗапрос = Клиент.Get(new ДолжностиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДолжностиЗапрос;
		}
		public static ДолжностиЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/Должности/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДолжностиЗапрос ДолжностиЗапрос = null;
			try
			{
				ДолжностиЗапрос = Клиент.Get(new ДолжностиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДолжностиЗапрос;
		}
		public static ДолжностиЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Должности/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДолжностиЗапрос ДолжностиЗапрос = null;
			try
			{
				ДолжностиЗапрос = Клиент.Get(new ДолжностиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДолжностиЗапрос;
		}
		public static void ЗаписатьНовый(ДолжностиЗапрос ДолжностиЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/Должности?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДолжностиОтвет = Клиент.Post(ДолжностиЗапрос);
		}
		public static void Записать(ДолжностиЗапрос ДолжностиЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/Должности?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДолжностиОтвет = Клиент.Put(ДолжностиЗапрос);
		}
		public static void Удалить(ДолжностиЗапрос ДолжностиЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/Должности?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДолжностиОтвет = Клиент.Delete(ДолжностиЗапрос);
		}
	}
}