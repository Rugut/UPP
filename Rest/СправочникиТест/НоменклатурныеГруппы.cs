
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НоменклатурныеГруппы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НоменклатурныеГруппыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/НоменклатурныеГруппы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НоменклатурныеГруппыЗапрос НоменклатурныеГруппыЗапрос = null;
			try
			{
				НоменклатурныеГруппыЗапрос = Клиент.Get(new НоменклатурныеГруппыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НоменклатурныеГруппыЗапрос;
		}
		public static НоменклатурныеГруппыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/НоменклатурныеГруппы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НоменклатурныеГруппыЗапрос НоменклатурныеГруппыЗапрос = null;
			try
			{
				НоменклатурныеГруппыЗапрос = Клиент.Get(new НоменклатурныеГруппыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НоменклатурныеГруппыЗапрос;
		}
		public static НоменклатурныеГруппыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/НоменклатурныеГруппы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НоменклатурныеГруппыЗапрос НоменклатурныеГруппыЗапрос = null;
			try
			{
				НоменклатурныеГруппыЗапрос = Клиент.Get(new НоменклатурныеГруппыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НоменклатурныеГруппыЗапрос;
		}
		public static void ЗаписатьНовый(НоменклатурныеГруппыЗапрос НоменклатурныеГруппыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/НоменклатурныеГруппы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НоменклатурныеГруппыОтвет = Клиент.Post(НоменклатурныеГруппыЗапрос);
		}
		public static void Записать(НоменклатурныеГруппыЗапрос НоменклатурныеГруппыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/НоменклатурныеГруппы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НоменклатурныеГруппыОтвет = Клиент.Put(НоменклатурныеГруппыЗапрос);
		}
		public static void Удалить(НоменклатурныеГруппыЗапрос НоменклатурныеГруппыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/НоменклатурныеГруппы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НоменклатурныеГруппыОтвет = Клиент.Delete(НоменклатурныеГруппыЗапрос);
		}
	}
}