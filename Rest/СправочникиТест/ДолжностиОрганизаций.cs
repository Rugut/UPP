
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ДолжностиОрганизаций:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ДолжностиОрганизацийЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ДолжностиОрганизаций/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДолжностиОрганизацийЗапрос ДолжностиОрганизацийЗапрос = null;
			try
			{
				ДолжностиОрганизацийЗапрос = Клиент.Get(new ДолжностиОрганизацийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДолжностиОрганизацийЗапрос;
		}
		public static ДолжностиОрганизацийЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ДолжностиОрганизаций/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДолжностиОрганизацийЗапрос ДолжностиОрганизацийЗапрос = null;
			try
			{
				ДолжностиОрганизацийЗапрос = Клиент.Get(new ДолжностиОрганизацийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДолжностиОрганизацийЗапрос;
		}
		public static ДолжностиОрганизацийЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ДолжностиОрганизаций/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДолжностиОрганизацийЗапрос ДолжностиОрганизацийЗапрос = null;
			try
			{
				ДолжностиОрганизацийЗапрос = Клиент.Get(new ДолжностиОрганизацийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДолжностиОрганизацийЗапрос;
		}
		public static void ЗаписатьНовый(ДолжностиОрганизацийЗапрос ДолжностиОрганизацийЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ДолжностиОрганизаций?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДолжностиОрганизацийОтвет = Клиент.Post(ДолжностиОрганизацийЗапрос);
		}
		public static void Записать(ДолжностиОрганизацийЗапрос ДолжностиОрганизацийЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ДолжностиОрганизаций?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДолжностиОрганизацийОтвет = Клиент.Put(ДолжностиОрганизацийЗапрос);
		}
		public static void Удалить(ДолжностиОрганизацийЗапрос ДолжностиОрганизацийЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ДолжностиОрганизаций?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДолжностиОрганизацийОтвет = Клиент.Delete(ДолжностиОрганизацийЗапрос);
		}
	}
}