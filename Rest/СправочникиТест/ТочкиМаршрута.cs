
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТочкиМаршрута:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТочкиМаршрутаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТочкиМаршрута/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТочкиМаршрутаЗапрос ТочкиМаршрутаЗапрос = null;
			try
			{
				ТочкиМаршрутаЗапрос = Клиент.Get(new ТочкиМаршрутаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТочкиМаршрутаЗапрос;
		}
		public static ТочкиМаршрутаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ТочкиМаршрута/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТочкиМаршрутаЗапрос ТочкиМаршрутаЗапрос = null;
			try
			{
				ТочкиМаршрутаЗапрос = Клиент.Get(new ТочкиМаршрутаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТочкиМаршрутаЗапрос;
		}
		public static ТочкиМаршрутаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТочкиМаршрута/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТочкиМаршрутаЗапрос ТочкиМаршрутаЗапрос = null;
			try
			{
				ТочкиМаршрутаЗапрос = Клиент.Get(new ТочкиМаршрутаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТочкиМаршрутаЗапрос;
		}
		public static void ЗаписатьНовый(ТочкиМаршрутаЗапрос ТочкиМаршрутаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ТочкиМаршрута?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТочкиМаршрутаОтвет = Клиент.Post(ТочкиМаршрутаЗапрос);
		}
		public static void Записать(ТочкиМаршрутаЗапрос ТочкиМаршрутаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ТочкиМаршрута?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТочкиМаршрутаОтвет = Клиент.Put(ТочкиМаршрутаЗапрос);
		}
		public static void Удалить(ТочкиМаршрутаЗапрос ТочкиМаршрутаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ТочкиМаршрута?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТочкиМаршрутаОтвет = Клиент.Delete(ТочкиМаршрутаЗапрос);
		}
	}
}