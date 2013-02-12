
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НастройкаИнтервалов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НастройкаИнтерваловЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/НастройкаИнтервалов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкаИнтерваловЗапрос НастройкаИнтерваловЗапрос = null;
			try
			{
				НастройкаИнтерваловЗапрос = Клиент.Get(new НастройкаИнтерваловЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкаИнтерваловЗапрос;
		}
		public static НастройкаИнтерваловЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/НастройкаИнтервалов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкаИнтерваловЗапрос НастройкаИнтерваловЗапрос = null;
			try
			{
				НастройкаИнтерваловЗапрос = Клиент.Get(new НастройкаИнтерваловЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкаИнтерваловЗапрос;
		}
		public static void ЗаписатьНовый(НастройкаИнтерваловЗапрос НастройкаИнтерваловЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/НастройкаИнтервалов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкаИнтерваловОтвет = Клиент.Post(НастройкаИнтерваловЗапрос);
		}
		public static void Записать(НастройкаИнтерваловЗапрос НастройкаИнтерваловЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/НастройкаИнтервалов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкаИнтерваловОтвет = Клиент.Put(НастройкаИнтерваловЗапрос);
		}
		public static void Удалить(НастройкаИнтерваловЗапрос НастройкаИнтерваловЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/НастройкаИнтервалов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкаИнтерваловОтвет = Клиент.Delete(НастройкаИнтерваловЗапрос);
		}
	}
}