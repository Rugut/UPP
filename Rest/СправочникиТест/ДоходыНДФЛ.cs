
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ДоходыНДФЛ:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ДоходыНДФЛЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыНДФЛ/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоходыНДФЛЗапрос ДоходыНДФЛЗапрос = null;
			try
			{
				ДоходыНДФЛЗапрос = Клиент.Get(new ДоходыНДФЛЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоходыНДФЛЗапрос;
		}
		public static ДоходыНДФЛЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыНДФЛ/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоходыНДФЛЗапрос ДоходыНДФЛЗапрос = null;
			try
			{
				ДоходыНДФЛЗапрос = Клиент.Get(new ДоходыНДФЛЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоходыНДФЛЗапрос;
		}
		public static ДоходыНДФЛЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыНДФЛ/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоходыНДФЛЗапрос ДоходыНДФЛЗапрос = null;
			try
			{
				ДоходыНДФЛЗапрос = Клиент.Get(new ДоходыНДФЛЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоходыНДФЛЗапрос;
		}
		public static void ЗаписатьНовый(ДоходыНДФЛЗапрос ДоходыНДФЛЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыНДФЛ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоходыНДФЛОтвет = Клиент.Post(ДоходыНДФЛЗапрос);
		}
		public static void Записать(ДоходыНДФЛЗапрос ДоходыНДФЛЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыНДФЛ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоходыНДФЛОтвет = Клиент.Put(ДоходыНДФЛЗапрос);
		}
		public static void Удалить(ДоходыНДФЛЗапрос ДоходыНДФЛЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыНДФЛ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоходыНДФЛОтвет = Клиент.Delete(ДоходыНДФЛЗапрос);
		}
	}
}