
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Номенклатура:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НоменклатураЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Номенклатура/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НоменклатураЗапрос НоменклатураЗапрос = null;
			try
			{
				НоменклатураЗапрос = Клиент.Get(new НоменклатураЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НоменклатураЗапрос;
		}
		public static НоменклатураЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/Номенклатура/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НоменклатураЗапрос НоменклатураЗапрос = null;
			try
			{
				НоменклатураЗапрос = Клиент.Get(new НоменклатураЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НоменклатураЗапрос;
		}
		public static НоменклатураЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Номенклатура/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НоменклатураЗапрос НоменклатураЗапрос = null;
			try
			{
				НоменклатураЗапрос = Клиент.Get(new НоменклатураЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НоменклатураЗапрос;
		}
		public static void ЗаписатьНовый(НоменклатураЗапрос НоменклатураЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/Номенклатура?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НоменклатураОтвет = Клиент.Post(НоменклатураЗапрос);
		}
		public static void Записать(НоменклатураЗапрос НоменклатураЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/Номенклатура?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НоменклатураОтвет = Клиент.Put(НоменклатураЗапрос);
		}
		public static void Удалить(НоменклатураЗапрос НоменклатураЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/Номенклатура?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НоменклатураОтвет = Клиент.Delete(НоменклатураЗапрос);
		}
	}
}