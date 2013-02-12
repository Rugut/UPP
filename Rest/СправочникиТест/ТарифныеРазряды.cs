
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТарифныеРазряды:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТарифныеРазрядыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифныеРазряды/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТарифныеРазрядыЗапрос ТарифныеРазрядыЗапрос = null;
			try
			{
				ТарифныеРазрядыЗапрос = Клиент.Get(new ТарифныеРазрядыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТарифныеРазрядыЗапрос;
		}
		public static ТарифныеРазрядыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифныеРазряды/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТарифныеРазрядыЗапрос ТарифныеРазрядыЗапрос = null;
			try
			{
				ТарифныеРазрядыЗапрос = Клиент.Get(new ТарифныеРазрядыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТарифныеРазрядыЗапрос;
		}
		public static ТарифныеРазрядыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифныеРазряды/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТарифныеРазрядыЗапрос ТарифныеРазрядыЗапрос = null;
			try
			{
				ТарифныеРазрядыЗапрос = Клиент.Get(new ТарифныеРазрядыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТарифныеРазрядыЗапрос;
		}
		public static void ЗаписатьНовый(ТарифныеРазрядыЗапрос ТарифныеРазрядыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифныеРазряды?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТарифныеРазрядыОтвет = Клиент.Post(ТарифныеРазрядыЗапрос);
		}
		public static void Записать(ТарифныеРазрядыЗапрос ТарифныеРазрядыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифныеРазряды?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТарифныеРазрядыОтвет = Клиент.Put(ТарифныеРазрядыЗапрос);
		}
		public static void Удалить(ТарифныеРазрядыЗапрос ТарифныеРазрядыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ТарифныеРазряды?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТарифныеРазрядыОтвет = Клиент.Delete(ТарифныеРазрядыЗапрос);
		}
	}
}