﻿
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПрофилиИзмененияПлановПоПериодам:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПрофилиИзмененияПлановПоПериодамЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ПрофилиИзмененияПлановПоПериодам/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрофилиИзмененияПлановПоПериодамЗапрос ПрофилиИзмененияПлановПоПериодамЗапрос = null;
			try
			{
				ПрофилиИзмененияПлановПоПериодамЗапрос = Клиент.Get(new ПрофилиИзмененияПлановПоПериодамЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрофилиИзмененияПлановПоПериодамЗапрос;
		}
		public static ПрофилиИзмененияПлановПоПериодамЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ПрофилиИзмененияПлановПоПериодам/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрофилиИзмененияПлановПоПериодамЗапрос ПрофилиИзмененияПлановПоПериодамЗапрос = null;
			try
			{
				ПрофилиИзмененияПлановПоПериодамЗапрос = Клиент.Get(new ПрофилиИзмененияПлановПоПериодамЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрофилиИзмененияПлановПоПериодамЗапрос;
		}
		public static ПрофилиИзмененияПлановПоПериодамЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ПрофилиИзмененияПлановПоПериодам/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрофилиИзмененияПлановПоПериодамЗапрос ПрофилиИзмененияПлановПоПериодамЗапрос = null;
			try
			{
				ПрофилиИзмененияПлановПоПериодамЗапрос = Клиент.Get(new ПрофилиИзмененияПлановПоПериодамЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрофилиИзмененияПлановПоПериодамЗапрос;
		}
		public static void ЗаписатьНовый(ПрофилиИзмененияПлановПоПериодамЗапрос ПрофилиИзмененияПлановПоПериодамЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ПрофилиИзмененияПлановПоПериодам?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрофилиИзмененияПлановПоПериодамОтвет = Клиент.Post(ПрофилиИзмененияПлановПоПериодамЗапрос);
		}
		public static void Записать(ПрофилиИзмененияПлановПоПериодамЗапрос ПрофилиИзмененияПлановПоПериодамЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ПрофилиИзмененияПлановПоПериодам?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрофилиИзмененияПлановПоПериодамОтвет = Клиент.Put(ПрофилиИзмененияПлановПоПериодамЗапрос);
		}
		public static void Удалить(ПрофилиИзмененияПлановПоПериодамЗапрос ПрофилиИзмененияПлановПоПериодамЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ПрофилиИзмененияПлановПоПериодам?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрофилиИзмененияПлановПоПериодамОтвет = Клиент.Delete(ПрофилиИзмененияПлановПоПериодамЗапрос);
		}
	}
}