
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СертификатыЭЦП:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СертификатыЭЦПЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СертификатыЭЦП/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СертификатыЭЦПЗапрос СертификатыЭЦПЗапрос = null;
			try
			{
				СертификатыЭЦПЗапрос = Клиент.Get(new СертификатыЭЦПЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СертификатыЭЦПЗапрос;
		}
		public static СертификатыЭЦПЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СертификатыЭЦП/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СертификатыЭЦПЗапрос СертификатыЭЦПЗапрос = null;
			try
			{
				СертификатыЭЦПЗапрос = Клиент.Get(new СертификатыЭЦПЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СертификатыЭЦПЗапрос;
		}
		public static void ЗаписатьНовый(СертификатыЭЦПЗапрос СертификатыЭЦПЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/СертификатыЭЦП?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СертификатыЭЦПОтвет = Клиент.Post(СертификатыЭЦПЗапрос);
		}
		public static void Записать(СертификатыЭЦПЗапрос СертификатыЭЦПЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/СертификатыЭЦП?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СертификатыЭЦПОтвет = Клиент.Put(СертификатыЭЦПЗапрос);
		}
		public static void Удалить(СертификатыЭЦПЗапрос СертификатыЭЦПЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/СертификатыЭЦП?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СертификатыЭЦПОтвет = Клиент.Delete(СертификатыЭЦПЗапрос);
		}
	}
}