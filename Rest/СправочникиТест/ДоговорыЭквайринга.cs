
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ДоговорыЭквайринга:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ДоговорыЭквайрингаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыЭквайринга/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоговорыЭквайрингаЗапрос ДоговорыЭквайрингаЗапрос = null;
			try
			{
				ДоговорыЭквайрингаЗапрос = Клиент.Get(new ДоговорыЭквайрингаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоговорыЭквайрингаЗапрос;
		}
		public static ДоговорыЭквайрингаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыЭквайринга/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоговорыЭквайрингаЗапрос ДоговорыЭквайрингаЗапрос = null;
			try
			{
				ДоговорыЭквайрингаЗапрос = Клиент.Get(new ДоговорыЭквайрингаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоговорыЭквайрингаЗапрос;
		}
		public static ДоговорыЭквайрингаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыЭквайринга/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДоговорыЭквайрингаЗапрос ДоговорыЭквайрингаЗапрос = null;
			try
			{
				ДоговорыЭквайрингаЗапрос = Клиент.Get(new ДоговорыЭквайрингаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДоговорыЭквайрингаЗапрос;
		}
		public static void ЗаписатьНовый(ДоговорыЭквайрингаЗапрос ДоговорыЭквайрингаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыЭквайринга?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоговорыЭквайрингаОтвет = Клиент.Post(ДоговорыЭквайрингаЗапрос);
		}
		public static void Записать(ДоговорыЭквайрингаЗапрос ДоговорыЭквайрингаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыЭквайринга?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоговорыЭквайрингаОтвет = Клиент.Put(ДоговорыЭквайрингаЗапрос);
		}
		public static void Удалить(ДоговорыЭквайрингаЗапрос ДоговорыЭквайрингаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ДоговорыЭквайринга?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДоговорыЭквайрингаОтвет = Клиент.Delete(ДоговорыЭквайрингаЗапрос);
		}
	}
}