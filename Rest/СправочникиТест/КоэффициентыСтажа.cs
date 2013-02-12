
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КоэффициентыСтажа:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КоэффициентыСтажаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КоэффициентыСтажа/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КоэффициентыСтажаЗапрос КоэффициентыСтажаЗапрос = null;
			try
			{
				КоэффициентыСтажаЗапрос = Клиент.Get(new КоэффициентыСтажаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КоэффициентыСтажаЗапрос;
		}
		public static КоэффициентыСтажаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/КоэффициентыСтажа/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КоэффициентыСтажаЗапрос КоэффициентыСтажаЗапрос = null;
			try
			{
				КоэффициентыСтажаЗапрос = Клиент.Get(new КоэффициентыСтажаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КоэффициентыСтажаЗапрос;
		}
		public static КоэффициентыСтажаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КоэффициентыСтажа/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КоэффициентыСтажаЗапрос КоэффициентыСтажаЗапрос = null;
			try
			{
				КоэффициентыСтажаЗапрос = Клиент.Get(new КоэффициентыСтажаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КоэффициентыСтажаЗапрос;
		}
		public static void ЗаписатьНовый(КоэффициентыСтажаЗапрос КоэффициентыСтажаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/КоэффициентыСтажа?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КоэффициентыСтажаОтвет = Клиент.Post(КоэффициентыСтажаЗапрос);
		}
		public static void Записать(КоэффициентыСтажаЗапрос КоэффициентыСтажаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/КоэффициентыСтажа?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КоэффициентыСтажаОтвет = Клиент.Put(КоэффициентыСтажаЗапрос);
		}
		public static void Удалить(КоэффициентыСтажаЗапрос КоэффициентыСтажаЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/КоэффициентыСтажа?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КоэффициентыСтажаОтвет = Клиент.Delete(КоэффициентыСтажаЗапрос);
		}
	}
}