
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Валюты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВалютыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Валюты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВалютыЗапрос ВалютыЗапрос = null;
			try
			{
				ВалютыЗапрос = Клиент.Get(new ВалютыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВалютыЗапрос;
		}
		public static ВалютыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Валюты/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВалютыЗапрос ВалютыЗапрос = null;
			try
			{
				ВалютыЗапрос = Клиент.Get(new ВалютыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВалютыЗапрос;
		}
		public static ВалютыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Валюты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВалютыЗапрос ВалютыЗапрос = null;
			try
			{
				ВалютыЗапрос = Клиент.Get(new ВалютыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВалютыЗапрос;
		}
		public static void ЗаписатьНовый(ВалютыЗапрос ВалютыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Валюты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВалютыОтвет = Клиент.Post(ВалютыЗапрос);
		}
		public static void Записать(ВалютыЗапрос ВалютыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Валюты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВалютыОтвет = Клиент.Put(ВалютыЗапрос);
		}
		public static void Удалить(ВалютыЗапрос ВалютыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Валюты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВалютыОтвет = Клиент.Delete(ВалютыЗапрос);
		}
	}
}