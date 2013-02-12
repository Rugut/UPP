
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТранспортныеУпаковки:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТранспортныеУпаковкиЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТранспортныеУпаковки/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТранспортныеУпаковкиЗапрос ТранспортныеУпаковкиЗапрос = null;
			try
			{
				ТранспортныеУпаковкиЗапрос = Клиент.Get(new ТранспортныеУпаковкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТранспортныеУпаковкиЗапрос;
		}
		public static ТранспортныеУпаковкиЗапрос НайтиПоКоду(decimal Код)
		{
			var Урл = "http://localhost:1337/Справочники/ТранспортныеУпаковки/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТранспортныеУпаковкиЗапрос ТранспортныеУпаковкиЗапрос = null;
			try
			{
				ТранспортныеУпаковкиЗапрос = Клиент.Get(new ТранспортныеУпаковкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТранспортныеУпаковкиЗапрос;
		}
		public static ТранспортныеУпаковкиЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТранспортныеУпаковки/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТранспортныеУпаковкиЗапрос ТранспортныеУпаковкиЗапрос = null;
			try
			{
				ТранспортныеУпаковкиЗапрос = Клиент.Get(new ТранспортныеУпаковкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТранспортныеУпаковкиЗапрос;
		}
		public static void ЗаписатьНовый(ТранспортныеУпаковкиЗапрос ТранспортныеУпаковкиЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ТранспортныеУпаковки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТранспортныеУпаковкиОтвет = Клиент.Post(ТранспортныеУпаковкиЗапрос);
		}
		public static void Записать(ТранспортныеУпаковкиЗапрос ТранспортныеУпаковкиЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ТранспортныеУпаковки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТранспортныеУпаковкиОтвет = Клиент.Put(ТранспортныеУпаковкиЗапрос);
		}
		public static void Удалить(ТранспортныеУпаковкиЗапрос ТранспортныеУпаковкиЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ТранспортныеУпаковки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТранспортныеУпаковкиОтвет = Клиент.Delete(ТранспортныеУпаковкиЗапрос);
		}
	}
}