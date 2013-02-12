
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОформленияСтрокПисем:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОформленияСтрокПисемЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОформленияСтрокПисем/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОформленияСтрокПисемЗапрос ОформленияСтрокПисемЗапрос = null;
			try
			{
				ОформленияСтрокПисемЗапрос = Клиент.Get(new ОформленияСтрокПисемЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОформленияСтрокПисемЗапрос;
		}
		public static ОформленияСтрокПисемЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ОформленияСтрокПисем/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОформленияСтрокПисемЗапрос ОформленияСтрокПисемЗапрос = null;
			try
			{
				ОформленияСтрокПисемЗапрос = Клиент.Get(new ОформленияСтрокПисемЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОформленияСтрокПисемЗапрос;
		}
		public static ОформленияСтрокПисемЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОформленияСтрокПисем/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОформленияСтрокПисемЗапрос ОформленияСтрокПисемЗапрос = null;
			try
			{
				ОформленияСтрокПисемЗапрос = Клиент.Get(new ОформленияСтрокПисемЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОформленияСтрокПисемЗапрос;
		}
		public static void ЗаписатьНовый(ОформленияСтрокПисемЗапрос ОформленияСтрокПисемЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ОформленияСтрокПисем?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОформленияСтрокПисемОтвет = Клиент.Post(ОформленияСтрокПисемЗапрос);
		}
		public static void Записать(ОформленияСтрокПисемЗапрос ОформленияСтрокПисемЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ОформленияСтрокПисем?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОформленияСтрокПисемОтвет = Клиент.Put(ОформленияСтрокПисемЗапрос);
		}
		public static void Удалить(ОформленияСтрокПисемЗапрос ОформленияСтрокПисемЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ОформленияСтрокПисем?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОформленияСтрокПисемОтвет = Клиент.Delete(ОформленияСтрокПисемЗапрос);
		}
	}
}