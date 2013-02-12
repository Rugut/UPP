
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТарифыПочтовогоСбора:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТарифыПочтовогоСбораЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифыПочтовогоСбора/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТарифыПочтовогоСбораЗапрос ТарифыПочтовогоСбораЗапрос = null;
			try
			{
				ТарифыПочтовогоСбораЗапрос = Клиент.Get(new ТарифыПочтовогоСбораЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТарифыПочтовогоСбораЗапрос;
		}
		public static ТарифыПочтовогоСбораЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифыПочтовогоСбора/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТарифыПочтовогоСбораЗапрос ТарифыПочтовогоСбораЗапрос = null;
			try
			{
				ТарифыПочтовогоСбораЗапрос = Клиент.Get(new ТарифыПочтовогоСбораЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТарифыПочтовогоСбораЗапрос;
		}
		public static ТарифыПочтовогоСбораЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифыПочтовогоСбора/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТарифыПочтовогоСбораЗапрос ТарифыПочтовогоСбораЗапрос = null;
			try
			{
				ТарифыПочтовогоСбораЗапрос = Клиент.Get(new ТарифыПочтовогоСбораЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТарифыПочтовогоСбораЗапрос;
		}
		public static void ЗаписатьНовый(ТарифыПочтовогоСбораЗапрос ТарифыПочтовогоСбораЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифыПочтовогоСбора?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТарифыПочтовогоСбораОтвет = Клиент.Post(ТарифыПочтовогоСбораЗапрос);
		}
		public static void Записать(ТарифыПочтовогоСбораЗапрос ТарифыПочтовогоСбораЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифыПочтовогоСбора?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТарифыПочтовогоСбораОтвет = Клиент.Put(ТарифыПочтовогоСбораЗапрос);
		}
		public static void Удалить(ТарифыПочтовогоСбораЗапрос ТарифыПочтовогоСбораЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифыПочтовогоСбора?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТарифыПочтовогоСбораОтвет = Клиент.Delete(ТарифыПочтовогоСбораЗапрос);
		}
	}
}