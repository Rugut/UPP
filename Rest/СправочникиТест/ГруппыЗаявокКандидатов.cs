
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ГруппыЗаявокКандидатов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ГруппыЗаявокКандидатовЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыЗаявокКандидатов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГруппыЗаявокКандидатовЗапрос ГруппыЗаявокКандидатовЗапрос = null;
			try
			{
				ГруппыЗаявокКандидатовЗапрос = Клиент.Get(new ГруппыЗаявокКандидатовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГруппыЗаявокКандидатовЗапрос;
		}
		public static ГруппыЗаявокКандидатовЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыЗаявокКандидатов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГруппыЗаявокКандидатовЗапрос ГруппыЗаявокКандидатовЗапрос = null;
			try
			{
				ГруппыЗаявокКандидатовЗапрос = Клиент.Get(new ГруппыЗаявокКандидатовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГруппыЗаявокКандидатовЗапрос;
		}
		public static ГруппыЗаявокКандидатовЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыЗаявокКандидатов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГруппыЗаявокКандидатовЗапрос ГруппыЗаявокКандидатовЗапрос = null;
			try
			{
				ГруппыЗаявокКандидатовЗапрос = Клиент.Get(new ГруппыЗаявокКандидатовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГруппыЗаявокКандидатовЗапрос;
		}
		public static void ЗаписатьНовый(ГруппыЗаявокКандидатовЗапрос ГруппыЗаявокКандидатовЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыЗаявокКандидатов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГруппыЗаявокКандидатовОтвет = Клиент.Post(ГруппыЗаявокКандидатовЗапрос);
		}
		public static void Записать(ГруппыЗаявокКандидатовЗапрос ГруппыЗаявокКандидатовЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыЗаявокКандидатов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГруппыЗаявокКандидатовОтвет = Клиент.Put(ГруппыЗаявокКандидатовЗапрос);
		}
		public static void Удалить(ГруппыЗаявокКандидатовЗапрос ГруппыЗаявокКандидатовЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ГруппыЗаявокКандидатов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГруппыЗаявокКандидатовОтвет = Клиент.Delete(ГруппыЗаявокКандидатовЗапрос);
		}
	}
}