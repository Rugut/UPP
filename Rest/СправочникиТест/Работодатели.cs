
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Работодатели:V82.Rest.СправочникиТест.СправочникТест
	{
		public static РаботодателиЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Работодатели/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РаботодателиЗапрос РаботодателиЗапрос = null;
			try
			{
				РаботодателиЗапрос = Клиент.Get(new РаботодателиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РаботодателиЗапрос;
		}
		public static РаботодателиЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/Работодатели/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РаботодателиЗапрос РаботодателиЗапрос = null;
			try
			{
				РаботодателиЗапрос = Клиент.Get(new РаботодателиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РаботодателиЗапрос;
		}
		public static РаботодателиЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/Работодатели/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РаботодателиЗапрос РаботодателиЗапрос = null;
			try
			{
				РаботодателиЗапрос = Клиент.Get(new РаботодателиЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РаботодателиЗапрос;
		}
		public static void ЗаписатьНовый(РаботодателиЗапрос РаботодателиЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/Работодатели?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РаботодателиОтвет = Клиент.Post(РаботодателиЗапрос);
		}
		public static void Записать(РаботодателиЗапрос РаботодателиЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/Работодатели?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РаботодателиОтвет = Клиент.Put(РаботодателиЗапрос);
		}
		public static void Удалить(РаботодателиЗапрос РаботодателиЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/Работодатели?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РаботодателиОтвет = Клиент.Delete(РаботодателиЗапрос);
		}
	}
}