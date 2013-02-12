
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ЦеновыеГруппы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ЦеновыеГруппыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ЦеновыеГруппы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЦеновыеГруппыЗапрос ЦеновыеГруппыЗапрос = null;
			try
			{
				ЦеновыеГруппыЗапрос = Клиент.Get(new ЦеновыеГруппыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЦеновыеГруппыЗапрос;
		}
		public static ЦеновыеГруппыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ЦеновыеГруппы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЦеновыеГруппыЗапрос ЦеновыеГруппыЗапрос = null;
			try
			{
				ЦеновыеГруппыЗапрос = Клиент.Get(new ЦеновыеГруппыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЦеновыеГруппыЗапрос;
		}
		public static ЦеновыеГруппыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ЦеновыеГруппы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЦеновыеГруппыЗапрос ЦеновыеГруппыЗапрос = null;
			try
			{
				ЦеновыеГруппыЗапрос = Клиент.Get(new ЦеновыеГруппыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЦеновыеГруппыЗапрос;
		}
		public static void ЗаписатьНовый(ЦеновыеГруппыЗапрос ЦеновыеГруппыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ЦеновыеГруппы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЦеновыеГруппыОтвет = Клиент.Post(ЦеновыеГруппыЗапрос);
		}
		public static void Записать(ЦеновыеГруппыЗапрос ЦеновыеГруппыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ЦеновыеГруппы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЦеновыеГруппыОтвет = Клиент.Put(ЦеновыеГруппыЗапрос);
		}
		public static void Удалить(ЦеновыеГруппыЗапрос ЦеновыеГруппыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ЦеновыеГруппы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЦеновыеГруппыОтвет = Клиент.Delete(ЦеновыеГруппыЗапрос);
		}
	}
}