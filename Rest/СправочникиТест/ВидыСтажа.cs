
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыСтажа:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыСтажаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВидыСтажа/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыСтажаЗапрос ВидыСтажаЗапрос = null;
			try
			{
				ВидыСтажаЗапрос = Клиент.Get(new ВидыСтажаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыСтажаЗапрос;
		}
		public static ВидыСтажаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ВидыСтажа/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыСтажаЗапрос ВидыСтажаЗапрос = null;
			try
			{
				ВидыСтажаЗапрос = Клиент.Get(new ВидыСтажаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыСтажаЗапрос;
		}
		public static ВидыСтажаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВидыСтажа/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыСтажаЗапрос ВидыСтажаЗапрос = null;
			try
			{
				ВидыСтажаЗапрос = Клиент.Get(new ВидыСтажаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыСтажаЗапрос;
		}
		public static void ЗаписатьНовый(ВидыСтажаЗапрос ВидыСтажаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ВидыСтажа?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыСтажаОтвет = Клиент.Post(ВидыСтажаЗапрос);
		}
		public static void Записать(ВидыСтажаЗапрос ВидыСтажаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ВидыСтажа?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыСтажаОтвет = Клиент.Put(ВидыСтажаЗапрос);
		}
		public static void Удалить(ВидыСтажаЗапрос ВидыСтажаЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ВидыСтажа?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыСтажаОтвет = Клиент.Delete(ВидыСтажаЗапрос);
		}
	}
}