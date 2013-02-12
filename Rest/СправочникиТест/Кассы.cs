
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Кассы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КассыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Кассы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КассыЗапрос КассыЗапрос = null;
			try
			{
				КассыЗапрос = Клиент.Get(new КассыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КассыЗапрос;
		}
		public static КассыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/Кассы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КассыЗапрос КассыЗапрос = null;
			try
			{
				КассыЗапрос = Клиент.Get(new КассыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КассыЗапрос;
		}
		public static КассыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Кассы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КассыЗапрос КассыЗапрос = null;
			try
			{
				КассыЗапрос = Клиент.Get(new КассыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КассыЗапрос;
		}
		public static void ЗаписатьНовый(КассыЗапрос КассыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/Кассы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КассыОтвет = Клиент.Post(КассыЗапрос);
		}
		public static void Записать(КассыЗапрос КассыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/Кассы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КассыОтвет = Клиент.Put(КассыЗапрос);
		}
		public static void Удалить(КассыЗапрос КассыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/Кассы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КассыОтвет = Клиент.Delete(КассыЗапрос);
		}
	}
}