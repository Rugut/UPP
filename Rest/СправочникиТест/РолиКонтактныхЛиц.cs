
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class РолиКонтактныхЛиц:V82.Rest.СправочникиТест.СправочникТест
	{
		public static РолиКонтактныхЛицЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РолиКонтактныхЛиц/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РолиКонтактныхЛицЗапрос РолиКонтактныхЛицЗапрос = null;
			try
			{
				РолиКонтактныхЛицЗапрос = Клиент.Get(new РолиКонтактныхЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РолиКонтактныхЛицЗапрос;
		}
		public static РолиКонтактныхЛицЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/РолиКонтактныхЛиц/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РолиКонтактныхЛицЗапрос РолиКонтактныхЛицЗапрос = null;
			try
			{
				РолиКонтактныхЛицЗапрос = Клиент.Get(new РолиКонтактныхЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РолиКонтактныхЛицЗапрос;
		}
		public static РолиКонтактныхЛицЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РолиКонтактныхЛиц/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РолиКонтактныхЛицЗапрос РолиКонтактныхЛицЗапрос = null;
			try
			{
				РолиКонтактныхЛицЗапрос = Клиент.Get(new РолиКонтактныхЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РолиКонтактныхЛицЗапрос;
		}
		public static void ЗаписатьНовый(РолиКонтактныхЛицЗапрос РолиКонтактныхЛицЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/РолиКонтактныхЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РолиКонтактныхЛицОтвет = Клиент.Post(РолиКонтактныхЛицЗапрос);
		}
		public static void Записать(РолиКонтактныхЛицЗапрос РолиКонтактныхЛицЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/РолиКонтактныхЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РолиКонтактныхЛицОтвет = Клиент.Put(РолиКонтактныхЛицЗапрос);
		}
		public static void Удалить(РолиКонтактныхЛицЗапрос РолиКонтактныхЛицЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/РолиКонтактныхЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РолиКонтактныхЛицОтвет = Клиент.Delete(РолиКонтактныхЛицЗапрос);
		}
	}
}