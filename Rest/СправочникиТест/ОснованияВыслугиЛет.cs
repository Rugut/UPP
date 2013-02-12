
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОснованияВыслугиЛет:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОснованияВыслугиЛетЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ОснованияВыслугиЛет/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОснованияВыслугиЛетЗапрос ОснованияВыслугиЛетЗапрос = null;
			try
			{
				ОснованияВыслугиЛетЗапрос = Клиент.Get(new ОснованияВыслугиЛетЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОснованияВыслугиЛетЗапрос;
		}
		public static ОснованияВыслугиЛетЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ОснованияВыслугиЛет/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОснованияВыслугиЛетЗапрос ОснованияВыслугиЛетЗапрос = null;
			try
			{
				ОснованияВыслугиЛетЗапрос = Клиент.Get(new ОснованияВыслугиЛетЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОснованияВыслугиЛетЗапрос;
		}
		public static ОснованияВыслугиЛетЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ОснованияВыслугиЛет/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОснованияВыслугиЛетЗапрос ОснованияВыслугиЛетЗапрос = null;
			try
			{
				ОснованияВыслугиЛетЗапрос = Клиент.Get(new ОснованияВыслугиЛетЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОснованияВыслугиЛетЗапрос;
		}
		public static void ЗаписатьНовый(ОснованияВыслугиЛетЗапрос ОснованияВыслугиЛетЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ОснованияВыслугиЛет?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОснованияВыслугиЛетОтвет = Клиент.Post(ОснованияВыслугиЛетЗапрос);
		}
		public static void Записать(ОснованияВыслугиЛетЗапрос ОснованияВыслугиЛетЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ОснованияВыслугиЛет?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОснованияВыслугиЛетОтвет = Клиент.Put(ОснованияВыслугиЛетЗапрос);
		}
		public static void Удалить(ОснованияВыслугиЛетЗапрос ОснованияВыслугиЛетЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ОснованияВыслугиЛет?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОснованияВыслугиЛетОтвет = Клиент.Delete(ОснованияВыслугиЛетЗапрос);
		}
	}
}