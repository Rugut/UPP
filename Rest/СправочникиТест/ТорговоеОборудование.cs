
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТорговоеОборудование:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТорговоеОборудованиеЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТорговоеОборудование/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТорговоеОборудованиеЗапрос ТорговоеОборудованиеЗапрос = null;
			try
			{
				ТорговоеОборудованиеЗапрос = Клиент.Get(new ТорговоеОборудованиеЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТорговоеОборудованиеЗапрос;
		}
		public static ТорговоеОборудованиеЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ТорговоеОборудование/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТорговоеОборудованиеЗапрос ТорговоеОборудованиеЗапрос = null;
			try
			{
				ТорговоеОборудованиеЗапрос = Клиент.Get(new ТорговоеОборудованиеЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТорговоеОборудованиеЗапрос;
		}
		public static ТорговоеОборудованиеЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ТорговоеОборудование/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТорговоеОборудованиеЗапрос ТорговоеОборудованиеЗапрос = null;
			try
			{
				ТорговоеОборудованиеЗапрос = Клиент.Get(new ТорговоеОборудованиеЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТорговоеОборудованиеЗапрос;
		}
		public static void ЗаписатьНовый(ТорговоеОборудованиеЗапрос ТорговоеОборудованиеЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ТорговоеОборудование?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТорговоеОборудованиеОтвет = Клиент.Post(ТорговоеОборудованиеЗапрос);
		}
		public static void Записать(ТорговоеОборудованиеЗапрос ТорговоеОборудованиеЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ТорговоеОборудование?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТорговоеОборудованиеОтвет = Клиент.Put(ТорговоеОборудованиеЗапрос);
		}
		public static void Удалить(ТорговоеОборудованиеЗапрос ТорговоеОборудованиеЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ТорговоеОборудование?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТорговоеОборудованиеОтвет = Клиент.Delete(ТорговоеОборудованиеЗапрос);
		}
	}
}