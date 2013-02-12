
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ДоходыЕСН:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ДоходыЕСНЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыЕСН/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоходыЕСНЗапрос ДоходыЕСНЗапрос = null;
			try
			{
				ДоходыЕСНЗапрос = Клиент.Get(new ДоходыЕСНЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоходыЕСНЗапрос;
		}
		public static ДоходыЕСНЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыЕСН/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоходыЕСНЗапрос ДоходыЕСНЗапрос = null;
			try
			{
				ДоходыЕСНЗапрос = Клиент.Get(new ДоходыЕСНЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоходыЕСНЗапрос;
		}
		public static void ЗаписатьНовый(ДоходыЕСНЗапрос ДоходыЕСНЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыЕСН?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоходыЕСНОтвет = Клиент.Post(ДоходыЕСНЗапрос);
		}
		public static void Записать(ДоходыЕСНЗапрос ДоходыЕСНЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыЕСН?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоходыЕСНОтвет = Клиент.Put(ДоходыЕСНЗапрос);
		}
		public static void Удалить(ДоходыЕСНЗапрос ДоходыЕСНЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ДоходыЕСН?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоходыЕСНОтвет = Клиент.Delete(ДоходыЕСНЗапрос);
		}
	}
}