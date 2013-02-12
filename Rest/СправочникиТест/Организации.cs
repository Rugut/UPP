
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Организации:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОрганизацииЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Организации/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОрганизацииЗапрос ОрганизацииЗапрос = null;
			try
			{
				ОрганизацииЗапрос = Клиент.Get(new ОрганизацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОрганизацииЗапрос;
		}
		public static ОрганизацииЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/Организации/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОрганизацииЗапрос ОрганизацииЗапрос = null;
			try
			{
				ОрганизацииЗапрос = Клиент.Get(new ОрганизацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОрганизацииЗапрос;
		}
		public static ОрганизацииЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Организации/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОрганизацииЗапрос ОрганизацииЗапрос = null;
			try
			{
				ОрганизацииЗапрос = Клиент.Get(new ОрганизацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОрганизацииЗапрос;
		}
		public static void ЗаписатьНовый(ОрганизацииЗапрос ОрганизацииЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/Организации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОрганизацииОтвет = Клиент.Post(ОрганизацииЗапрос);
		}
		public static void Записать(ОрганизацииЗапрос ОрганизацииЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/Организации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОрганизацииОтвет = Клиент.Put(ОрганизацииЗапрос);
		}
		public static void Удалить(ОрганизацииЗапрос ОрганизацииЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/Организации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОрганизацииОтвет = Клиент.Delete(ОрганизацииЗапрос);
		}
	}
}