
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НастройкиОбменаДанными:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НастройкиОбменаДаннымиЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаДанными/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиОбменаДаннымиЗапрос НастройкиОбменаДаннымиЗапрос = null;
			try
			{
				НастройкиОбменаДаннымиЗапрос = Клиент.Get(new НастройкиОбменаДаннымиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиОбменаДаннымиЗапрос;
		}
		public static НастройкиОбменаДаннымиЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаДанными/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиОбменаДаннымиЗапрос НастройкиОбменаДаннымиЗапрос = null;
			try
			{
				НастройкиОбменаДаннымиЗапрос = Клиент.Get(new НастройкиОбменаДаннымиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиОбменаДаннымиЗапрос;
		}
		public static НастройкиОбменаДаннымиЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаДанными/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НастройкиОбменаДаннымиЗапрос НастройкиОбменаДаннымиЗапрос = null;
			try
			{
				НастройкиОбменаДаннымиЗапрос = Клиент.Get(new НастройкиОбменаДаннымиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НастройкиОбменаДаннымиЗапрос;
		}
		public static void ЗаписатьНовый(НастройкиОбменаДаннымиЗапрос НастройкиОбменаДаннымиЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаДанными?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиОбменаДаннымиОтвет = Клиент.Post(НастройкиОбменаДаннымиЗапрос);
		}
		public static void Записать(НастройкиОбменаДаннымиЗапрос НастройкиОбменаДаннымиЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаДанными?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиОбменаДаннымиОтвет = Клиент.Put(НастройкиОбменаДаннымиЗапрос);
		}
		public static void Удалить(НастройкиОбменаДаннымиЗапрос НастройкиОбменаДаннымиЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НастройкиОбменаДанными?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НастройкиОбменаДаннымиОтвет = Клиент.Delete(НастройкиОбменаДаннымиЗапрос);
		}
	}
}