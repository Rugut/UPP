
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ДоходыБудущихПериодов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ДоходыБудущихПериодовЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ДоходыБудущихПериодов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоходыБудущихПериодовЗапрос ДоходыБудущихПериодовЗапрос = null;
			try
			{
				ДоходыБудущихПериодовЗапрос = Клиент.Get(new ДоходыБудущихПериодовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоходыБудущихПериодовЗапрос;
		}
		public static ДоходыБудущихПериодовЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ДоходыБудущихПериодов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоходыБудущихПериодовЗапрос ДоходыБудущихПериодовЗапрос = null;
			try
			{
				ДоходыБудущихПериодовЗапрос = Клиент.Get(new ДоходыБудущихПериодовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоходыБудущихПериодовЗапрос;
		}
		public static ДоходыБудущихПериодовЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ДоходыБудущихПериодов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоходыБудущихПериодовЗапрос ДоходыБудущихПериодовЗапрос = null;
			try
			{
				ДоходыБудущихПериодовЗапрос = Клиент.Get(new ДоходыБудущихПериодовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоходыБудущихПериодовЗапрос;
		}
		public static void ЗаписатьНовый(ДоходыБудущихПериодовЗапрос ДоходыБудущихПериодовЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ДоходыБудущихПериодов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоходыБудущихПериодовОтвет = Клиент.Post(ДоходыБудущихПериодовЗапрос);
		}
		public static void Записать(ДоходыБудущихПериодовЗапрос ДоходыБудущихПериодовЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ДоходыБудущихПериодов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоходыБудущихПериодовОтвет = Клиент.Put(ДоходыБудущихПериодовЗапрос);
		}
		public static void Удалить(ДоходыБудущихПериодовЗапрос ДоходыБудущихПериодовЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ДоходыБудущихПериодов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоходыБудущихПериодовОтвет = Клиент.Delete(ДоходыБудущихПериодовЗапрос);
		}
	}
}