
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class РабочиеЦентры:V82.Rest.СправочникиТест.СправочникТест
	{
		public static РабочиеЦентрыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РабочиеЦентры/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РабочиеЦентрыЗапрос РабочиеЦентрыЗапрос = null;
			try
			{
				РабочиеЦентрыЗапрос = Клиент.Get(new РабочиеЦентрыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РабочиеЦентрыЗапрос;
		}
		public static РабочиеЦентрыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/РабочиеЦентры/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РабочиеЦентрыЗапрос РабочиеЦентрыЗапрос = null;
			try
			{
				РабочиеЦентрыЗапрос = Клиент.Get(new РабочиеЦентрыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РабочиеЦентрыЗапрос;
		}
		public static РабочиеЦентрыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РабочиеЦентры/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РабочиеЦентрыЗапрос РабочиеЦентрыЗапрос = null;
			try
			{
				РабочиеЦентрыЗапрос = Клиент.Get(new РабочиеЦентрыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РабочиеЦентрыЗапрос;
		}
		public static void ЗаписатьНовый(РабочиеЦентрыЗапрос РабочиеЦентрыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/РабочиеЦентры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РабочиеЦентрыОтвет = Клиент.Post(РабочиеЦентрыЗапрос);
		}
		public static void Записать(РабочиеЦентрыЗапрос РабочиеЦентрыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/РабочиеЦентры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РабочиеЦентрыОтвет = Клиент.Put(РабочиеЦентрыЗапрос);
		}
		public static void Удалить(РабочиеЦентрыЗапрос РабочиеЦентрыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/РабочиеЦентры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РабочиеЦентрыОтвет = Клиент.Delete(РабочиеЦентрыЗапрос);
		}
	}
}