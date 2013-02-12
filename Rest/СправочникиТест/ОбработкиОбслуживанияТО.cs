
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОбработкиОбслуживанияТО:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОбработкиОбслуживанияТОЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОбработкиОбслуживанияТО/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОбработкиОбслуживанияТОЗапрос ОбработкиОбслуживанияТОЗапрос = null;
			try
			{
				ОбработкиОбслуживанияТОЗапрос = Клиент.Get(new ОбработкиОбслуживанияТОЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОбработкиОбслуживанияТОЗапрос;
		}
		public static ОбработкиОбслуживанияТОЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ОбработкиОбслуживанияТО/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОбработкиОбслуживанияТОЗапрос ОбработкиОбслуживанияТОЗапрос = null;
			try
			{
				ОбработкиОбслуживанияТОЗапрос = Клиент.Get(new ОбработкиОбслуживанияТОЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОбработкиОбслуживанияТОЗапрос;
		}
		public static ОбработкиОбслуживанияТОЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОбработкиОбслуживанияТО/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОбработкиОбслуживанияТОЗапрос ОбработкиОбслуживанияТОЗапрос = null;
			try
			{
				ОбработкиОбслуживанияТОЗапрос = Клиент.Get(new ОбработкиОбслуживанияТОЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОбработкиОбслуживанияТОЗапрос;
		}
		public static void ЗаписатьНовый(ОбработкиОбслуживанияТОЗапрос ОбработкиОбслуживанияТОЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ОбработкиОбслуживанияТО?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОбработкиОбслуживанияТООтвет = Клиент.Post(ОбработкиОбслуживанияТОЗапрос);
		}
		public static void Записать(ОбработкиОбслуживанияТОЗапрос ОбработкиОбслуживанияТОЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ОбработкиОбслуживанияТО?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОбработкиОбслуживанияТООтвет = Клиент.Put(ОбработкиОбслуживанияТОЗапрос);
		}
		public static void Удалить(ОбработкиОбслуживанияТОЗапрос ОбработкиОбслуживанияТОЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ОбработкиОбслуживанияТО?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОбработкиОбслуживанияТООтвет = Клиент.Delete(ОбработкиОбслуживанияТОЗапрос);
		}
	}
}