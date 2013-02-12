
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОстаткиОтпусковОрганизаций:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОстаткиОтпусковОрганизацийЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОстаткиОтпусковОрганизаций/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОстаткиОтпусковОрганизацийЗапрос ОстаткиОтпусковОрганизацийЗапрос = null;
			try
			{
				ОстаткиОтпусковОрганизацийЗапрос = Клиент.Get(new ОстаткиОтпусковОрганизацийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОстаткиОтпусковОрганизацийЗапрос;
		}
		public static ОстаткиОтпусковОрганизацийЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОстаткиОтпусковОрганизаций/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОстаткиОтпусковОрганизацийЗапрос ОстаткиОтпусковОрганизацийЗапрос = null;
			try
			{
				ОстаткиОтпусковОрганизацийЗапрос = Клиент.Get(new ОстаткиОтпусковОрганизацийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОстаткиОтпусковОрганизацийЗапрос;
		}
		public static void ЗаписатьНовый(ОстаткиОтпусковОрганизацийЗапрос ОстаткиОтпусковОрганизацийЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ОстаткиОтпусковОрганизаций?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОстаткиОтпусковОрганизацийОтвет = Клиент.Post(ОстаткиОтпусковОрганизацийЗапрос);
		}
		public static void Записать(ОстаткиОтпусковОрганизацийЗапрос ОстаткиОтпусковОрганизацийЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ОстаткиОтпусковОрганизаций?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОстаткиОтпусковОрганизацийОтвет = Клиент.Put(ОстаткиОтпусковОрганизацийЗапрос);
		}
		public static void Удалить(ОстаткиОтпусковОрганизацийЗапрос ОстаткиОтпусковОрганизацийЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ОстаткиОтпусковОрганизаций?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОстаткиОтпусковОрганизацийОтвет = Клиент.Delete(ОстаткиОтпусковОрганизацийЗапрос);
		}
	}
}