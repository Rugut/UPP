
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПараметрыВыработкиОС:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПараметрыВыработкиОСЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ПараметрыВыработкиОС/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПараметрыВыработкиОСЗапрос ПараметрыВыработкиОСЗапрос = null;
			try
			{
				ПараметрыВыработкиОСЗапрос = Клиент.Get(new ПараметрыВыработкиОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПараметрыВыработкиОСЗапрос;
		}
		public static ПараметрыВыработкиОСЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ПараметрыВыработкиОС/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПараметрыВыработкиОСЗапрос ПараметрыВыработкиОСЗапрос = null;
			try
			{
				ПараметрыВыработкиОСЗапрос = Клиент.Get(new ПараметрыВыработкиОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПараметрыВыработкиОСЗапрос;
		}
		public static ПараметрыВыработкиОСЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ПараметрыВыработкиОС/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПараметрыВыработкиОСЗапрос ПараметрыВыработкиОСЗапрос = null;
			try
			{
				ПараметрыВыработкиОСЗапрос = Клиент.Get(new ПараметрыВыработкиОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПараметрыВыработкиОСЗапрос;
		}
		public static void ЗаписатьНовый(ПараметрыВыработкиОСЗапрос ПараметрыВыработкиОСЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ПараметрыВыработкиОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПараметрыВыработкиОСОтвет = Клиент.Post(ПараметрыВыработкиОСЗапрос);
		}
		public static void Записать(ПараметрыВыработкиОСЗапрос ПараметрыВыработкиОСЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ПараметрыВыработкиОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПараметрыВыработкиОСОтвет = Клиент.Put(ПараметрыВыработкиОСЗапрос);
		}
		public static void Удалить(ПараметрыВыработкиОСЗапрос ПараметрыВыработкиОСЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ПараметрыВыработкиОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПараметрыВыработкиОСОтвет = Клиент.Delete(ПараметрыВыработкиОСЗапрос);
		}
	}
}