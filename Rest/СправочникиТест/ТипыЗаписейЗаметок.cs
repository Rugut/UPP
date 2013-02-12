
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТипыЗаписейЗаметок:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТипыЗаписейЗаметокЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТипыЗаписейЗаметок/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТипыЗаписейЗаметокЗапрос ТипыЗаписейЗаметокЗапрос = null;
			try
			{
				ТипыЗаписейЗаметокЗапрос = Клиент.Get(new ТипыЗаписейЗаметокЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТипыЗаписейЗаметокЗапрос;
		}
		public static ТипыЗаписейЗаметокЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТипыЗаписейЗаметок/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТипыЗаписейЗаметокЗапрос ТипыЗаписейЗаметокЗапрос = null;
			try
			{
				ТипыЗаписейЗаметокЗапрос = Клиент.Get(new ТипыЗаписейЗаметокЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТипыЗаписейЗаметокЗапрос;
		}
		public static void ЗаписатьНовый(ТипыЗаписейЗаметокЗапрос ТипыЗаписейЗаметокЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ТипыЗаписейЗаметок?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТипыЗаписейЗаметокОтвет = Клиент.Post(ТипыЗаписейЗаметокЗапрос);
		}
		public static void Записать(ТипыЗаписейЗаметокЗапрос ТипыЗаписейЗаметокЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ТипыЗаписейЗаметок?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТипыЗаписейЗаметокОтвет = Клиент.Put(ТипыЗаписейЗаметокЗапрос);
		}
		public static void Удалить(ТипыЗаписейЗаметокЗапрос ТипыЗаписейЗаметокЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ТипыЗаписейЗаметок?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТипыЗаписейЗаметокОтвет = Клиент.Delete(ТипыЗаписейЗаметокЗапрос);
		}
	}
}