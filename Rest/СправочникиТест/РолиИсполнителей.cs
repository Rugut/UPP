
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class РолиИсполнителей:V82.Rest.СправочникиТест.СправочникТест
	{
		public static РолиИсполнителейЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РолиИсполнителей/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РолиИсполнителейЗапрос РолиИсполнителейЗапрос = null;
			try
			{
				РолиИсполнителейЗапрос = Клиент.Get(new РолиИсполнителейЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РолиИсполнителейЗапрос;
		}
		public static РолиИсполнителейЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/РолиИсполнителей/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РолиИсполнителейЗапрос РолиИсполнителейЗапрос = null;
			try
			{
				РолиИсполнителейЗапрос = Клиент.Get(new РолиИсполнителейЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РолиИсполнителейЗапрос;
		}
		public static РолиИсполнителейЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РолиИсполнителей/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РолиИсполнителейЗапрос РолиИсполнителейЗапрос = null;
			try
			{
				РолиИсполнителейЗапрос = Клиент.Get(new РолиИсполнителейЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РолиИсполнителейЗапрос;
		}
		public static void ЗаписатьНовый(РолиИсполнителейЗапрос РолиИсполнителейЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/РолиИсполнителей?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РолиИсполнителейОтвет = Клиент.Post(РолиИсполнителейЗапрос);
		}
		public static void Записать(РолиИсполнителейЗапрос РолиИсполнителейЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/РолиИсполнителей?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РолиИсполнителейОтвет = Клиент.Put(РолиИсполнителейЗапрос);
		}
		public static void Удалить(РолиИсполнителейЗапрос РолиИсполнителейЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/РолиИсполнителей?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РолиИсполнителейОтвет = Клиент.Delete(РолиИсполнителейЗапрос);
		}
	}
}