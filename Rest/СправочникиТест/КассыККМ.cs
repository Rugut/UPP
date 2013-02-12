
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КассыККМ:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КассыККМЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КассыККМ/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КассыККМЗапрос КассыККМЗапрос = null;
			try
			{
				КассыККМЗапрос = Клиент.Get(new КассыККМЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КассыККМЗапрос;
		}
		public static КассыККМЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/КассыККМ/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КассыККМЗапрос КассыККМЗапрос = null;
			try
			{
				КассыККМЗапрос = Клиент.Get(new КассыККМЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КассыККМЗапрос;
		}
		public static КассыККМЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КассыККМ/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КассыККМЗапрос КассыККМЗапрос = null;
			try
			{
				КассыККМЗапрос = Клиент.Get(new КассыККМЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КассыККМЗапрос;
		}
		public static void ЗаписатьНовый(КассыККМЗапрос КассыККМЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/КассыККМ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КассыККМОтвет = Клиент.Post(КассыККМЗапрос);
		}
		public static void Записать(КассыККМЗапрос КассыККМЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/КассыККМ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КассыККМОтвет = Клиент.Put(КассыККМЗапрос);
		}
		public static void Удалить(КассыККМЗапрос КассыККМЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/КассыККМ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КассыККМОтвет = Клиент.Delete(КассыККМЗапрос);
		}
	}
}