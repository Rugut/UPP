
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыДисконтныхКарт:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыДисконтныхКартЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыДисконтныхКарт/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыДисконтныхКартЗапрос ВидыДисконтныхКартЗапрос = null;
			try
			{
				ВидыДисконтныхКартЗапрос = Клиент.Get(new ВидыДисконтныхКартЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыДисконтныхКартЗапрос;
		}
		public static ВидыДисконтныхКартЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыДисконтныхКарт/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыДисконтныхКартЗапрос ВидыДисконтныхКартЗапрос = null;
			try
			{
				ВидыДисконтныхКартЗапрос = Клиент.Get(new ВидыДисконтныхКартЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыДисконтныхКартЗапрос;
		}
		public static ВидыДисконтныхКартЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыДисконтныхКарт/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыДисконтныхКартЗапрос ВидыДисконтныхКартЗапрос = null;
			try
			{
				ВидыДисконтныхКартЗапрос = Клиент.Get(new ВидыДисконтныхКартЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыДисконтныхКартЗапрос;
		}
		public static void ЗаписатьНовый(ВидыДисконтныхКартЗапрос ВидыДисконтныхКартЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыДисконтныхКарт?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыДисконтныхКартОтвет = Клиент.Post(ВидыДисконтныхКартЗапрос);
		}
		public static void Записать(ВидыДисконтныхКартЗапрос ВидыДисконтныхКартЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыДисконтныхКарт?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыДисконтныхКартОтвет = Клиент.Put(ВидыДисконтныхКартЗапрос);
		}
		public static void Удалить(ВидыДисконтныхКартЗапрос ВидыДисконтныхКартЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыДисконтныхКарт?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыДисконтныхКартОтвет = Клиент.Delete(ВидыДисконтныхКартЗапрос);
		}
	}
}