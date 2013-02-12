
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НомераГТД:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НомераГТДЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НомераГТД/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НомераГТДЗапрос НомераГТДЗапрос = null;
			try
			{
				НомераГТДЗапрос = Клиент.Get(new НомераГТДЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НомераГТДЗапрос;
		}
		public static НомераГТДЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/НомераГТД/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НомераГТДЗапрос НомераГТДЗапрос = null;
			try
			{
				НомераГТДЗапрос = Клиент.Get(new НомераГТДЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НомераГТДЗапрос;
		}
		public static void ЗаписатьНовый(НомераГТДЗапрос НомераГТДЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НомераГТД?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НомераГТДОтвет = Клиент.Post(НомераГТДЗапрос);
		}
		public static void Записать(НомераГТДЗапрос НомераГТДЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НомераГТД?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НомераГТДОтвет = Клиент.Put(НомераГТДЗапрос);
		}
		public static void Удалить(НомераГТДЗапрос НомераГТДЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НомераГТД?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НомераГТДОтвет = Клиент.Delete(НомераГТДЗапрос);
		}
	}
}