
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НастройкиВыполненияОбмена:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НастройкиВыполненияОбменаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиВыполненияОбмена/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиВыполненияОбменаЗапрос НастройкиВыполненияОбменаЗапрос = null;
			try
			{
				НастройкиВыполненияОбменаЗапрос = Клиент.Get(new НастройкиВыполненияОбменаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиВыполненияОбменаЗапрос;
		}
		public static НастройкиВыполненияОбменаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиВыполненияОбмена/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиВыполненияОбменаЗапрос НастройкиВыполненияОбменаЗапрос = null;
			try
			{
				НастройкиВыполненияОбменаЗапрос = Клиент.Get(new НастройкиВыполненияОбменаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиВыполненияОбменаЗапрос;
		}
		public static НастройкиВыполненияОбменаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиВыполненияОбмена/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиВыполненияОбменаЗапрос НастройкиВыполненияОбменаЗапрос = null;
			try
			{
				НастройкиВыполненияОбменаЗапрос = Клиент.Get(new НастройкиВыполненияОбменаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиВыполненияОбменаЗапрос;
		}
		public static void ЗаписатьНовый(НастройкиВыполненияОбменаЗапрос НастройкиВыполненияОбменаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиВыполненияОбмена?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиВыполненияОбменаОтвет = Клиент.Post(НастройкиВыполненияОбменаЗапрос);
		}
		public static void Записать(НастройкиВыполненияОбменаЗапрос НастройкиВыполненияОбменаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиВыполненияОбмена?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиВыполненияОбменаОтвет = Клиент.Put(НастройкиВыполненияОбменаЗапрос);
		}
		public static void Удалить(НастройкиВыполненияОбменаЗапрос НастройкиВыполненияОбменаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиВыполненияОбмена?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиВыполненияОбменаОтвет = Клиент.Delete(НастройкиВыполненияОбменаЗапрос);
		}
	}
}