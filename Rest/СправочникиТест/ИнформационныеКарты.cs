
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ИнформационныеКарты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ИнформационныеКартыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ИнформационныеКарты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ИнформационныеКартыЗапрос ИнформационныеКартыЗапрос = null;
			try
			{
				ИнформационныеКартыЗапрос = Клиент.Get(new ИнформационныеКартыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ИнформационныеКартыЗапрос;
		}
		public static ИнформационныеКартыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ИнформационныеКарты/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ИнформационныеКартыЗапрос ИнформационныеКартыЗапрос = null;
			try
			{
				ИнформационныеКартыЗапрос = Клиент.Get(new ИнформационныеКартыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ИнформационныеКартыЗапрос;
		}
		public static ИнформационныеКартыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ИнформационныеКарты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ИнформационныеКартыЗапрос ИнформационныеКартыЗапрос = null;
			try
			{
				ИнформационныеКартыЗапрос = Клиент.Get(new ИнформационныеКартыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ИнформационныеКартыЗапрос;
		}
		public static void ЗаписатьНовый(ИнформационныеКартыЗапрос ИнформационныеКартыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ИнформационныеКарты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ИнформационныеКартыОтвет = Клиент.Post(ИнформационныеКартыЗапрос);
		}
		public static void Записать(ИнформационныеКартыЗапрос ИнформационныеКартыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ИнформационныеКарты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ИнформационныеКартыОтвет = Клиент.Put(ИнформационныеКартыЗапрос);
		}
		public static void Удалить(ИнформационныеКартыЗапрос ИнформационныеКартыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ИнформационныеКарты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ИнформационныеКартыОтвет = Клиент.Delete(ИнформационныеКартыЗапрос);
		}
	}
}