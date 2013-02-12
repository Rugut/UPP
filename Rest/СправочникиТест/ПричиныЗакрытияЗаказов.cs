
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПричиныЗакрытияЗаказов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПричиныЗакрытияЗаказовЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныЗакрытияЗаказов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПричиныЗакрытияЗаказовЗапрос ПричиныЗакрытияЗаказовЗапрос = null;
			try
			{
				ПричиныЗакрытияЗаказовЗапрос = Клиент.Get(new ПричиныЗакрытияЗаказовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПричиныЗакрытияЗаказовЗапрос;
		}
		public static ПричиныЗакрытияЗаказовЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныЗакрытияЗаказов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПричиныЗакрытияЗаказовЗапрос ПричиныЗакрытияЗаказовЗапрос = null;
			try
			{
				ПричиныЗакрытияЗаказовЗапрос = Клиент.Get(new ПричиныЗакрытияЗаказовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПричиныЗакрытияЗаказовЗапрос;
		}
		public static ПричиныЗакрытияЗаказовЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныЗакрытияЗаказов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПричиныЗакрытияЗаказовЗапрос ПричиныЗакрытияЗаказовЗапрос = null;
			try
			{
				ПричиныЗакрытияЗаказовЗапрос = Клиент.Get(new ПричиныЗакрытияЗаказовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПричиныЗакрытияЗаказовЗапрос;
		}
		public static void ЗаписатьНовый(ПричиныЗакрытияЗаказовЗапрос ПричиныЗакрытияЗаказовЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныЗакрытияЗаказов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПричиныЗакрытияЗаказовОтвет = Клиент.Post(ПричиныЗакрытияЗаказовЗапрос);
		}
		public static void Записать(ПричиныЗакрытияЗаказовЗапрос ПричиныЗакрытияЗаказовЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныЗакрытияЗаказов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПричиныЗакрытияЗаказовОтвет = Клиент.Put(ПричиныЗакрытияЗаказовЗапрос);
		}
		public static void Удалить(ПричиныЗакрытияЗаказовЗапрос ПричиныЗакрытияЗаказовЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныЗакрытияЗаказов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПричиныЗакрытияЗаказовОтвет = Клиент.Delete(ПричиныЗакрытияЗаказовЗапрос);
		}
	}
}