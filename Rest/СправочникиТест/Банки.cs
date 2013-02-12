
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Банки:V82.Rest.СправочникиТест.СправочникТест
	{
		public static БанкиЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Банки/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			БанкиЗапрос БанкиЗапрос = null;
			try
			{
				БанкиЗапрос = Клиент.Get(new БанкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return БанкиЗапрос;
		}
		public static БанкиЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Банки/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			БанкиЗапрос БанкиЗапрос = null;
			try
			{
				БанкиЗапрос = Клиент.Get(new БанкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return БанкиЗапрос;
		}
		public static БанкиЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Банки/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			БанкиЗапрос БанкиЗапрос = null;
			try
			{
				БанкиЗапрос = Клиент.Get(new БанкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return БанкиЗапрос;
		}
		public static void ЗаписатьНовый(БанкиЗапрос БанкиЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Банки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var БанкиОтвет = Клиент.Post(БанкиЗапрос);
		}
		public static void Записать(БанкиЗапрос БанкиЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Банки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var БанкиОтвет = Клиент.Put(БанкиЗапрос);
		}
		public static void Удалить(БанкиЗапрос БанкиЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Банки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var БанкиОтвет = Клиент.Delete(БанкиЗапрос);
		}
	}
}