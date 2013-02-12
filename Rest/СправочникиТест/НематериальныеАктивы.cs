
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НематериальныеАктивы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НематериальныеАктивыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НематериальныеАктивы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НематериальныеАктивыЗапрос НематериальныеАктивыЗапрос = null;
			try
			{
				НематериальныеАктивыЗапрос = Клиент.Get(new НематериальныеАктивыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НематериальныеАктивыЗапрос;
		}
		public static НематериальныеАктивыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/НематериальныеАктивы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НематериальныеАктивыЗапрос НематериальныеАктивыЗапрос = null;
			try
			{
				НематериальныеАктивыЗапрос = Клиент.Get(new НематериальныеАктивыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НематериальныеАктивыЗапрос;
		}
		public static НематериальныеАктивыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НематериальныеАктивы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НематериальныеАктивыЗапрос НематериальныеАктивыЗапрос = null;
			try
			{
				НематериальныеАктивыЗапрос = Клиент.Get(new НематериальныеАктивыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НематериальныеАктивыЗапрос;
		}
		public static void ЗаписатьНовый(НематериальныеАктивыЗапрос НематериальныеАктивыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НематериальныеАктивы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НематериальныеАктивыОтвет = Клиент.Post(НематериальныеАктивыЗапрос);
		}
		public static void Записать(НематериальныеАктивыЗапрос НематериальныеАктивыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НематериальныеАктивы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НематериальныеАктивыОтвет = Клиент.Put(НематериальныеАктивыЗапрос);
		}
		public static void Удалить(НематериальныеАктивыЗапрос НематериальныеАктивыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НематериальныеАктивы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НематериальныеАктивыОтвет = Клиент.Delete(НематериальныеАктивыЗапрос);
		}
	}
}