
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НормативыОбслуживанияОС:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НормативыОбслуживанияОСЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НормативыОбслуживанияОС/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НормативыОбслуживанияОСЗапрос НормативыОбслуживанияОСЗапрос = null;
			try
			{
				НормативыОбслуживанияОСЗапрос = Клиент.Get(new НормативыОбслуживанияОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НормативыОбслуживанияОСЗапрос;
		}
		public static НормативыОбслуживанияОСЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/НормативыОбслуживанияОС/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НормативыОбслуживанияОСЗапрос НормативыОбслуживанияОСЗапрос = null;
			try
			{
				НормативыОбслуживанияОСЗапрос = Клиент.Get(new НормативыОбслуживанияОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НормативыОбслуживанияОСЗапрос;
		}
		public static НормативыОбслуживанияОСЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НормативыОбслуживанияОС/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НормативыОбслуживанияОСЗапрос НормативыОбслуживанияОСЗапрос = null;
			try
			{
				НормативыОбслуживанияОСЗапрос = Клиент.Get(new НормативыОбслуживанияОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НормативыОбслуживанияОСЗапрос;
		}
		public static void ЗаписатьНовый(НормативыОбслуживанияОСЗапрос НормативыОбслуживанияОСЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НормативыОбслуживанияОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НормативыОбслуживанияОСОтвет = Клиент.Post(НормативыОбслуживанияОСЗапрос);
		}
		public static void Записать(НормативыОбслуживанияОСЗапрос НормативыОбслуживанияОСЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НормативыОбслуживанияОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НормативыОбслуживанияОСОтвет = Клиент.Put(НормативыОбслуживанияОСЗапрос);
		}
		public static void Удалить(НормативыОбслуживанияОСЗапрос НормативыОбслуживанияОСЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НормативыОбслуживанияОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НормативыОбслуживанияОСОтвет = Клиент.Delete(НормативыОбслуживанияОСЗапрос);
		}
	}
}