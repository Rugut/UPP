
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Регионы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static РегионыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Регионы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РегионыЗапрос РегионыЗапрос = null;
			try
			{
				РегионыЗапрос = Клиент.Get(new РегионыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РегионыЗапрос;
		}
		public static РегионыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Регионы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РегионыЗапрос РегионыЗапрос = null;
			try
			{
				РегионыЗапрос = Клиент.Get(new РегионыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РегионыЗапрос;
		}
		public static РегионыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Регионы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РегионыЗапрос РегионыЗапрос = null;
			try
			{
				РегионыЗапрос = Клиент.Get(new РегионыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РегионыЗапрос;
		}
		public static void ЗаписатьНовый(РегионыЗапрос РегионыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Регионы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РегионыОтвет = Клиент.Post(РегионыЗапрос);
		}
		public static void Записать(РегионыЗапрос РегионыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Регионы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РегионыОтвет = Клиент.Put(РегионыЗапрос);
		}
		public static void Удалить(РегионыЗапрос РегионыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Регионы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РегионыОтвет = Клиент.Delete(РегионыЗапрос);
		}
	}
}