
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class УчебныеЗаведения:V82.Rest.СправочникиТест.СправочникТест
	{
		public static УчебныеЗаведенияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/УчебныеЗаведения/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УчебныеЗаведенияЗапрос УчебныеЗаведенияЗапрос = null;
			try
			{
				УчебныеЗаведенияЗапрос = Клиент.Get(new УчебныеЗаведенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УчебныеЗаведенияЗапрос;
		}
		public static УчебныеЗаведенияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/УчебныеЗаведения/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УчебныеЗаведенияЗапрос УчебныеЗаведенияЗапрос = null;
			try
			{
				УчебныеЗаведенияЗапрос = Клиент.Get(new УчебныеЗаведенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УчебныеЗаведенияЗапрос;
		}
		public static УчебныеЗаведенияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/УчебныеЗаведения/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УчебныеЗаведенияЗапрос УчебныеЗаведенияЗапрос = null;
			try
			{
				УчебныеЗаведенияЗапрос = Клиент.Get(new УчебныеЗаведенияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УчебныеЗаведенияЗапрос;
		}
		public static void ЗаписатьНовый(УчебныеЗаведенияЗапрос УчебныеЗаведенияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/УчебныеЗаведения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УчебныеЗаведенияОтвет = Клиент.Post(УчебныеЗаведенияЗапрос);
		}
		public static void Записать(УчебныеЗаведенияЗапрос УчебныеЗаведенияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/УчебныеЗаведения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УчебныеЗаведенияОтвет = Клиент.Put(УчебныеЗаведенияЗапрос);
		}
		public static void Удалить(УчебныеЗаведенияЗапрос УчебныеЗаведенияЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/УчебныеЗаведения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УчебныеЗаведенияОтвет = Клиент.Delete(УчебныеЗаведенияЗапрос);
		}
	}
}