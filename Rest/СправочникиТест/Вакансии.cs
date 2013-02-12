
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Вакансии:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВакансииЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Вакансии/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВакансииЗапрос ВакансииЗапрос = null;
			try
			{
				ВакансииЗапрос = Клиент.Get(new ВакансииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВакансииЗапрос;
		}
		public static ВакансииЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/Вакансии/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВакансииЗапрос ВакансииЗапрос = null;
			try
			{
				ВакансииЗапрос = Клиент.Get(new ВакансииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВакансииЗапрос;
		}
		public static ВакансииЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Вакансии/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВакансииЗапрос ВакансииЗапрос = null;
			try
			{
				ВакансииЗапрос = Клиент.Get(new ВакансииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВакансииЗапрос;
		}
		public static void ЗаписатьНовый(ВакансииЗапрос ВакансииЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/Вакансии?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВакансииОтвет = Клиент.Post(ВакансииЗапрос);
		}
		public static void Записать(ВакансииЗапрос ВакансииЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/Вакансии?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВакансииОтвет = Клиент.Put(ВакансииЗапрос);
		}
		public static void Удалить(ВакансииЗапрос ВакансииЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/Вакансии?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВакансииОтвет = Клиент.Delete(ВакансииЗапрос);
		}
	}
}