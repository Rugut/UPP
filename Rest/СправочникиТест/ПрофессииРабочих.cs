
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПрофессииРабочих:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПрофессииРабочихЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ПрофессииРабочих/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрофессииРабочихЗапрос ПрофессииРабочихЗапрос = null;
			try
			{
				ПрофессииРабочихЗапрос = Клиент.Get(new ПрофессииРабочихЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрофессииРабочихЗапрос;
		}
		public static ПрофессииРабочихЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ПрофессииРабочих/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрофессииРабочихЗапрос ПрофессииРабочихЗапрос = null;
			try
			{
				ПрофессииРабочихЗапрос = Клиент.Get(new ПрофессииРабочихЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрофессииРабочихЗапрос;
		}
		public static ПрофессииРабочихЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ПрофессииРабочих/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрофессииРабочихЗапрос ПрофессииРабочихЗапрос = null;
			try
			{
				ПрофессииРабочихЗапрос = Клиент.Get(new ПрофессииРабочихЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрофессииРабочихЗапрос;
		}
		public static void ЗаписатьНовый(ПрофессииРабочихЗапрос ПрофессииРабочихЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ПрофессииРабочих?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрофессииРабочихОтвет = Клиент.Post(ПрофессииРабочихЗапрос);
		}
		public static void Записать(ПрофессииРабочихЗапрос ПрофессииРабочихЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ПрофессииРабочих?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрофессииРабочихОтвет = Клиент.Put(ПрофессииРабочихЗапрос);
		}
		public static void Удалить(ПрофессииРабочихЗапрос ПрофессииРабочихЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ПрофессииРабочих?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрофессииРабочихОтвет = Клиент.Delete(ПрофессииРабочихЗапрос);
		}
	}
}