
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыКонтактнойИнформации:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыКонтактнойИнформацииЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыКонтактнойИнформации/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыКонтактнойИнформацииЗапрос ВидыКонтактнойИнформацииЗапрос = null;
			try
			{
				ВидыКонтактнойИнформацииЗапрос = Клиент.Get(new ВидыКонтактнойИнформацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыКонтактнойИнформацииЗапрос;
		}
		public static ВидыКонтактнойИнформацииЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыКонтактнойИнформации/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыКонтактнойИнформацииЗапрос ВидыКонтактнойИнформацииЗапрос = null;
			try
			{
				ВидыКонтактнойИнформацииЗапрос = Клиент.Get(new ВидыКонтактнойИнформацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыКонтактнойИнформацииЗапрос;
		}
		public static ВидыКонтактнойИнформацииЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыКонтактнойИнформации/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыКонтактнойИнформацииЗапрос ВидыКонтактнойИнформацииЗапрос = null;
			try
			{
				ВидыКонтактнойИнформацииЗапрос = Клиент.Get(new ВидыКонтактнойИнформацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыКонтактнойИнформацииЗапрос;
		}
		public static void ЗаписатьНовый(ВидыКонтактнойИнформацииЗапрос ВидыКонтактнойИнформацииЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыКонтактнойИнформации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыКонтактнойИнформацииОтвет = Клиент.Post(ВидыКонтактнойИнформацииЗапрос);
		}
		public static void Записать(ВидыКонтактнойИнформацииЗапрос ВидыКонтактнойИнформацииЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыКонтактнойИнформации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыКонтактнойИнформацииОтвет = Клиент.Put(ВидыКонтактнойИнформацииЗапрос);
		}
		public static void Удалить(ВидыКонтактнойИнформацииЗапрос ВидыКонтактнойИнформацииЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыКонтактнойИнформации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыКонтактнойИнформацииОтвет = Клиент.Delete(ВидыКонтактнойИнформацииЗапрос);
		}
	}
}