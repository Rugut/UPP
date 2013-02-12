
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПодразделенияОрганизаций:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПодразделенияОрганизацийЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПодразделенияОрганизаций/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПодразделенияОрганизацийЗапрос ПодразделенияОрганизацийЗапрос = null;
			try
			{
				ПодразделенияОрганизацийЗапрос = Клиент.Get(new ПодразделенияОрганизацийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПодразделенияОрганизацийЗапрос;
		}
		public static ПодразделенияОрганизацийЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ПодразделенияОрганизаций/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПодразделенияОрганизацийЗапрос ПодразделенияОрганизацийЗапрос = null;
			try
			{
				ПодразделенияОрганизацийЗапрос = Клиент.Get(new ПодразделенияОрганизацийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПодразделенияОрганизацийЗапрос;
		}
		public static ПодразделенияОрганизацийЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПодразделенияОрганизаций/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПодразделенияОрганизацийЗапрос ПодразделенияОрганизацийЗапрос = null;
			try
			{
				ПодразделенияОрганизацийЗапрос = Клиент.Get(new ПодразделенияОрганизацийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПодразделенияОрганизацийЗапрос;
		}
		public static void ЗаписатьНовый(ПодразделенияОрганизацийЗапрос ПодразделенияОрганизацийЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ПодразделенияОрганизаций?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПодразделенияОрганизацийОтвет = Клиент.Post(ПодразделенияОрганизацийЗапрос);
		}
		public static void Записать(ПодразделенияОрганизацийЗапрос ПодразделенияОрганизацийЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ПодразделенияОрганизаций?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПодразделенияОрганизацийОтвет = Клиент.Put(ПодразделенияОрганизацийЗапрос);
		}
		public static void Удалить(ПодразделенияОрганизацийЗапрос ПодразделенияОрганизацийЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ПодразделенияОрганизаций?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПодразделенияОрганизацийОтвет = Клиент.Delete(ПодразделенияОрганизацийЗапрос);
		}
	}
}