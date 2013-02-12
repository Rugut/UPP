
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыНоменклатуры:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыНоменклатурыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыНоменклатуры/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыНоменклатурыЗапрос ВидыНоменклатурыЗапрос = null;
			try
			{
				ВидыНоменклатурыЗапрос = Клиент.Get(new ВидыНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыНоменклатурыЗапрос;
		}
		public static ВидыНоменклатурыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыНоменклатуры/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыНоменклатурыЗапрос ВидыНоменклатурыЗапрос = null;
			try
			{
				ВидыНоменклатурыЗапрос = Клиент.Get(new ВидыНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыНоменклатурыЗапрос;
		}
		public static ВидыНоменклатурыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыНоменклатуры/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыНоменклатурыЗапрос ВидыНоменклатурыЗапрос = null;
			try
			{
				ВидыНоменклатурыЗапрос = Клиент.Get(new ВидыНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыНоменклатурыЗапрос;
		}
		public static void ЗаписатьНовый(ВидыНоменклатурыЗапрос ВидыНоменклатурыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыНоменклатурыОтвет = Клиент.Post(ВидыНоменклатурыЗапрос);
		}
		public static void Записать(ВидыНоменклатурыЗапрос ВидыНоменклатурыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыНоменклатурыОтвет = Клиент.Put(ВидыНоменклатурыЗапрос);
		}
		public static void Удалить(ВидыНоменклатурыЗапрос ВидыНоменклатурыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыНоменклатурыОтвет = Клиент.Delete(ВидыНоменклатурыЗапрос);
		}
	}
}