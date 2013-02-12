
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Помещения:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПомещенияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Помещения/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПомещенияЗапрос ПомещенияЗапрос = null;
			try
			{
				ПомещенияЗапрос = Клиент.Get(new ПомещенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПомещенияЗапрос;
		}
		public static ПомещенияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Помещения/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПомещенияЗапрос ПомещенияЗапрос = null;
			try
			{
				ПомещенияЗапрос = Клиент.Get(new ПомещенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПомещенияЗапрос;
		}
		public static ПомещенияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Помещения/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПомещенияЗапрос ПомещенияЗапрос = null;
			try
			{
				ПомещенияЗапрос = Клиент.Get(new ПомещенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПомещенияЗапрос;
		}
		public static void ЗаписатьНовый(ПомещенияЗапрос ПомещенияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Помещения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПомещенияОтвет = Клиент.Post(ПомещенияЗапрос);
		}
		public static void Записать(ПомещенияЗапрос ПомещенияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Помещения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПомещенияОтвет = Клиент.Put(ПомещенияЗапрос);
		}
		public static void Удалить(ПомещенияЗапрос ПомещенияЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Помещения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПомещенияОтвет = Клиент.Delete(ПомещенияЗапрос);
		}
	}
}