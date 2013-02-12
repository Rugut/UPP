
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КлассификаторСтранМира:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КлассификаторСтранМираЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/КлассификаторСтранМира/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КлассификаторСтранМираЗапрос КлассификаторСтранМираЗапрос = null;
			try
			{
				КлассификаторСтранМираЗапрос = Клиент.Get(new КлассификаторСтранМираЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КлассификаторСтранМираЗапрос;
		}
		public static КлассификаторСтранМираЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/КлассификаторСтранМира/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КлассификаторСтранМираЗапрос КлассификаторСтранМираЗапрос = null;
			try
			{
				КлассификаторСтранМираЗапрос = Клиент.Get(new КлассификаторСтранМираЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КлассификаторСтранМираЗапрос;
		}
		public static КлассификаторСтранМираЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/КлассификаторСтранМира/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КлассификаторСтранМираЗапрос КлассификаторСтранМираЗапрос = null;
			try
			{
				КлассификаторСтранМираЗапрос = Клиент.Get(new КлассификаторСтранМираЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КлассификаторСтранМираЗапрос;
		}
		public static void ЗаписатьНовый(КлассификаторСтранМираЗапрос КлассификаторСтранМираЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/КлассификаторСтранМира?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КлассификаторСтранМираОтвет = Клиент.Post(КлассификаторСтранМираЗапрос);
		}
		public static void Записать(КлассификаторСтранМираЗапрос КлассификаторСтранМираЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/КлассификаторСтранМира?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КлассификаторСтранМираОтвет = Клиент.Put(КлассификаторСтранМираЗапрос);
		}
		public static void Удалить(КлассификаторСтранМираЗапрос КлассификаторСтранМираЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/КлассификаторСтранМира?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КлассификаторСтранМираОтвет = Клиент.Delete(КлассификаторСтранМираЗапрос);
		}
	}
}