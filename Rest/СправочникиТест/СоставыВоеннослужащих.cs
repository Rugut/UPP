
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СоставыВоеннослужащих:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СоставыВоеннослужащихЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СоставыВоеннослужащих/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СоставыВоеннослужащихЗапрос СоставыВоеннослужащихЗапрос = null;
			try
			{
				СоставыВоеннослужащихЗапрос = Клиент.Get(new СоставыВоеннослужащихЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СоставыВоеннослужащихЗапрос;
		}
		public static СоставыВоеннослужащихЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СоставыВоеннослужащих/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СоставыВоеннослужащихЗапрос СоставыВоеннослужащихЗапрос = null;
			try
			{
				СоставыВоеннослужащихЗапрос = Клиент.Get(new СоставыВоеннослужащихЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СоставыВоеннослужащихЗапрос;
		}
		public static void ЗаписатьНовый(СоставыВоеннослужащихЗапрос СоставыВоеннослужащихЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/СоставыВоеннослужащих?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СоставыВоеннослужащихОтвет = Клиент.Post(СоставыВоеннослужащихЗапрос);
		}
		public static void Записать(СоставыВоеннослужащихЗапрос СоставыВоеннослужащихЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/СоставыВоеннослужащих?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СоставыВоеннослужащихОтвет = Клиент.Put(СоставыВоеннослужащихЗапрос);
		}
		public static void Удалить(СоставыВоеннослужащихЗапрос СоставыВоеннослужащихЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/СоставыВоеннослужащих?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СоставыВоеннослужащихОтвет = Клиент.Delete(СоставыВоеннослужащихЗапрос);
		}
	}
}