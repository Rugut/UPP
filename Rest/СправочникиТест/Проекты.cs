
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Проекты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПроектыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Проекты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПроектыЗапрос ПроектыЗапрос = null;
			try
			{
				ПроектыЗапрос = Клиент.Get(new ПроектыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПроектыЗапрос;
		}
		public static ПроектыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Проекты/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПроектыЗапрос ПроектыЗапрос = null;
			try
			{
				ПроектыЗапрос = Клиент.Get(new ПроектыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПроектыЗапрос;
		}
		public static ПроектыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Проекты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПроектыЗапрос ПроектыЗапрос = null;
			try
			{
				ПроектыЗапрос = Клиент.Get(new ПроектыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПроектыЗапрос;
		}
		public static void ЗаписатьНовый(ПроектыЗапрос ПроектыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Проекты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПроектыОтвет = Клиент.Post(ПроектыЗапрос);
		}
		public static void Записать(ПроектыЗапрос ПроектыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Проекты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПроектыОтвет = Клиент.Put(ПроектыЗапрос);
		}
		public static void Удалить(ПроектыЗапрос ПроектыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Проекты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПроектыОтвет = Клиент.Delete(ПроектыЗапрос);
		}
	}
}