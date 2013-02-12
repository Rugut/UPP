
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОрганыПФР:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОрганыПФРЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыПФР/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОрганыПФРЗапрос ОрганыПФРЗапрос = null;
			try
			{
				ОрганыПФРЗапрос = Клиент.Get(new ОрганыПФРЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОрганыПФРЗапрос;
		}
		public static ОрганыПФРЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыПФР/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОрганыПФРЗапрос ОрганыПФРЗапрос = null;
			try
			{
				ОрганыПФРЗапрос = Клиент.Get(new ОрганыПФРЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОрганыПФРЗапрос;
		}
		public static ОрганыПФРЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыПФР/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОрганыПФРЗапрос ОрганыПФРЗапрос = null;
			try
			{
				ОрганыПФРЗапрос = Клиент.Get(new ОрганыПФРЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОрганыПФРЗапрос;
		}
		public static void ЗаписатьНовый(ОрганыПФРЗапрос ОрганыПФРЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыПФР?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОрганыПФРОтвет = Клиент.Post(ОрганыПФРЗапрос);
		}
		public static void Записать(ОрганыПФРЗапрос ОрганыПФРЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыПФР?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОрганыПФРОтвет = Клиент.Put(ОрганыПФРЗапрос);
		}
		public static void Удалить(ОрганыПФРЗапрос ОрганыПФРЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыПФР?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОрганыПФРОтвет = Клиент.Delete(ОрганыПФРЗапрос);
		}
	}
}