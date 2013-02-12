
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СохраненныеНастройки:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СохраненныеНастройкиЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СохраненныеНастройки/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СохраненныеНастройкиЗапрос СохраненныеНастройкиЗапрос = null;
			try
			{
				СохраненныеНастройкиЗапрос = Клиент.Get(new СохраненныеНастройкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СохраненныеНастройкиЗапрос;
		}
		public static СохраненныеНастройкиЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СохраненныеНастройки/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СохраненныеНастройкиЗапрос СохраненныеНастройкиЗапрос = null;
			try
			{
				СохраненныеНастройкиЗапрос = Клиент.Get(new СохраненныеНастройкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СохраненныеНастройкиЗапрос;
		}
		public static void ЗаписатьНовый(СохраненныеНастройкиЗапрос СохраненныеНастройкиЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/СохраненныеНастройки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СохраненныеНастройкиОтвет = Клиент.Post(СохраненныеНастройкиЗапрос);
		}
		public static void Записать(СохраненныеНастройкиЗапрос СохраненныеНастройкиЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/СохраненныеНастройки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СохраненныеНастройкиОтвет = Клиент.Put(СохраненныеНастройкиЗапрос);
		}
		public static void Удалить(СохраненныеНастройкиЗапрос СохраненныеНастройкиЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/СохраненныеНастройки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СохраненныеНастройкиОтвет = Клиент.Delete(СохраненныеНастройкиЗапрос);
		}
	}
}