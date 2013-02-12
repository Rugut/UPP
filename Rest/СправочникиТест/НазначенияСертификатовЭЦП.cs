
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НазначенияСертификатовЭЦП:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НазначенияСертификатовЭЦПЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияСертификатовЭЦП/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НазначенияСертификатовЭЦПЗапрос НазначенияСертификатовЭЦПЗапрос = null;
			try
			{
				НазначенияСертификатовЭЦПЗапрос = Клиент.Get(new НазначенияСертификатовЭЦПЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НазначенияСертификатовЭЦПЗапрос;
		}
		public static НазначенияСертификатовЭЦПЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияСертификатовЭЦП/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НазначенияСертификатовЭЦПЗапрос НазначенияСертификатовЭЦПЗапрос = null;
			try
			{
				НазначенияСертификатовЭЦПЗапрос = Клиент.Get(new НазначенияСертификатовЭЦПЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НазначенияСертификатовЭЦПЗапрос;
		}
		public static НазначенияСертификатовЭЦПЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияСертификатовЭЦП/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НазначенияСертификатовЭЦПЗапрос НазначенияСертификатовЭЦПЗапрос = null;
			try
			{
				НазначенияСертификатовЭЦПЗапрос = Клиент.Get(new НазначенияСертификатовЭЦПЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НазначенияСертификатовЭЦПЗапрос;
		}
		public static void ЗаписатьНовый(НазначенияСертификатовЭЦПЗапрос НазначенияСертификатовЭЦПЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияСертификатовЭЦП?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НазначенияСертификатовЭЦПОтвет = Клиент.Post(НазначенияСертификатовЭЦПЗапрос);
		}
		public static void Записать(НазначенияСертификатовЭЦПЗапрос НазначенияСертификатовЭЦПЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияСертификатовЭЦП?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НазначенияСертификатовЭЦПОтвет = Клиент.Put(НазначенияСертификатовЭЦПЗапрос);
		}
		public static void Удалить(НазначенияСертификатовЭЦПЗапрос НазначенияСертификатовЭЦПЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НазначенияСертификатовЭЦП?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НазначенияСертификатовЭЦПОтвет = Клиент.Delete(НазначенияСертификатовЭЦПЗапрос);
		}
	}
}