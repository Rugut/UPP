
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ДоговорыКонтрагентов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ДоговорыКонтрагентовЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыКонтрагентов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоговорыКонтрагентовЗапрос ДоговорыКонтрагентовЗапрос = null;
			try
			{
				ДоговорыКонтрагентовЗапрос = Клиент.Get(new ДоговорыКонтрагентовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоговорыКонтрагентовЗапрос;
		}
		public static ДоговорыКонтрагентовЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыКонтрагентов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоговорыКонтрагентовЗапрос ДоговорыКонтрагентовЗапрос = null;
			try
			{
				ДоговорыКонтрагентовЗапрос = Клиент.Get(new ДоговорыКонтрагентовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоговорыКонтрагентовЗапрос;
		}
		public static ДоговорыКонтрагентовЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыКонтрагентов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоговорыКонтрагентовЗапрос ДоговорыКонтрагентовЗапрос = null;
			try
			{
				ДоговорыКонтрагентовЗапрос = Клиент.Get(new ДоговорыКонтрагентовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоговорыКонтрагентовЗапрос;
		}
		public static void ЗаписатьНовый(ДоговорыКонтрагентовЗапрос ДоговорыКонтрагентовЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыКонтрагентов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоговорыКонтрагентовОтвет = Клиент.Post(ДоговорыКонтрагентовЗапрос);
		}
		public static void Записать(ДоговорыКонтрагентовЗапрос ДоговорыКонтрагентовЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыКонтрагентов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоговорыКонтрагентовОтвет = Клиент.Put(ДоговорыКонтрагентовЗапрос);
		}
		public static void Удалить(ДоговорыКонтрагентовЗапрос ДоговорыКонтрагентовЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыКонтрагентов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоговорыКонтрагентовОтвет = Клиент.Delete(ДоговорыКонтрагентовЗапрос);
		}
	}
}