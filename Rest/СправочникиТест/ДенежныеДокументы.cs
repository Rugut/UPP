
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ДенежныеДокументы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ДенежныеДокументыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ДенежныеДокументы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДенежныеДокументыЗапрос ДенежныеДокументыЗапрос = null;
			try
			{
				ДенежныеДокументыЗапрос = Клиент.Get(new ДенежныеДокументыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДенежныеДокументыЗапрос;
		}
		public static ДенежныеДокументыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ДенежныеДокументы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДенежныеДокументыЗапрос ДенежныеДокументыЗапрос = null;
			try
			{
				ДенежныеДокументыЗапрос = Клиент.Get(new ДенежныеДокументыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДенежныеДокументыЗапрос;
		}
		public static ДенежныеДокументыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ДенежныеДокументы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДенежныеДокументыЗапрос ДенежныеДокументыЗапрос = null;
			try
			{
				ДенежныеДокументыЗапрос = Клиент.Get(new ДенежныеДокументыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДенежныеДокументыЗапрос;
		}
		public static void ЗаписатьНовый(ДенежныеДокументыЗапрос ДенежныеДокументыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ДенежныеДокументы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДенежныеДокументыОтвет = Клиент.Post(ДенежныеДокументыЗапрос);
		}
		public static void Записать(ДенежныеДокументыЗапрос ДенежныеДокументыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ДенежныеДокументы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДенежныеДокументыОтвет = Клиент.Put(ДенежныеДокументыЗапрос);
		}
		public static void Удалить(ДенежныеДокументыЗапрос ДенежныеДокументыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ДенежныеДокументы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДенежныеДокументыОтвет = Клиент.Delete(ДенежныеДокументыЗапрос);
		}
	}
}