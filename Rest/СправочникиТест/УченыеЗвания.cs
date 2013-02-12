
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class УченыеЗвания:V82.Rest.СправочникиТест.СправочникТест
	{
		public static УченыеЗванияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/УченыеЗвания/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УченыеЗванияЗапрос УченыеЗванияЗапрос = null;
			try
			{
				УченыеЗванияЗапрос = Клиент.Get(new УченыеЗванияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УченыеЗванияЗапрос;
		}
		public static УченыеЗванияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/УченыеЗвания/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УченыеЗванияЗапрос УченыеЗванияЗапрос = null;
			try
			{
				УченыеЗванияЗапрос = Клиент.Get(new УченыеЗванияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УченыеЗванияЗапрос;
		}
		public static УченыеЗванияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/УченыеЗвания/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УченыеЗванияЗапрос УченыеЗванияЗапрос = null;
			try
			{
				УченыеЗванияЗапрос = Клиент.Get(new УченыеЗванияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УченыеЗванияЗапрос;
		}
		public static void ЗаписатьНовый(УченыеЗванияЗапрос УченыеЗванияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/УченыеЗвания?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УченыеЗванияОтвет = Клиент.Post(УченыеЗванияЗапрос);
		}
		public static void Записать(УченыеЗванияЗапрос УченыеЗванияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/УченыеЗвания?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УченыеЗванияОтвет = Клиент.Put(УченыеЗванияЗапрос);
		}
		public static void Удалить(УченыеЗванияЗапрос УченыеЗванияЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/УченыеЗвания?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УченыеЗванияОтвет = Клиент.Delete(УченыеЗванияЗапрос);
		}
	}
}