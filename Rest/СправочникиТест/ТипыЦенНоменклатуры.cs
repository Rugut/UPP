
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТипыЦенНоменклатуры:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТипыЦенНоменклатурыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТипыЦенНоменклатуры/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТипыЦенНоменклатурыЗапрос ТипыЦенНоменклатурыЗапрос = null;
			try
			{
				ТипыЦенНоменклатурыЗапрос = Клиент.Get(new ТипыЦенНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТипыЦенНоменклатурыЗапрос;
		}
		public static ТипыЦенНоменклатурыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ТипыЦенНоменклатуры/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТипыЦенНоменклатурыЗапрос ТипыЦенНоменклатурыЗапрос = null;
			try
			{
				ТипыЦенНоменклатурыЗапрос = Клиент.Get(new ТипыЦенНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТипыЦенНоменклатурыЗапрос;
		}
		public static ТипыЦенНоменклатурыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТипыЦенНоменклатуры/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТипыЦенНоменклатурыЗапрос ТипыЦенНоменклатурыЗапрос = null;
			try
			{
				ТипыЦенНоменклатурыЗапрос = Клиент.Get(new ТипыЦенНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТипыЦенНоменклатурыЗапрос;
		}
		public static void ЗаписатьНовый(ТипыЦенНоменклатурыЗапрос ТипыЦенНоменклатурыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ТипыЦенНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТипыЦенНоменклатурыОтвет = Клиент.Post(ТипыЦенНоменклатурыЗапрос);
		}
		public static void Записать(ТипыЦенНоменклатурыЗапрос ТипыЦенНоменклатурыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ТипыЦенНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТипыЦенНоменклатурыОтвет = Клиент.Put(ТипыЦенНоменклатурыЗапрос);
		}
		public static void Удалить(ТипыЦенНоменклатурыЗапрос ТипыЦенНоменклатурыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ТипыЦенНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТипыЦенНоменклатурыОтвет = Клиент.Delete(ТипыЦенНоменклатурыЗапрос);
		}
	}
}