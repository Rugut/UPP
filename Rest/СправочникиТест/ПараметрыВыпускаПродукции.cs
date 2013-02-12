
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПараметрыВыпускаПродукции:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПараметрыВыпускаПродукцииЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПараметрыВыпускаПродукции/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПараметрыВыпускаПродукцииЗапрос ПараметрыВыпускаПродукцииЗапрос = null;
			try
			{
				ПараметрыВыпускаПродукцииЗапрос = Клиент.Get(new ПараметрыВыпускаПродукцииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПараметрыВыпускаПродукцииЗапрос;
		}
		public static ПараметрыВыпускаПродукцииЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ПараметрыВыпускаПродукции/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПараметрыВыпускаПродукцииЗапрос ПараметрыВыпускаПродукцииЗапрос = null;
			try
			{
				ПараметрыВыпускаПродукцииЗапрос = Клиент.Get(new ПараметрыВыпускаПродукцииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПараметрыВыпускаПродукцииЗапрос;
		}
		public static ПараметрыВыпускаПродукцииЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПараметрыВыпускаПродукции/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПараметрыВыпускаПродукцииЗапрос ПараметрыВыпускаПродукцииЗапрос = null;
			try
			{
				ПараметрыВыпускаПродукцииЗапрос = Клиент.Get(new ПараметрыВыпускаПродукцииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПараметрыВыпускаПродукцииЗапрос;
		}
		public static void ЗаписатьНовый(ПараметрыВыпускаПродукцииЗапрос ПараметрыВыпускаПродукцииЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ПараметрыВыпускаПродукции?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПараметрыВыпускаПродукцииОтвет = Клиент.Post(ПараметрыВыпускаПродукцииЗапрос);
		}
		public static void Записать(ПараметрыВыпускаПродукцииЗапрос ПараметрыВыпускаПродукцииЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ПараметрыВыпускаПродукции?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПараметрыВыпускаПродукцииОтвет = Клиент.Put(ПараметрыВыпускаПродукцииЗапрос);
		}
		public static void Удалить(ПараметрыВыпускаПродукцииЗапрос ПараметрыВыпускаПродукцииЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ПараметрыВыпускаПродукции?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПараметрыВыпускаПродукцииОтвет = Клиент.Delete(ПараметрыВыпускаПродукцииЗапрос);
		}
	}
}