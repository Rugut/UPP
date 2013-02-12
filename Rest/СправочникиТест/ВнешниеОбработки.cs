
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВнешниеОбработки:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВнешниеОбработкиЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВнешниеОбработки/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВнешниеОбработкиЗапрос ВнешниеОбработкиЗапрос = null;
			try
			{
				ВнешниеОбработкиЗапрос = Клиент.Get(new ВнешниеОбработкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВнешниеОбработкиЗапрос;
		}
		public static ВнешниеОбработкиЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ВнешниеОбработки/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВнешниеОбработкиЗапрос ВнешниеОбработкиЗапрос = null;
			try
			{
				ВнешниеОбработкиЗапрос = Клиент.Get(new ВнешниеОбработкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВнешниеОбработкиЗапрос;
		}
		public static ВнешниеОбработкиЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВнешниеОбработки/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВнешниеОбработкиЗапрос ВнешниеОбработкиЗапрос = null;
			try
			{
				ВнешниеОбработкиЗапрос = Клиент.Get(new ВнешниеОбработкиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВнешниеОбработкиЗапрос;
		}
		public static void ЗаписатьНовый(ВнешниеОбработкиЗапрос ВнешниеОбработкиЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ВнешниеОбработки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВнешниеОбработкиОтвет = Клиент.Post(ВнешниеОбработкиЗапрос);
		}
		public static void Записать(ВнешниеОбработкиЗапрос ВнешниеОбработкиЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ВнешниеОбработки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВнешниеОбработкиОтвет = Клиент.Put(ВнешниеОбработкиЗапрос);
		}
		public static void Удалить(ВнешниеОбработкиЗапрос ВнешниеОбработкиЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ВнешниеОбработки?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВнешниеОбработкиОтвет = Клиент.Delete(ВнешниеОбработкиЗапрос);
		}
	}
}