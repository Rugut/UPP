
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОрганыФСГС:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОрганыФСГСЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыФСГС/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОрганыФСГСЗапрос ОрганыФСГСЗапрос = null;
			try
			{
				ОрганыФСГСЗапрос = Клиент.Get(new ОрганыФСГСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОрганыФСГСЗапрос;
		}
		public static ОрганыФСГСЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыФСГС/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОрганыФСГСЗапрос ОрганыФСГСЗапрос = null;
			try
			{
				ОрганыФСГСЗапрос = Клиент.Get(new ОрганыФСГСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОрганыФСГСЗапрос;
		}
		public static ОрганыФСГСЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыФСГС/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОрганыФСГСЗапрос ОрганыФСГСЗапрос = null;
			try
			{
				ОрганыФСГСЗапрос = Клиент.Get(new ОрганыФСГСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОрганыФСГСЗапрос;
		}
		public static void ЗаписатьНовый(ОрганыФСГСЗапрос ОрганыФСГСЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыФСГС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОрганыФСГСОтвет = Клиент.Post(ОрганыФСГСЗапрос);
		}
		public static void Записать(ОрганыФСГСЗапрос ОрганыФСГСЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыФСГС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОрганыФСГСОтвет = Клиент.Put(ОрганыФСГСЗапрос);
		}
		public static void Удалить(ОрганыФСГСЗапрос ОрганыФСГСЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ОрганыФСГС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОрганыФСГСОтвет = Клиент.Delete(ОрганыФСГСЗапрос);
		}
	}
}