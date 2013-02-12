
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОсобыеУсловияТруда:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОсобыеУсловияТрудаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ОсобыеУсловияТруда/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОсобыеУсловияТрудаЗапрос ОсобыеУсловияТрудаЗапрос = null;
			try
			{
				ОсобыеУсловияТрудаЗапрос = Клиент.Get(new ОсобыеУсловияТрудаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОсобыеУсловияТрудаЗапрос;
		}
		public static ОсобыеУсловияТрудаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ОсобыеУсловияТруда/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОсобыеУсловияТрудаЗапрос ОсобыеУсловияТрудаЗапрос = null;
			try
			{
				ОсобыеУсловияТрудаЗапрос = Клиент.Get(new ОсобыеУсловияТрудаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОсобыеУсловияТрудаЗапрос;
		}
		public static ОсобыеУсловияТрудаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ОсобыеУсловияТруда/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОсобыеУсловияТрудаЗапрос ОсобыеУсловияТрудаЗапрос = null;
			try
			{
				ОсобыеУсловияТрудаЗапрос = Клиент.Get(new ОсобыеУсловияТрудаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОсобыеУсловияТрудаЗапрос;
		}
		public static void ЗаписатьНовый(ОсобыеУсловияТрудаЗапрос ОсобыеУсловияТрудаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ОсобыеУсловияТруда?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОсобыеУсловияТрудаОтвет = Клиент.Post(ОсобыеУсловияТрудаЗапрос);
		}
		public static void Записать(ОсобыеУсловияТрудаЗапрос ОсобыеУсловияТрудаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ОсобыеУсловияТруда?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОсобыеУсловияТрудаОтвет = Клиент.Put(ОсобыеУсловияТрудаЗапрос);
		}
		public static void Удалить(ОсобыеУсловияТрудаЗапрос ОсобыеУсловияТрудаЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ОсобыеУсловияТруда?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОсобыеУсловияТрудаОтвет = Клиент.Delete(ОсобыеУсловияТрудаЗапрос);
		}
	}
}