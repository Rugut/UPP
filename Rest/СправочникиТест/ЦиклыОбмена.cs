
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ЦиклыОбмена:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ЦиклыОбменаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ЦиклыОбмена/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЦиклыОбменаЗапрос ЦиклыОбменаЗапрос = null;
			try
			{
				ЦиклыОбменаЗапрос = Клиент.Get(new ЦиклыОбменаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЦиклыОбменаЗапрос;
		}
		public static ЦиклыОбменаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ЦиклыОбмена/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЦиклыОбменаЗапрос ЦиклыОбменаЗапрос = null;
			try
			{
				ЦиклыОбменаЗапрос = Клиент.Get(new ЦиклыОбменаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЦиклыОбменаЗапрос;
		}
		public static ЦиклыОбменаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ЦиклыОбмена/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЦиклыОбменаЗапрос ЦиклыОбменаЗапрос = null;
			try
			{
				ЦиклыОбменаЗапрос = Клиент.Get(new ЦиклыОбменаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЦиклыОбменаЗапрос;
		}
		public static void ЗаписатьНовый(ЦиклыОбменаЗапрос ЦиклыОбменаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ЦиклыОбмена?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЦиклыОбменаОтвет = Клиент.Post(ЦиклыОбменаЗапрос);
		}
		public static void Записать(ЦиклыОбменаЗапрос ЦиклыОбменаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ЦиклыОбмена?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЦиклыОбменаОтвет = Клиент.Put(ЦиклыОбменаЗапрос);
		}
		public static void Удалить(ЦиклыОбменаЗапрос ЦиклыОбменаЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ЦиклыОбмена?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЦиклыОбменаОтвет = Клиент.Delete(ЦиклыОбменаЗапрос);
		}
	}
}