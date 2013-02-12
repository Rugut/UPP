
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Субконто:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СубконтоЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Субконто/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СубконтоЗапрос СубконтоЗапрос = null;
			try
			{
				СубконтоЗапрос = Клиент.Get(new СубконтоЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СубконтоЗапрос;
		}
		public static СубконтоЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Субконто/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СубконтоЗапрос СубконтоЗапрос = null;
			try
			{
				СубконтоЗапрос = Клиент.Get(new СубконтоЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СубконтоЗапрос;
		}
		public static СубконтоЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Субконто/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СубконтоЗапрос СубконтоЗапрос = null;
			try
			{
				СубконтоЗапрос = Клиент.Get(new СубконтоЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СубконтоЗапрос;
		}
		public static void ЗаписатьНовый(СубконтоЗапрос СубконтоЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Субконто?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СубконтоОтвет = Клиент.Post(СубконтоЗапрос);
		}
		public static void Записать(СубконтоЗапрос СубконтоЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Субконто?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СубконтоОтвет = Клиент.Put(СубконтоЗапрос);
		}
		public static void Удалить(СубконтоЗапрос СубконтоЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Субконто?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СубконтоОтвет = Клиент.Delete(СубконтоЗапрос);
		}
	}
}