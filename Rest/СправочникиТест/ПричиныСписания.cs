
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПричиныСписания:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПричиныСписанияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныСписания/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПричиныСписанияЗапрос ПричиныСписанияЗапрос = null;
			try
			{
				ПричиныСписанияЗапрос = Клиент.Get(new ПричиныСписанияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПричиныСписанияЗапрос;
		}
		public static ПричиныСписанияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныСписания/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПричиныСписанияЗапрос ПричиныСписанияЗапрос = null;
			try
			{
				ПричиныСписанияЗапрос = Клиент.Get(new ПричиныСписанияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПричиныСписанияЗапрос;
		}
		public static ПричиныСписанияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныСписания/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПричиныСписанияЗапрос ПричиныСписанияЗапрос = null;
			try
			{
				ПричиныСписанияЗапрос = Клиент.Get(new ПричиныСписанияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПричиныСписанияЗапрос;
		}
		public static void ЗаписатьНовый(ПричиныСписанияЗапрос ПричиныСписанияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныСписания?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПричиныСписанияОтвет = Клиент.Post(ПричиныСписанияЗапрос);
		}
		public static void Записать(ПричиныСписанияЗапрос ПричиныСписанияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныСписания?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПричиныСписанияОтвет = Клиент.Put(ПричиныСписанияЗапрос);
		}
		public static void Удалить(ПричиныСписанияЗапрос ПричиныСписанияЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныСписания?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПричиныСписанияОтвет = Клиент.Delete(ПричиныСписанияЗапрос);
		}
	}
}