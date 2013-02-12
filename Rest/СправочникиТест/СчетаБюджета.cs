
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СчетаБюджета:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СчетаБюджетаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СчетаБюджета/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СчетаБюджетаЗапрос СчетаБюджетаЗапрос = null;
			try
			{
				СчетаБюджетаЗапрос = Клиент.Get(new СчетаБюджетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СчетаБюджетаЗапрос;
		}
		public static СчетаБюджетаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/СчетаБюджета/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СчетаБюджетаЗапрос СчетаБюджетаЗапрос = null;
			try
			{
				СчетаБюджетаЗапрос = Клиент.Get(new СчетаБюджетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СчетаБюджетаЗапрос;
		}
		public static СчетаБюджетаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СчетаБюджета/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СчетаБюджетаЗапрос СчетаБюджетаЗапрос = null;
			try
			{
				СчетаБюджетаЗапрос = Клиент.Get(new СчетаБюджетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СчетаБюджетаЗапрос;
		}
		public static void ЗаписатьНовый(СчетаБюджетаЗапрос СчетаБюджетаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/СчетаБюджета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СчетаБюджетаОтвет = Клиент.Post(СчетаБюджетаЗапрос);
		}
		public static void Записать(СчетаБюджетаЗапрос СчетаБюджетаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/СчетаБюджета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СчетаБюджетаОтвет = Клиент.Put(СчетаБюджетаЗапрос);
		}
		public static void Удалить(СчетаБюджетаЗапрос СчетаБюджетаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/СчетаБюджета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СчетаБюджетаОтвет = Клиент.Delete(СчетаБюджетаЗапрос);
		}
	}
}