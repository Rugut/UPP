
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class РазделыАнкеты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static РазделыАнкетыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РазделыАнкеты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РазделыАнкетыЗапрос РазделыАнкетыЗапрос = null;
			try
			{
				РазделыАнкетыЗапрос = Клиент.Get(new РазделыАнкетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РазделыАнкетыЗапрос;
		}
		public static РазделыАнкетыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/РазделыАнкеты/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РазделыАнкетыЗапрос РазделыАнкетыЗапрос = null;
			try
			{
				РазделыАнкетыЗапрос = Клиент.Get(new РазделыАнкетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РазделыАнкетыЗапрос;
		}
		public static РазделыАнкетыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РазделыАнкеты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РазделыАнкетыЗапрос РазделыАнкетыЗапрос = null;
			try
			{
				РазделыАнкетыЗапрос = Клиент.Get(new РазделыАнкетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РазделыАнкетыЗапрос;
		}
		public static void ЗаписатьНовый(РазделыАнкетыЗапрос РазделыАнкетыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/РазделыАнкеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РазделыАнкетыОтвет = Клиент.Post(РазделыАнкетыЗапрос);
		}
		public static void Записать(РазделыАнкетыЗапрос РазделыАнкетыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/РазделыАнкеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РазделыАнкетыОтвет = Клиент.Put(РазделыАнкетыЗапрос);
		}
		public static void Удалить(РазделыАнкетыЗапрос РазделыАнкетыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/РазделыАнкеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РазделыАнкетыОтвет = Клиент.Delete(РазделыАнкетыЗапрос);
		}
	}
}