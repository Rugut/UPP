
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ГрафикиРаботы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ГрафикиРаботыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ГрафикиРаботы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГрафикиРаботыЗапрос ГрафикиРаботыЗапрос = null;
			try
			{
				ГрафикиРаботыЗапрос = Клиент.Get(new ГрафикиРаботыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГрафикиРаботыЗапрос;
		}
		public static ГрафикиРаботыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ГрафикиРаботы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГрафикиРаботыЗапрос ГрафикиРаботыЗапрос = null;
			try
			{
				ГрафикиРаботыЗапрос = Клиент.Get(new ГрафикиРаботыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГрафикиРаботыЗапрос;
		}
		public static void ЗаписатьНовый(ГрафикиРаботыЗапрос ГрафикиРаботыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ГрафикиРаботы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГрафикиРаботыОтвет = Клиент.Post(ГрафикиРаботыЗапрос);
		}
		public static void Записать(ГрафикиРаботыЗапрос ГрафикиРаботыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ГрафикиРаботы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГрафикиРаботыОтвет = Клиент.Put(ГрафикиРаботыЗапрос);
		}
		public static void Удалить(ГрафикиРаботыЗапрос ГрафикиРаботыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ГрафикиРаботы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГрафикиРаботыОтвет = Клиент.Delete(ГрафикиРаботыЗапрос);
		}
	}
}