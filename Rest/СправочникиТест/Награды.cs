
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Награды:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НаградыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Награды/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НаградыЗапрос НаградыЗапрос = null;
			try
			{
				НаградыЗапрос = Клиент.Get(new НаградыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НаградыЗапрос;
		}
		public static НаградыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Награды/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НаградыЗапрос НаградыЗапрос = null;
			try
			{
				НаградыЗапрос = Клиент.Get(new НаградыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НаградыЗапрос;
		}
		public static void ЗаписатьНовый(НаградыЗапрос НаградыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Награды?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НаградыОтвет = Клиент.Post(НаградыЗапрос);
		}
		public static void Записать(НаградыЗапрос НаградыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Награды?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НаградыОтвет = Клиент.Put(НаградыЗапрос);
		}
		public static void Удалить(НаградыЗапрос НаградыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Награды?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НаградыОтвет = Клиент.Delete(НаградыЗапрос);
		}
	}
}