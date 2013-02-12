
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class МестаХранения:V82.Rest.СправочникиТест.СправочникТест
	{
		public static МестаХраненияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/МестаХранения/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			МестаХраненияЗапрос МестаХраненияЗапрос = null;
			try
			{
				МестаХраненияЗапрос = Клиент.Get(new МестаХраненияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return МестаХраненияЗапрос;
		}
		public static МестаХраненияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/МестаХранения/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			МестаХраненияЗапрос МестаХраненияЗапрос = null;
			try
			{
				МестаХраненияЗапрос = Клиент.Get(new МестаХраненияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return МестаХраненияЗапрос;
		}
		public static МестаХраненияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/МестаХранения/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			МестаХраненияЗапрос МестаХраненияЗапрос = null;
			try
			{
				МестаХраненияЗапрос = Клиент.Get(new МестаХраненияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return МестаХраненияЗапрос;
		}
		public static void ЗаписатьНовый(МестаХраненияЗапрос МестаХраненияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/МестаХранения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var МестаХраненияОтвет = Клиент.Post(МестаХраненияЗапрос);
		}
		public static void Записать(МестаХраненияЗапрос МестаХраненияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/МестаХранения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var МестаХраненияОтвет = Клиент.Put(МестаХраненияЗапрос);
		}
		public static void Удалить(МестаХраненияЗапрос МестаХраненияЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/МестаХранения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var МестаХраненияОтвет = Клиент.Delete(МестаХраненияЗапрос);
		}
	}
}