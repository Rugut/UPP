
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПоказателиСхемМотивации:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПоказателиСхемМотивацииЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПоказателиСхемМотивации/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПоказателиСхемМотивацииЗапрос ПоказателиСхемМотивацииЗапрос = null;
			try
			{
				ПоказателиСхемМотивацииЗапрос = Клиент.Get(new ПоказателиСхемМотивацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПоказателиСхемМотивацииЗапрос;
		}
		public static ПоказателиСхемМотивацииЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПоказателиСхемМотивации/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПоказателиСхемМотивацииЗапрос ПоказателиСхемМотивацииЗапрос = null;
			try
			{
				ПоказателиСхемМотивацииЗапрос = Клиент.Get(new ПоказателиСхемМотивацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПоказателиСхемМотивацииЗапрос;
		}
		public static void ЗаписатьНовый(ПоказателиСхемМотивацииЗапрос ПоказателиСхемМотивацииЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ПоказателиСхемМотивации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПоказателиСхемМотивацииОтвет = Клиент.Post(ПоказателиСхемМотивацииЗапрос);
		}
		public static void Записать(ПоказателиСхемМотивацииЗапрос ПоказателиСхемМотивацииЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ПоказателиСхемМотивации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПоказателиСхемМотивацииОтвет = Клиент.Put(ПоказателиСхемМотивацииЗапрос);
		}
		public static void Удалить(ПоказателиСхемМотивацииЗапрос ПоказателиСхемМотивацииЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ПоказателиСхемМотивации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПоказателиСхемМотивацииОтвет = Клиент.Delete(ПоказателиСхемМотивацииЗапрос);
		}
	}
}