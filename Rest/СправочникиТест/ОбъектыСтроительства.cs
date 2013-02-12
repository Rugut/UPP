
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОбъектыСтроительства:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОбъектыСтроительстваЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОбъектыСтроительства/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОбъектыСтроительстваЗапрос ОбъектыСтроительстваЗапрос = null;
			try
			{
				ОбъектыСтроительстваЗапрос = Клиент.Get(new ОбъектыСтроительстваЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОбъектыСтроительстваЗапрос;
		}
		public static ОбъектыСтроительстваЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ОбъектыСтроительства/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОбъектыСтроительстваЗапрос ОбъектыСтроительстваЗапрос = null;
			try
			{
				ОбъектыСтроительстваЗапрос = Клиент.Get(new ОбъектыСтроительстваЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОбъектыСтроительстваЗапрос;
		}
		public static ОбъектыСтроительстваЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОбъектыСтроительства/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОбъектыСтроительстваЗапрос ОбъектыСтроительстваЗапрос = null;
			try
			{
				ОбъектыСтроительстваЗапрос = Клиент.Get(new ОбъектыСтроительстваЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОбъектыСтроительстваЗапрос;
		}
		public static void ЗаписатьНовый(ОбъектыСтроительстваЗапрос ОбъектыСтроительстваЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ОбъектыСтроительства?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОбъектыСтроительстваОтвет = Клиент.Post(ОбъектыСтроительстваЗапрос);
		}
		public static void Записать(ОбъектыСтроительстваЗапрос ОбъектыСтроительстваЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ОбъектыСтроительства?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОбъектыСтроительстваОтвет = Клиент.Put(ОбъектыСтроительстваЗапрос);
		}
		public static void Удалить(ОбъектыСтроительстваЗапрос ОбъектыСтроительстваЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ОбъектыСтроительства?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОбъектыСтроительстваОтвет = Клиент.Delete(ОбъектыСтроительстваЗапрос);
		}
	}
}