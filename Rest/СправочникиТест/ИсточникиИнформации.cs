
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ИсточникиИнформации:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ИсточникиИнформацииЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ИсточникиИнформации/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ИсточникиИнформацииЗапрос ИсточникиИнформацииЗапрос = null;
			try
			{
				ИсточникиИнформацииЗапрос = Клиент.Get(new ИсточникиИнформацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ИсточникиИнформацииЗапрос;
		}
		public static ИсточникиИнформацииЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ИсточникиИнформации/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ИсточникиИнформацииЗапрос ИсточникиИнформацииЗапрос = null;
			try
			{
				ИсточникиИнформацииЗапрос = Клиент.Get(new ИсточникиИнформацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ИсточникиИнформацииЗапрос;
		}
		public static ИсточникиИнформацииЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ИсточникиИнформации/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ИсточникиИнформацииЗапрос ИсточникиИнформацииЗапрос = null;
			try
			{
				ИсточникиИнформацииЗапрос = Клиент.Get(new ИсточникиИнформацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ИсточникиИнформацииЗапрос;
		}
		public static void ЗаписатьНовый(ИсточникиИнформацииЗапрос ИсточникиИнформацииЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ИсточникиИнформации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ИсточникиИнформацииОтвет = Клиент.Post(ИсточникиИнформацииЗапрос);
		}
		public static void Записать(ИсточникиИнформацииЗапрос ИсточникиИнформацииЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ИсточникиИнформации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ИсточникиИнформацииОтвет = Клиент.Put(ИсточникиИнформацииЗапрос);
		}
		public static void Удалить(ИсточникиИнформацииЗапрос ИсточникиИнформацииЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ИсточникиИнформации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ИсточникиИнформацииОтвет = Клиент.Delete(ИсточникиИнформацииЗапрос);
		}
	}
}