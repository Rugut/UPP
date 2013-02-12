
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СтепениРодстваФизЛиц:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СтепениРодстваФизЛицЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СтепениРодстваФизЛиц/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтепениРодстваФизЛицЗапрос СтепениРодстваФизЛицЗапрос = null;
			try
			{
				СтепениРодстваФизЛицЗапрос = Клиент.Get(new СтепениРодстваФизЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтепениРодстваФизЛицЗапрос;
		}
		public static СтепениРодстваФизЛицЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/СтепениРодстваФизЛиц/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтепениРодстваФизЛицЗапрос СтепениРодстваФизЛицЗапрос = null;
			try
			{
				СтепениРодстваФизЛицЗапрос = Клиент.Get(new СтепениРодстваФизЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтепениРодстваФизЛицЗапрос;
		}
		public static СтепениРодстваФизЛицЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СтепениРодстваФизЛиц/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СтепениРодстваФизЛицЗапрос СтепениРодстваФизЛицЗапрос = null;
			try
			{
				СтепениРодстваФизЛицЗапрос = Клиент.Get(new СтепениРодстваФизЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СтепениРодстваФизЛицЗапрос;
		}
		public static void ЗаписатьНовый(СтепениРодстваФизЛицЗапрос СтепениРодстваФизЛицЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/СтепениРодстваФизЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтепениРодстваФизЛицОтвет = Клиент.Post(СтепениРодстваФизЛицЗапрос);
		}
		public static void Записать(СтепениРодстваФизЛицЗапрос СтепениРодстваФизЛицЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/СтепениРодстваФизЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтепениРодстваФизЛицОтвет = Клиент.Put(СтепениРодстваФизЛицЗапрос);
		}
		public static void Удалить(СтепениРодстваФизЛицЗапрос СтепениРодстваФизЛицЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/СтепениРодстваФизЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СтепениРодстваФизЛицОтвет = Клиент.Delete(СтепениРодстваФизЛицЗапрос);
		}
	}
}