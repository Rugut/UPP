
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТиповыеАнкеты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТиповыеАнкетыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТиповыеАнкеты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТиповыеАнкетыЗапрос ТиповыеАнкетыЗапрос = null;
			try
			{
				ТиповыеАнкетыЗапрос = Клиент.Get(new ТиповыеАнкетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТиповыеАнкетыЗапрос;
		}
		public static ТиповыеАнкетыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ТиповыеАнкеты/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТиповыеАнкетыЗапрос ТиповыеАнкетыЗапрос = null;
			try
			{
				ТиповыеАнкетыЗапрос = Клиент.Get(new ТиповыеАнкетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТиповыеАнкетыЗапрос;
		}
		public static ТиповыеАнкетыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТиповыеАнкеты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТиповыеАнкетыЗапрос ТиповыеАнкетыЗапрос = null;
			try
			{
				ТиповыеАнкетыЗапрос = Клиент.Get(new ТиповыеАнкетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТиповыеАнкетыЗапрос;
		}
		public static void ЗаписатьНовый(ТиповыеАнкетыЗапрос ТиповыеАнкетыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ТиповыеАнкеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТиповыеАнкетыОтвет = Клиент.Post(ТиповыеАнкетыЗапрос);
		}
		public static void Записать(ТиповыеАнкетыЗапрос ТиповыеАнкетыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ТиповыеАнкеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТиповыеАнкетыОтвет = Клиент.Put(ТиповыеАнкетыЗапрос);
		}
		public static void Удалить(ТиповыеАнкетыЗапрос ТиповыеАнкетыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ТиповыеАнкеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТиповыеАнкетыОтвет = Клиент.Delete(ТиповыеАнкетыЗапрос);
		}
	}
}