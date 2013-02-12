
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ЭДПрисоединенныеФайлы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ЭДПрисоединенныеФайлыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ЭДПрисоединенныеФайлы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЭДПрисоединенныеФайлыЗапрос ЭДПрисоединенныеФайлыЗапрос = null;
			try
			{
				ЭДПрисоединенныеФайлыЗапрос = Клиент.Get(new ЭДПрисоединенныеФайлыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЭДПрисоединенныеФайлыЗапрос;
		}
		public static ЭДПрисоединенныеФайлыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ЭДПрисоединенныеФайлы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЭДПрисоединенныеФайлыЗапрос ЭДПрисоединенныеФайлыЗапрос = null;
			try
			{
				ЭДПрисоединенныеФайлыЗапрос = Клиент.Get(new ЭДПрисоединенныеФайлыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЭДПрисоединенныеФайлыЗапрос;
		}
		public static void ЗаписатьНовый(ЭДПрисоединенныеФайлыЗапрос ЭДПрисоединенныеФайлыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ЭДПрисоединенныеФайлы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЭДПрисоединенныеФайлыОтвет = Клиент.Post(ЭДПрисоединенныеФайлыЗапрос);
		}
		public static void Записать(ЭДПрисоединенныеФайлыЗапрос ЭДПрисоединенныеФайлыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ЭДПрисоединенныеФайлы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЭДПрисоединенныеФайлыОтвет = Клиент.Put(ЭДПрисоединенныеФайлыЗапрос);
		}
		public static void Удалить(ЭДПрисоединенныеФайлыЗапрос ЭДПрисоединенныеФайлыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ЭДПрисоединенныеФайлы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЭДПрисоединенныеФайлыОтвет = Клиент.Delete(ЭДПрисоединенныеФайлыЗапрос);
		}
	}
}