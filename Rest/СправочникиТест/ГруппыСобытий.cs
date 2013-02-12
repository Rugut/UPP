
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ГруппыСобытий:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ГруппыСобытийЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыСобытий/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГруппыСобытийЗапрос ГруппыСобытийЗапрос = null;
			try
			{
				ГруппыСобытийЗапрос = Клиент.Get(new ГруппыСобытийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГруппыСобытийЗапрос;
		}
		public static ГруппыСобытийЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыСобытий/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГруппыСобытийЗапрос ГруппыСобытийЗапрос = null;
			try
			{
				ГруппыСобытийЗапрос = Клиент.Get(new ГруппыСобытийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГруппыСобытийЗапрос;
		}
		public static ГруппыСобытийЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыСобытий/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГруппыСобытийЗапрос ГруппыСобытийЗапрос = null;
			try
			{
				ГруппыСобытийЗапрос = Клиент.Get(new ГруппыСобытийЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГруппыСобытийЗапрос;
		}
		public static void ЗаписатьНовый(ГруппыСобытийЗапрос ГруппыСобытийЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыСобытий?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГруппыСобытийОтвет = Клиент.Post(ГруппыСобытийЗапрос);
		}
		public static void Записать(ГруппыСобытийЗапрос ГруппыСобытийЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыСобытий?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГруппыСобытийОтвет = Клиент.Put(ГруппыСобытийЗапрос);
		}
		public static void Удалить(ГруппыСобытийЗапрос ГруппыСобытийЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыСобытий?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГруппыСобытийОтвет = Клиент.Delete(ГруппыСобытийЗапрос);
		}
	}
}