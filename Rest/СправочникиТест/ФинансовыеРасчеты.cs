
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ФинансовыеРасчеты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ФинансовыеРасчетыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ФинансовыеРасчеты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ФинансовыеРасчетыЗапрос ФинансовыеРасчетыЗапрос = null;
			try
			{
				ФинансовыеРасчетыЗапрос = Клиент.Get(new ФинансовыеРасчетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ФинансовыеРасчетыЗапрос;
		}
		public static ФинансовыеРасчетыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ФинансовыеРасчеты/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ФинансовыеРасчетыЗапрос ФинансовыеРасчетыЗапрос = null;
			try
			{
				ФинансовыеРасчетыЗапрос = Клиент.Get(new ФинансовыеРасчетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ФинансовыеРасчетыЗапрос;
		}
		public static ФинансовыеРасчетыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ФинансовыеРасчеты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ФинансовыеРасчетыЗапрос ФинансовыеРасчетыЗапрос = null;
			try
			{
				ФинансовыеРасчетыЗапрос = Клиент.Get(new ФинансовыеРасчетыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ФинансовыеРасчетыЗапрос;
		}
		public static void ЗаписатьНовый(ФинансовыеРасчетыЗапрос ФинансовыеРасчетыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ФинансовыеРасчеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ФинансовыеРасчетыОтвет = Клиент.Post(ФинансовыеРасчетыЗапрос);
		}
		public static void Записать(ФинансовыеРасчетыЗапрос ФинансовыеРасчетыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ФинансовыеРасчеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ФинансовыеРасчетыОтвет = Клиент.Put(ФинансовыеРасчетыЗапрос);
		}
		public static void Удалить(ФинансовыеРасчетыЗапрос ФинансовыеРасчетыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ФинансовыеРасчеты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ФинансовыеРасчетыОтвет = Клиент.Delete(ФинансовыеРасчетыЗапрос);
		}
	}
}