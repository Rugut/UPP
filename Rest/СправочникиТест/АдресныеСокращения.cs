
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class АдресныеСокращения:V82.Rest.СправочникиТест.СправочникТест
	{
		public static АдресныеСокращенияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/АдресныеСокращения/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			АдресныеСокращенияЗапрос АдресныеСокращенияЗапрос = null;
			try
			{
				АдресныеСокращенияЗапрос = Клиент.Get(new АдресныеСокращенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return АдресныеСокращенияЗапрос;
		}
		public static АдресныеСокращенияЗапрос НайтиПоКоду(decimal Код)
		{
			var Урл = "http://localhost:1337/Справочники/АдресныеСокращения/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			АдресныеСокращенияЗапрос АдресныеСокращенияЗапрос = null;
			try
			{
				АдресныеСокращенияЗапрос = Клиент.Get(new АдресныеСокращенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return АдресныеСокращенияЗапрос;
		}
		public static АдресныеСокращенияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/АдресныеСокращения/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			АдресныеСокращенияЗапрос АдресныеСокращенияЗапрос = null;
			try
			{
				АдресныеСокращенияЗапрос = Клиент.Get(new АдресныеСокращенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return АдресныеСокращенияЗапрос;
		}
		public static void ЗаписатьНовый(АдресныеСокращенияЗапрос АдресныеСокращенияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/АдресныеСокращения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var АдресныеСокращенияОтвет = Клиент.Post(АдресныеСокращенияЗапрос);
		}
		public static void Записать(АдресныеСокращенияЗапрос АдресныеСокращенияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/АдресныеСокращения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var АдресныеСокращенияОтвет = Клиент.Put(АдресныеСокращенияЗапрос);
		}
		public static void Удалить(АдресныеСокращенияЗапрос АдресныеСокращенияЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/АдресныеСокращения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var АдресныеСокращенияОтвет = Клиент.Delete(АдресныеСокращенияЗапрос);
		}
	}
}