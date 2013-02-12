
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВычетыНДФЛ:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВычетыНДФЛЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВычетыНДФЛ/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВычетыНДФЛЗапрос ВычетыНДФЛЗапрос = null;
			try
			{
				ВычетыНДФЛЗапрос = Клиент.Get(new ВычетыНДФЛЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВычетыНДФЛЗапрос;
		}
		public static ВычетыНДФЛЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВычетыНДФЛ/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВычетыНДФЛЗапрос ВычетыНДФЛЗапрос = null;
			try
			{
				ВычетыНДФЛЗапрос = Клиент.Get(new ВычетыНДФЛЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВычетыНДФЛЗапрос;
		}
		public static ВычетыНДФЛЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВычетыНДФЛ/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВычетыНДФЛЗапрос ВычетыНДФЛЗапрос = null;
			try
			{
				ВычетыНДФЛЗапрос = Клиент.Get(new ВычетыНДФЛЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВычетыНДФЛЗапрос;
		}
		public static void ЗаписатьНовый(ВычетыНДФЛЗапрос ВычетыНДФЛЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВычетыНДФЛ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВычетыНДФЛОтвет = Клиент.Post(ВычетыНДФЛЗапрос);
		}
		public static void Записать(ВычетыНДФЛЗапрос ВычетыНДФЛЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВычетыНДФЛ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВычетыНДФЛОтвет = Клиент.Put(ВычетыНДФЛЗапрос);
		}
		public static void Удалить(ВычетыНДФЛЗапрос ВычетыНДФЛЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВычетыНДФЛ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВычетыНДФЛОтвет = Клиент.Delete(ВычетыНДФЛЗапрос);
		}
	}
}