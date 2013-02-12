
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СерииНоменклатуры:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СерииНоменклатурыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СерииНоменклатуры/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СерииНоменклатурыЗапрос СерииНоменклатурыЗапрос = null;
			try
			{
				СерииНоменклатурыЗапрос = Клиент.Get(new СерииНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СерииНоменклатурыЗапрос;
		}
		public static СерииНоменклатурыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/СерииНоменклатуры/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СерииНоменклатурыЗапрос СерииНоменклатурыЗапрос = null;
			try
			{
				СерииНоменклатурыЗапрос = Клиент.Get(new СерииНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СерииНоменклатурыЗапрос;
		}
		public static СерииНоменклатурыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СерииНоменклатуры/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СерииНоменклатурыЗапрос СерииНоменклатурыЗапрос = null;
			try
			{
				СерииНоменклатурыЗапрос = Клиент.Get(new СерииНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СерииНоменклатурыЗапрос;
		}
		public static void ЗаписатьНовый(СерииНоменклатурыЗапрос СерииНоменклатурыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/СерииНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СерииНоменклатурыОтвет = Клиент.Post(СерииНоменклатурыЗапрос);
		}
		public static void Записать(СерииНоменклатурыЗапрос СерииНоменклатурыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/СерииНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СерииНоменклатурыОтвет = Клиент.Put(СерииНоменклатурыЗапрос);
		}
		public static void Удалить(СерииНоменклатурыЗапрос СерииНоменклатурыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/СерииНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СерииНоменклатурыОтвет = Клиент.Delete(СерииНоменклатурыЗапрос);
		}
	}
}