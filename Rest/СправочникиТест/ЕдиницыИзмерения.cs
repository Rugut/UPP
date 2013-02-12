
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ЕдиницыИзмерения:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ЕдиницыИзмеренияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ЕдиницыИзмерения/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЕдиницыИзмеренияЗапрос ЕдиницыИзмеренияЗапрос = null;
			try
			{
				ЕдиницыИзмеренияЗапрос = Клиент.Get(new ЕдиницыИзмеренияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЕдиницыИзмеренияЗапрос;
		}
		public static ЕдиницыИзмеренияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ЕдиницыИзмерения/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЕдиницыИзмеренияЗапрос ЕдиницыИзмеренияЗапрос = null;
			try
			{
				ЕдиницыИзмеренияЗапрос = Клиент.Get(new ЕдиницыИзмеренияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЕдиницыИзмеренияЗапрос;
		}
		public static ЕдиницыИзмеренияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ЕдиницыИзмерения/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЕдиницыИзмеренияЗапрос ЕдиницыИзмеренияЗапрос = null;
			try
			{
				ЕдиницыИзмеренияЗапрос = Клиент.Get(new ЕдиницыИзмеренияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЕдиницыИзмеренияЗапрос;
		}
		public static void ЗаписатьНовый(ЕдиницыИзмеренияЗапрос ЕдиницыИзмеренияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ЕдиницыИзмерения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЕдиницыИзмеренияОтвет = Клиент.Post(ЕдиницыИзмеренияЗапрос);
		}
		public static void Записать(ЕдиницыИзмеренияЗапрос ЕдиницыИзмеренияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ЕдиницыИзмерения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЕдиницыИзмеренияОтвет = Клиент.Put(ЕдиницыИзмеренияЗапрос);
		}
		public static void Удалить(ЕдиницыИзмеренияЗапрос ЕдиницыИзмеренияЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ЕдиницыИзмерения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЕдиницыИзмеренияОтвет = Клиент.Delete(ЕдиницыИзмеренияЗапрос);
		}
	}
}