
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОснованияУвольнения:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОснованияУвольненияЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОснованияУвольнения/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОснованияУвольненияЗапрос ОснованияУвольненияЗапрос = null;
			try
			{
				ОснованияУвольненияЗапрос = Клиент.Get(new ОснованияУвольненияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОснованияУвольненияЗапрос;
		}
		public static ОснованияУвольненияЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ОснованияУвольнения/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОснованияУвольненияЗапрос ОснованияУвольненияЗапрос = null;
			try
			{
				ОснованияУвольненияЗапрос = Клиент.Get(new ОснованияУвольненияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОснованияУвольненияЗапрос;
		}
		public static ОснованияУвольненияЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОснованияУвольнения/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОснованияУвольненияЗапрос ОснованияУвольненияЗапрос = null;
			try
			{
				ОснованияУвольненияЗапрос = Клиент.Get(new ОснованияУвольненияЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОснованияУвольненияЗапрос;
		}
		public static void ЗаписатьНовый(ОснованияУвольненияЗапрос ОснованияУвольненияЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ОснованияУвольнения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОснованияУвольненияОтвет = Клиент.Post(ОснованияУвольненияЗапрос);
		}
		public static void Записать(ОснованияУвольненияЗапрос ОснованияУвольненияЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ОснованияУвольнения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОснованияУвольненияОтвет = Клиент.Put(ОснованияУвольненияЗапрос);
		}
		public static void Удалить(ОснованияУвольненияЗапрос ОснованияУвольненияЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ОснованияУвольнения?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОснованияУвольненияОтвет = Клиент.Delete(ОснованияУвольненияЗапрос);
		}
	}
}