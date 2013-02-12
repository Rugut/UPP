
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СемейноеПоложениеФизЛиц:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СемейноеПоложениеФизЛицЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СемейноеПоложениеФизЛиц/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СемейноеПоложениеФизЛицЗапрос СемейноеПоложениеФизЛицЗапрос = null;
			try
			{
				СемейноеПоложениеФизЛицЗапрос = Клиент.Get(new СемейноеПоложениеФизЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СемейноеПоложениеФизЛицЗапрос;
		}
		public static СемейноеПоложениеФизЛицЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/СемейноеПоложениеФизЛиц/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СемейноеПоложениеФизЛицЗапрос СемейноеПоложениеФизЛицЗапрос = null;
			try
			{
				СемейноеПоложениеФизЛицЗапрос = Клиент.Get(new СемейноеПоложениеФизЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СемейноеПоложениеФизЛицЗапрос;
		}
		public static СемейноеПоложениеФизЛицЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СемейноеПоложениеФизЛиц/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СемейноеПоложениеФизЛицЗапрос СемейноеПоложениеФизЛицЗапрос = null;
			try
			{
				СемейноеПоложениеФизЛицЗапрос = Клиент.Get(new СемейноеПоложениеФизЛицЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СемейноеПоложениеФизЛицЗапрос;
		}
		public static void ЗаписатьНовый(СемейноеПоложениеФизЛицЗапрос СемейноеПоложениеФизЛицЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/СемейноеПоложениеФизЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СемейноеПоложениеФизЛицОтвет = Клиент.Post(СемейноеПоложениеФизЛицЗапрос);
		}
		public static void Записать(СемейноеПоложениеФизЛицЗапрос СемейноеПоложениеФизЛицЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/СемейноеПоложениеФизЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СемейноеПоложениеФизЛицОтвет = Клиент.Put(СемейноеПоложениеФизЛицЗапрос);
		}
		public static void Удалить(СемейноеПоложениеФизЛицЗапрос СемейноеПоложениеФизЛицЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/СемейноеПоложениеФизЛиц?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СемейноеПоложениеФизЛицОтвет = Клиент.Delete(СемейноеПоложениеФизЛицЗапрос);
		}
	}
}