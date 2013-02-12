
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыЗаметок:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыЗаметокЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЗаметок/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыЗаметокЗапрос ВидыЗаметокЗапрос = null;
			try
			{
				ВидыЗаметокЗапрос = Клиент.Get(new ВидыЗаметокЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыЗаметокЗапрос;
		}
		public static ВидыЗаметокЗапрос НайтиПоКоду(decimal Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЗаметок/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыЗаметокЗапрос ВидыЗаметокЗапрос = null;
			try
			{
				ВидыЗаметокЗапрос = Клиент.Get(new ВидыЗаметокЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыЗаметокЗапрос;
		}
		public static ВидыЗаметокЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЗаметок/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыЗаметокЗапрос ВидыЗаметокЗапрос = null;
			try
			{
				ВидыЗаметокЗапрос = Клиент.Get(new ВидыЗаметокЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыЗаметокЗапрос;
		}
		public static void ЗаписатьНовый(ВидыЗаметокЗапрос ВидыЗаметокЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЗаметок?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыЗаметокОтвет = Клиент.Post(ВидыЗаметокЗапрос);
		}
		public static void Записать(ВидыЗаметокЗапрос ВидыЗаметокЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЗаметок?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыЗаметокОтвет = Клиент.Put(ВидыЗаметокЗапрос);
		}
		public static void Удалить(ВидыЗаметокЗапрос ВидыЗаметокЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЗаметок?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыЗаметокОтвет = Клиент.Delete(ВидыЗаметокЗапрос);
		}
	}
}