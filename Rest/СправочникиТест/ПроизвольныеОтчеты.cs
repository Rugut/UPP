
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ПроизвольныеОтчеты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ПроизвольныеОтчетыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПроизвольныеОтчеты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПроизвольныеОтчетыЗапрос ПроизвольныеОтчетыЗапрос = null;
			try
			{
				ПроизвольныеОтчетыЗапрос = Клиент.Get(new ПроизвольныеОтчетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПроизвольныеОтчетыЗапрос;
		}
		public static ПроизвольныеОтчетыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ПроизвольныеОтчеты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ПроизвольныеОтчетыЗапрос ПроизвольныеОтчетыЗапрос = null;
			try
			{
				ПроизвольныеОтчетыЗапрос = Клиент.Get(new ПроизвольныеОтчетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ПроизвольныеОтчетыЗапрос;
		}
		public static void ЗаписатьНовый(ПроизвольныеОтчетыЗапрос ПроизвольныеОтчетыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ПроизвольныеОтчеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПроизвольныеОтчетыОтвет = Клиент.Post(ПроизвольныеОтчетыЗапрос);
		}
		public static void Записать(ПроизвольныеОтчетыЗапрос ПроизвольныеОтчетыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ПроизвольныеОтчеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПроизвольныеОтчетыОтвет = Клиент.Put(ПроизвольныеОтчетыЗапрос);
		}
		public static void Удалить(ПроизвольныеОтчетыЗапрос ПроизвольныеОтчетыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ПроизвольныеОтчеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ПроизвольныеОтчетыОтвет = Клиент.Delete(ПроизвольныеОтчетыЗапрос);
		}
	}
}