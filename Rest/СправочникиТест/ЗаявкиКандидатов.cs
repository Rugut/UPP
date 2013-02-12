
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ЗаявкиКандидатов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ЗаявкиКандидатовЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ЗаявкиКандидатов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЗаявкиКандидатовЗапрос ЗаявкиКандидатовЗапрос = null;
			try
			{
				ЗаявкиКандидатовЗапрос = Клиент.Get(new ЗаявкиКандидатовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЗаявкиКандидатовЗапрос;
		}
		public static ЗаявкиКандидатовЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ЗаявкиКандидатов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЗаявкиКандидатовЗапрос ЗаявкиКандидатовЗапрос = null;
			try
			{
				ЗаявкиКандидатовЗапрос = Клиент.Get(new ЗаявкиКандидатовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЗаявкиКандидатовЗапрос;
		}
		public static ЗаявкиКандидатовЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ЗаявкиКандидатов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЗаявкиКандидатовЗапрос ЗаявкиКандидатовЗапрос = null;
			try
			{
				ЗаявкиКандидатовЗапрос = Клиент.Get(new ЗаявкиКандидатовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЗаявкиКандидатовЗапрос;
		}
		public static void ЗаписатьНовый(ЗаявкиКандидатовЗапрос ЗаявкиКандидатовЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ЗаявкиКандидатов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЗаявкиКандидатовОтвет = Клиент.Post(ЗаявкиКандидатовЗапрос);
		}
		public static void Записать(ЗаявкиКандидатовЗапрос ЗаявкиКандидатовЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ЗаявкиКандидатов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЗаявкиКандидатовОтвет = Клиент.Put(ЗаявкиКандидатовЗапрос);
		}
		public static void Удалить(ЗаявкиКандидатовЗапрос ЗаявкиКандидатовЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ЗаявкиКандидатов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЗаявкиКандидатовОтвет = Клиент.Delete(ЗаявкиКандидатовЗапрос);
		}
	}
}