
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПрожиточныеМинимумы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПрожиточныеМинимумыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ПрожиточныеМинимумы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрожиточныеМинимумыЗапрос ПрожиточныеМинимумыЗапрос = null;
			try
			{
				ПрожиточныеМинимумыЗапрос = Клиент.Get(new ПрожиточныеМинимумыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрожиточныеМинимумыЗапрос;
		}
		public static ПрожиточныеМинимумыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ПрожиточныеМинимумы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрожиточныеМинимумыЗапрос ПрожиточныеМинимумыЗапрос = null;
			try
			{
				ПрожиточныеМинимумыЗапрос = Клиент.Get(new ПрожиточныеМинимумыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрожиточныеМинимумыЗапрос;
		}
		public static ПрожиточныеМинимумыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ПрожиточныеМинимумы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПрожиточныеМинимумыЗапрос ПрожиточныеМинимумыЗапрос = null;
			try
			{
				ПрожиточныеМинимумыЗапрос = Клиент.Get(new ПрожиточныеМинимумыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПрожиточныеМинимумыЗапрос;
		}
		public static void ЗаписатьНовый(ПрожиточныеМинимумыЗапрос ПрожиточныеМинимумыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ПрожиточныеМинимумы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрожиточныеМинимумыОтвет = Клиент.Post(ПрожиточныеМинимумыЗапрос);
		}
		public static void Записать(ПрожиточныеМинимумыЗапрос ПрожиточныеМинимумыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ПрожиточныеМинимумы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрожиточныеМинимумыОтвет = Клиент.Put(ПрожиточныеМинимумыЗапрос);
		}
		public static void Удалить(ПрожиточныеМинимумыЗапрос ПрожиточныеМинимумыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ПрожиточныеМинимумы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПрожиточныеМинимумыОтвет = Клиент.Delete(ПрожиточныеМинимумыЗапрос);
		}
	}
}