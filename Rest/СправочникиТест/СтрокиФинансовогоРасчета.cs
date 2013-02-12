
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СтрокиФинансовогоРасчета:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СтрокиФинансовогоРасчетаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СтрокиФинансовогоРасчета/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтрокиФинансовогоРасчетаЗапрос СтрокиФинансовогоРасчетаЗапрос = null;
			try
			{
				СтрокиФинансовогоРасчетаЗапрос = Клиент.Get(new СтрокиФинансовогоРасчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтрокиФинансовогоРасчетаЗапрос;
		}
		public static СтрокиФинансовогоРасчетаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/СтрокиФинансовогоРасчета/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтрокиФинансовогоРасчетаЗапрос СтрокиФинансовогоРасчетаЗапрос = null;
			try
			{
				СтрокиФинансовогоРасчетаЗапрос = Клиент.Get(new СтрокиФинансовогоРасчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтрокиФинансовогоРасчетаЗапрос;
		}
		public static СтрокиФинансовогоРасчетаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СтрокиФинансовогоРасчета/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтрокиФинансовогоРасчетаЗапрос СтрокиФинансовогоРасчетаЗапрос = null;
			try
			{
				СтрокиФинансовогоРасчетаЗапрос = Клиент.Get(new СтрокиФинансовогоРасчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтрокиФинансовогоРасчетаЗапрос;
		}
		public static void ЗаписатьНовый(СтрокиФинансовогоРасчетаЗапрос СтрокиФинансовогоРасчетаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/СтрокиФинансовогоРасчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтрокиФинансовогоРасчетаОтвет = Клиент.Post(СтрокиФинансовогоРасчетаЗапрос);
		}
		public static void Записать(СтрокиФинансовогоРасчетаЗапрос СтрокиФинансовогоРасчетаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/СтрокиФинансовогоРасчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтрокиФинансовогоРасчетаОтвет = Клиент.Put(СтрокиФинансовогоРасчетаЗапрос);
		}
		public static void Удалить(СтрокиФинансовогоРасчетаЗапрос СтрокиФинансовогоРасчетаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/СтрокиФинансовогоРасчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтрокиФинансовогоРасчетаОтвет = Клиент.Delete(СтрокиФинансовогоРасчетаЗапрос);
		}
	}
}