
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВерсииФайлов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВерсииФайловЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВерсииФайлов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВерсииФайловЗапрос ВерсииФайловЗапрос = null;
			try
			{
				ВерсииФайловЗапрос = Клиент.Get(new ВерсииФайловЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВерсииФайловЗапрос;
		}
		public static ВерсииФайловЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ВерсииФайлов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВерсииФайловЗапрос ВерсииФайловЗапрос = null;
			try
			{
				ВерсииФайловЗапрос = Клиент.Get(new ВерсииФайловЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВерсииФайловЗапрос;
		}
		public static ВерсииФайловЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВерсииФайлов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВерсииФайловЗапрос ВерсииФайловЗапрос = null;
			try
			{
				ВерсииФайловЗапрос = Клиент.Get(new ВерсииФайловЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВерсииФайловЗапрос;
		}
		public static void ЗаписатьНовый(ВерсииФайловЗапрос ВерсииФайловЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ВерсииФайлов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВерсииФайловОтвет = Клиент.Post(ВерсииФайловЗапрос);
		}
		public static void Записать(ВерсииФайловЗапрос ВерсииФайловЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ВерсииФайлов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВерсииФайловОтвет = Клиент.Put(ВерсииФайловЗапрос);
		}
		public static void Удалить(ВерсииФайловЗапрос ВерсииФайловЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ВерсииФайлов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВерсииФайловОтвет = Клиент.Delete(ВерсииФайловЗапрос);
		}
	}
}