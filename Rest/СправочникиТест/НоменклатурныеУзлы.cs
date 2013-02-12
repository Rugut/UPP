
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НоменклатурныеУзлы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НоменклатурныеУзлыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НоменклатурныеУзлы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НоменклатурныеУзлыЗапрос НоменклатурныеУзлыЗапрос = null;
			try
			{
				НоменклатурныеУзлыЗапрос = Клиент.Get(new НоменклатурныеУзлыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НоменклатурныеУзлыЗапрос;
		}
		public static НоменклатурныеУзлыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/НоменклатурныеУзлы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НоменклатурныеУзлыЗапрос НоменклатурныеУзлыЗапрос = null;
			try
			{
				НоменклатурныеУзлыЗапрос = Клиент.Get(new НоменклатурныеУзлыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НоменклатурныеУзлыЗапрос;
		}
		public static НоменклатурныеУзлыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НоменклатурныеУзлы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НоменклатурныеУзлыЗапрос НоменклатурныеУзлыЗапрос = null;
			try
			{
				НоменклатурныеУзлыЗапрос = Клиент.Get(new НоменклатурныеУзлыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НоменклатурныеУзлыЗапрос;
		}
		public static void ЗаписатьНовый(НоменклатурныеУзлыЗапрос НоменклатурныеУзлыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НоменклатурныеУзлы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НоменклатурныеУзлыОтвет = Клиент.Post(НоменклатурныеУзлыЗапрос);
		}
		public static void Записать(НоменклатурныеУзлыЗапрос НоменклатурныеУзлыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НоменклатурныеУзлы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НоменклатурныеУзлыОтвет = Клиент.Put(НоменклатурныеУзлыЗапрос);
		}
		public static void Удалить(НоменклатурныеУзлыЗапрос НоменклатурныеУзлыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НоменклатурныеУзлы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НоменклатурныеУзлыОтвет = Клиент.Delete(НоменклатурныеУзлыЗапрос);
		}
	}
}