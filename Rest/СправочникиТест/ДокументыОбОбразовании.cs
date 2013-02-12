
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ДокументыОбОбразовании:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ДокументыОбОбразованииЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ДокументыОбОбразовании/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДокументыОбОбразованииЗапрос ДокументыОбОбразованииЗапрос = null;
			try
			{
				ДокументыОбОбразованииЗапрос = Клиент.Get(new ДокументыОбОбразованииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДокументыОбОбразованииЗапрос;
		}
		public static ДокументыОбОбразованииЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ДокументыОбОбразовании/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДокументыОбОбразованииЗапрос ДокументыОбОбразованииЗапрос = null;
			try
			{
				ДокументыОбОбразованииЗапрос = Клиент.Get(new ДокументыОбОбразованииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДокументыОбОбразованииЗапрос;
		}
		public static ДокументыОбОбразованииЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ДокументыОбОбразовании/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ДокументыОбОбразованииЗапрос ДокументыОбОбразованииЗапрос = null;
			try
			{
				ДокументыОбОбразованииЗапрос = Клиент.Get(new ДокументыОбОбразованииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ДокументыОбОбразованииЗапрос;
		}
		public static void ЗаписатьНовый(ДокументыОбОбразованииЗапрос ДокументыОбОбразованииЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ДокументыОбОбразовании?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДокументыОбОбразованииОтвет = Клиент.Post(ДокументыОбОбразованииЗапрос);
		}
		public static void Записать(ДокументыОбОбразованииЗапрос ДокументыОбОбразованииЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ДокументыОбОбразовании?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДокументыОбОбразованииОтвет = Клиент.Put(ДокументыОбОбразованииЗапрос);
		}
		public static void Удалить(ДокументыОбОбразованииЗапрос ДокументыОбОбразованииЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ДокументыОбОбразовании?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ДокументыОбОбразованииОтвет = Клиент.Delete(ДокументыОбОбразованииЗапрос);
		}
	}
}