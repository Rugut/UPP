
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТомаХраненияФайлов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТомаХраненияФайловЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТомаХраненияФайлов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТомаХраненияФайловЗапрос ТомаХраненияФайловЗапрос = null;
			try
			{
				ТомаХраненияФайловЗапрос = Клиент.Get(new ТомаХраненияФайловЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТомаХраненияФайловЗапрос;
		}
		public static ТомаХраненияФайловЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ТомаХраненияФайлов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТомаХраненияФайловЗапрос ТомаХраненияФайловЗапрос = null;
			try
			{
				ТомаХраненияФайловЗапрос = Клиент.Get(new ТомаХраненияФайловЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТомаХраненияФайловЗапрос;
		}
		public static ТомаХраненияФайловЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТомаХраненияФайлов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТомаХраненияФайловЗапрос ТомаХраненияФайловЗапрос = null;
			try
			{
				ТомаХраненияФайловЗапрос = Клиент.Get(new ТомаХраненияФайловЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТомаХраненияФайловЗапрос;
		}
		public static void ЗаписатьНовый(ТомаХраненияФайловЗапрос ТомаХраненияФайловЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ТомаХраненияФайлов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТомаХраненияФайловОтвет = Клиент.Post(ТомаХраненияФайловЗапрос);
		}
		public static void Записать(ТомаХраненияФайловЗапрос ТомаХраненияФайловЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ТомаХраненияФайлов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТомаХраненияФайловОтвет = Клиент.Put(ТомаХраненияФайловЗапрос);
		}
		public static void Удалить(ТомаХраненияФайловЗапрос ТомаХраненияФайловЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ТомаХраненияФайлов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТомаХраненияФайловОтвет = Клиент.Delete(ТомаХраненияФайловЗапрос);
		}
	}
}