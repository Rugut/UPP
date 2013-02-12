
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ЦенныеБумаги:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ЦенныеБумагиЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ЦенныеБумаги/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЦенныеБумагиЗапрос ЦенныеБумагиЗапрос = null;
			try
			{
				ЦенныеБумагиЗапрос = Клиент.Get(new ЦенныеБумагиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЦенныеБумагиЗапрос;
		}
		public static ЦенныеБумагиЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ЦенныеБумаги/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЦенныеБумагиЗапрос ЦенныеБумагиЗапрос = null;
			try
			{
				ЦенныеБумагиЗапрос = Клиент.Get(new ЦенныеБумагиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЦенныеБумагиЗапрос;
		}
		public static ЦенныеБумагиЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ЦенныеБумаги/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЦенныеБумагиЗапрос ЦенныеБумагиЗапрос = null;
			try
			{
				ЦенныеБумагиЗапрос = Клиент.Get(new ЦенныеБумагиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЦенныеБумагиЗапрос;
		}
		public static void ЗаписатьНовый(ЦенныеБумагиЗапрос ЦенныеБумагиЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ЦенныеБумаги?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЦенныеБумагиОтвет = Клиент.Post(ЦенныеБумагиЗапрос);
		}
		public static void Записать(ЦенныеБумагиЗапрос ЦенныеБумагиЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ЦенныеБумаги?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЦенныеБумагиОтвет = Клиент.Put(ЦенныеБумагиЗапрос);
		}
		public static void Удалить(ЦенныеБумагиЗапрос ЦенныеБумагиЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ЦенныеБумаги?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЦенныеБумагиОтвет = Клиент.Delete(ЦенныеБумагиЗапрос);
		}
	}
}