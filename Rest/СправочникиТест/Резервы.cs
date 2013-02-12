
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Резервы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static РезервыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Резервы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РезервыЗапрос РезервыЗапрос = null;
			try
			{
				РезервыЗапрос = Клиент.Get(new РезервыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РезервыЗапрос;
		}
		public static РезервыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Резервы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РезервыЗапрос РезервыЗапрос = null;
			try
			{
				РезервыЗапрос = Клиент.Get(new РезервыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РезервыЗапрос;
		}
		public static РезервыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Резервы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РезервыЗапрос РезервыЗапрос = null;
			try
			{
				РезервыЗапрос = Клиент.Get(new РезервыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РезервыЗапрос;
		}
		public static void ЗаписатьНовый(РезервыЗапрос РезервыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Резервы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РезервыОтвет = Клиент.Post(РезервыЗапрос);
		}
		public static void Записать(РезервыЗапрос РезервыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Резервы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РезервыОтвет = Клиент.Put(РезервыЗапрос);
		}
		public static void Удалить(РезервыЗапрос РезервыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Резервы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РезервыОтвет = Клиент.Delete(РезервыЗапрос);
		}
	}
}