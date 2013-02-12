
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыОбразованияФизЛиц:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыОбразованияФизЛицЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыОбразованияФизЛиц/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыОбразованияФизЛицЗапрос ВидыОбразованияФизЛицЗапрос = null;
			try
			{
				ВидыОбразованияФизЛицЗапрос = Клиент.Get(new ВидыОбразованияФизЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыОбразованияФизЛицЗапрос;
		}
		public static ВидыОбразованияФизЛицЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыОбразованияФизЛиц/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыОбразованияФизЛицЗапрос ВидыОбразованияФизЛицЗапрос = null;
			try
			{
				ВидыОбразованияФизЛицЗапрос = Клиент.Get(new ВидыОбразованияФизЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыОбразованияФизЛицЗапрос;
		}
		public static ВидыОбразованияФизЛицЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыОбразованияФизЛиц/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыОбразованияФизЛицЗапрос ВидыОбразованияФизЛицЗапрос = null;
			try
			{
				ВидыОбразованияФизЛицЗапрос = Клиент.Get(new ВидыОбразованияФизЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыОбразованияФизЛицЗапрос;
		}
		public static void ЗаписатьНовый(ВидыОбразованияФизЛицЗапрос ВидыОбразованияФизЛицЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыОбразованияФизЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыОбразованияФизЛицОтвет = Клиент.Post(ВидыОбразованияФизЛицЗапрос);
		}
		public static void Записать(ВидыОбразованияФизЛицЗапрос ВидыОбразованияФизЛицЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыОбразованияФизЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыОбразованияФизЛицОтвет = Клиент.Put(ВидыОбразованияФизЛицЗапрос);
		}
		public static void Удалить(ВидыОбразованияФизЛицЗапрос ВидыОбразованияФизЛицЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыОбразованияФизЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыОбразованияФизЛицОтвет = Клиент.Delete(ВидыОбразованияФизЛицЗапрос);
		}
	}
}