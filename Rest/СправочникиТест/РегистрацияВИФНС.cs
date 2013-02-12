
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class РегистрацияВИФНС:V82.Rest.СправочникиТест.СправочникТест
	{
		public static РегистрацияВИФНСЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РегистрацияВИФНС/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РегистрацияВИФНСЗапрос РегистрацияВИФНСЗапрос = null;
			try
			{
				РегистрацияВИФНСЗапрос = Клиент.Get(new РегистрацияВИФНСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РегистрацияВИФНСЗапрос;
		}
		public static РегистрацияВИФНСЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/РегистрацияВИФНС/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РегистрацияВИФНСЗапрос РегистрацияВИФНСЗапрос = null;
			try
			{
				РегистрацияВИФНСЗапрос = Клиент.Get(new РегистрацияВИФНСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РегистрацияВИФНСЗапрос;
		}
		public static РегистрацияВИФНСЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/РегистрацияВИФНС/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			РегистрацияВИФНСЗапрос РегистрацияВИФНСЗапрос = null;
			try
			{
				РегистрацияВИФНСЗапрос = Клиент.Get(new РегистрацияВИФНСЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return РегистрацияВИФНСЗапрос;
		}
		public static void ЗаписатьНовый(РегистрацияВИФНСЗапрос РегистрацияВИФНСЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/РегистрацияВИФНС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РегистрацияВИФНСОтвет = Клиент.Post(РегистрацияВИФНСЗапрос);
		}
		public static void Записать(РегистрацияВИФНСЗапрос РегистрацияВИФНСЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/РегистрацияВИФНС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РегистрацияВИФНСОтвет = Клиент.Put(РегистрацияВИФНСЗапрос);
		}
		public static void Удалить(РегистрацияВИФНСЗапрос РегистрацияВИФНСЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/РегистрацияВИФНС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var РегистрацияВИФНСОтвет = Клиент.Delete(РегистрацияВИФНСЗапрос);
		}
	}
}