
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТерриториальныеУсловия:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТерриториальныеУсловияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТерриториальныеУсловия/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТерриториальныеУсловияЗапрос ТерриториальныеУсловияЗапрос = null;
			try
			{
				ТерриториальныеУсловияЗапрос = Клиент.Get(new ТерриториальныеУсловияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТерриториальныеУсловияЗапрос;
		}
		public static ТерриториальныеУсловияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ТерриториальныеУсловия/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТерриториальныеУсловияЗапрос ТерриториальныеУсловияЗапрос = null;
			try
			{
				ТерриториальныеУсловияЗапрос = Клиент.Get(new ТерриториальныеУсловияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТерриториальныеУсловияЗапрос;
		}
		public static ТерриториальныеУсловияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТерриториальныеУсловия/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТерриториальныеУсловияЗапрос ТерриториальныеУсловияЗапрос = null;
			try
			{
				ТерриториальныеУсловияЗапрос = Клиент.Get(new ТерриториальныеУсловияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТерриториальныеУсловияЗапрос;
		}
		public static void ЗаписатьНовый(ТерриториальныеУсловияЗапрос ТерриториальныеУсловияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ТерриториальныеУсловия?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТерриториальныеУсловияОтвет = Клиент.Post(ТерриториальныеУсловияЗапрос);
		}
		public static void Записать(ТерриториальныеУсловияЗапрос ТерриториальныеУсловияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ТерриториальныеУсловия?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТерриториальныеУсловияОтвет = Клиент.Put(ТерриториальныеУсловияЗапрос);
		}
		public static void Удалить(ТерриториальныеУсловияЗапрос ТерриториальныеУсловияЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ТерриториальныеУсловия?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТерриториальныеУсловияОтвет = Клиент.Delete(ТерриториальныеУсловияЗапрос);
		}
	}
}