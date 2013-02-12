
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class РегламентированныеОтчеты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static РегламентированныеОтчетыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РегламентированныеОтчеты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РегламентированныеОтчетыЗапрос РегламентированныеОтчетыЗапрос = null;
			try
			{
				РегламентированныеОтчетыЗапрос = Клиент.Get(new РегламентированныеОтчетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РегламентированныеОтчетыЗапрос;
		}
		public static РегламентированныеОтчетыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/РегламентированныеОтчеты/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РегламентированныеОтчетыЗапрос РегламентированныеОтчетыЗапрос = null;
			try
			{
				РегламентированныеОтчетыЗапрос = Клиент.Get(new РегламентированныеОтчетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РегламентированныеОтчетыЗапрос;
		}
		public static РегламентированныеОтчетыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РегламентированныеОтчеты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РегламентированныеОтчетыЗапрос РегламентированныеОтчетыЗапрос = null;
			try
			{
				РегламентированныеОтчетыЗапрос = Клиент.Get(new РегламентированныеОтчетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РегламентированныеОтчетыЗапрос;
		}
		public static void ЗаписатьНовый(РегламентированныеОтчетыЗапрос РегламентированныеОтчетыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/РегламентированныеОтчеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РегламентированныеОтчетыОтвет = Клиент.Post(РегламентированныеОтчетыЗапрос);
		}
		public static void Записать(РегламентированныеОтчетыЗапрос РегламентированныеОтчетыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/РегламентированныеОтчеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РегламентированныеОтчетыОтвет = Клиент.Put(РегламентированныеОтчетыЗапрос);
		}
		public static void Удалить(РегламентированныеОтчетыЗапрос РегламентированныеОтчетыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/РегламентированныеОтчеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РегламентированныеОтчетыОтвет = Клиент.Delete(РегламентированныеОтчетыЗапрос);
		}
	}
}