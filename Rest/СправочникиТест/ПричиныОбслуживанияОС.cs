
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПричиныОбслуживанияОС:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПричиныОбслуживанияОСЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныОбслуживанияОС/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПричиныОбслуживанияОСЗапрос ПричиныОбслуживанияОСЗапрос = null;
			try
			{
				ПричиныОбслуживанияОСЗапрос = Клиент.Get(new ПричиныОбслуживанияОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПричиныОбслуживанияОСЗапрос;
		}
		public static ПричиныОбслуживанияОСЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныОбслуживанияОС/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПричиныОбслуживанияОСЗапрос ПричиныОбслуживанияОСЗапрос = null;
			try
			{
				ПричиныОбслуживанияОСЗапрос = Клиент.Get(new ПричиныОбслуживанияОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПричиныОбслуживанияОСЗапрос;
		}
		public static ПричиныОбслуживанияОСЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныОбслуживанияОС/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПричиныОбслуживанияОСЗапрос ПричиныОбслуживанияОСЗапрос = null;
			try
			{
				ПричиныОбслуживанияОСЗапрос = Клиент.Get(new ПричиныОбслуживанияОСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПричиныОбслуживанияОСЗапрос;
		}
		public static void ЗаписатьНовый(ПричиныОбслуживанияОСЗапрос ПричиныОбслуживанияОСЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныОбслуживанияОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПричиныОбслуживанияОСОтвет = Клиент.Post(ПричиныОбслуживанияОСЗапрос);
		}
		public static void Записать(ПричиныОбслуживанияОСЗапрос ПричиныОбслуживанияОСЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныОбслуживанияОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПричиныОбслуживанияОСОтвет = Клиент.Put(ПричиныОбслуживанияОСЗапрос);
		}
		public static void Удалить(ПричиныОбслуживанияОСЗапрос ПричиныОбслуживанияОСЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ПричиныОбслуживанияОС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПричиныОбслуживанияОСОтвет = Клиент.Delete(ПричиныОбслуживанияОСЗапрос);
		}
	}
}