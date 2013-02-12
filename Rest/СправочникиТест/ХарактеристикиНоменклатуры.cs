
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ХарактеристикиНоменклатуры:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ХарактеристикиНоменклатурыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ХарактеристикиНоменклатуры/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ХарактеристикиНоменклатурыЗапрос ХарактеристикиНоменклатурыЗапрос = null;
			try
			{
				ХарактеристикиНоменклатурыЗапрос = Клиент.Get(new ХарактеристикиНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ХарактеристикиНоменклатурыЗапрос;
		}
		public static ХарактеристикиНоменклатурыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ХарактеристикиНоменклатуры/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ХарактеристикиНоменклатурыЗапрос ХарактеристикиНоменклатурыЗапрос = null;
			try
			{
				ХарактеристикиНоменклатурыЗапрос = Клиент.Get(new ХарактеристикиНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ХарактеристикиНоменклатурыЗапрос;
		}
		public static void ЗаписатьНовый(ХарактеристикиНоменклатурыЗапрос ХарактеристикиНоменклатурыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ХарактеристикиНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ХарактеристикиНоменклатурыОтвет = Клиент.Post(ХарактеристикиНоменклатурыЗапрос);
		}
		public static void Записать(ХарактеристикиНоменклатурыЗапрос ХарактеристикиНоменклатурыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ХарактеристикиНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ХарактеристикиНоменклатурыОтвет = Клиент.Put(ХарактеристикиНоменклатурыЗапрос);
		}
		public static void Удалить(ХарактеристикиНоменклатурыЗапрос ХарактеристикиНоменклатурыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ХарактеристикиНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ХарактеристикиНоменклатурыОтвет = Клиент.Delete(ХарактеристикиНоменклатурыЗапрос);
		}
	}
}