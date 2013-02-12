
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Военкоматы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВоенкоматыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Военкоматы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВоенкоматыЗапрос ВоенкоматыЗапрос = null;
			try
			{
				ВоенкоматыЗапрос = Клиент.Get(new ВоенкоматыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВоенкоматыЗапрос;
		}
		public static ВоенкоматыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Военкоматы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВоенкоматыЗапрос ВоенкоматыЗапрос = null;
			try
			{
				ВоенкоматыЗапрос = Клиент.Get(new ВоенкоматыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВоенкоматыЗапрос;
		}
		public static ВоенкоматыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Военкоматы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВоенкоматыЗапрос ВоенкоматыЗапрос = null;
			try
			{
				ВоенкоматыЗапрос = Клиент.Get(new ВоенкоматыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВоенкоматыЗапрос;
		}
		public static void ЗаписатьНовый(ВоенкоматыЗапрос ВоенкоматыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Военкоматы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВоенкоматыОтвет = Клиент.Post(ВоенкоматыЗапрос);
		}
		public static void Записать(ВоенкоматыЗапрос ВоенкоматыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Военкоматы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВоенкоматыОтвет = Клиент.Put(ВоенкоматыЗапрос);
		}
		public static void Удалить(ВоенкоматыЗапрос ВоенкоматыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Военкоматы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВоенкоматыОтвет = Клиент.Delete(ВоенкоматыЗапрос);
		}
	}
}