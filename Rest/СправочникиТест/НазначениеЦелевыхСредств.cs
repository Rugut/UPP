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
	public class НазначениеЦелевыхСредств:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НазначениеЦелевыхСредствЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/НазначениеЦелевыхСредств/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НазначениеЦелевыхСредствЗапрос НазначениеЦелевыхСредствЗапрос = null;
			try
			{
				НазначениеЦелевыхСредствЗапрос = Клиент.Get(new НазначениеЦелевыхСредствЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НазначениеЦелевыхСредствЗапрос;
		}
		public static НазначениеЦелевыхСредствЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/НазначениеЦелевыхСредств/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НазначениеЦелевыхСредствЗапрос НазначениеЦелевыхСредствЗапрос = null;
			try
			{
				НазначениеЦелевыхСредствЗапрос = Клиент.Get(new НазначениеЦелевыхСредствЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НазначениеЦелевыхСредствЗапрос;
		}
		public static НазначениеЦелевыхСредствЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/НазначениеЦелевыхСредств/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НазначениеЦелевыхСредствЗапрос НазначениеЦелевыхСредствЗапрос = null;
			try
			{
				НазначениеЦелевыхСредствЗапрос = Клиент.Get(new НазначениеЦелевыхСредствЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НазначениеЦелевыхСредствЗапрос;
		}
		public static void ЗаписатьНовый(НазначениеЦелевыхСредствЗапрос НазначениеЦелевыхСредствЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/НазначениеЦелевыхСредств?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НазначениеЦелевыхСредствОтвет = Клиент.Post(НазначениеЦелевыхСредствЗапрос);
		}
		public static void Записать(НазначениеЦелевыхСредствЗапрос НазначениеЦелевыхСредствЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/НазначениеЦелевыхСредств?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НазначениеЦелевыхСредствОтвет = Клиент.Put(НазначениеЦелевыхСредствЗапрос);
		}
		public static void Удалить(НазначениеЦелевыхСредствЗапрос НазначениеЦелевыхСредствЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/НазначениеЦелевыхСредств?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НазначениеЦелевыхСредствОтвет = Клиент.Delete(НазначениеЦелевыхСредствЗапрос);
		}
	}
}