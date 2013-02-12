
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КлассификаторОКОПФ:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КлассификаторОКОПФЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КлассификаторОКОПФ/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КлассификаторОКОПФЗапрос КлассификаторОКОПФЗапрос = null;
			try
			{
				КлассификаторОКОПФЗапрос = Клиент.Get(new КлассификаторОКОПФЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КлассификаторОКОПФЗапрос;
		}
		public static КлассификаторОКОПФЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/КлассификаторОКОПФ/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КлассификаторОКОПФЗапрос КлассификаторОКОПФЗапрос = null;
			try
			{
				КлассификаторОКОПФЗапрос = Клиент.Get(new КлассификаторОКОПФЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КлассификаторОКОПФЗапрос;
		}
		public static КлассификаторОКОПФЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КлассификаторОКОПФ/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КлассификаторОКОПФЗапрос КлассификаторОКОПФЗапрос = null;
			try
			{
				КлассификаторОКОПФЗапрос = Клиент.Get(new КлассификаторОКОПФЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КлассификаторОКОПФЗапрос;
		}
		public static void ЗаписатьНовый(КлассификаторОКОПФЗапрос КлассификаторОКОПФЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/КлассификаторОКОПФ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КлассификаторОКОПФОтвет = Клиент.Post(КлассификаторОКОПФЗапрос);
		}
		public static void Записать(КлассификаторОКОПФЗапрос КлассификаторОКОПФЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/КлассификаторОКОПФ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КлассификаторОКОПФОтвет = Клиент.Put(КлассификаторОКОПФЗапрос);
		}
		public static void Удалить(КлассификаторОКОПФЗапрос КлассификаторОКОПФЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/КлассификаторОКОПФ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КлассификаторОКОПФОтвет = Клиент.Delete(КлассификаторОКОПФЗапрос);
		}
	}
}