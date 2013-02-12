
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КатегорииРасчетов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КатегорииРасчетовЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/КатегорииРасчетов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КатегорииРасчетовЗапрос КатегорииРасчетовЗапрос = null;
			try
			{
				КатегорииРасчетовЗапрос = Клиент.Get(new КатегорииРасчетовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КатегорииРасчетовЗапрос;
		}
		public static КатегорииРасчетовЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/КатегорииРасчетов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КатегорииРасчетовЗапрос КатегорииРасчетовЗапрос = null;
			try
			{
				КатегорииРасчетовЗапрос = Клиент.Get(new КатегорииРасчетовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КатегорииРасчетовЗапрос;
		}
		public static КатегорииРасчетовЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/КатегорииРасчетов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КатегорииРасчетовЗапрос КатегорииРасчетовЗапрос = null;
			try
			{
				КатегорииРасчетовЗапрос = Клиент.Get(new КатегорииРасчетовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КатегорииРасчетовЗапрос;
		}
		public static void ЗаписатьНовый(КатегорииРасчетовЗапрос КатегорииРасчетовЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/КатегорииРасчетов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КатегорииРасчетовОтвет = Клиент.Post(КатегорииРасчетовЗапрос);
		}
		public static void Записать(КатегорииРасчетовЗапрос КатегорииРасчетовЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/КатегорииРасчетов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КатегорииРасчетовОтвет = Клиент.Put(КатегорииРасчетовЗапрос);
		}
		public static void Удалить(КатегорииРасчетовЗапрос КатегорииРасчетовЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/КатегорииРасчетов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КатегорииРасчетовОтвет = Клиент.Delete(КатегорииРасчетовЗапрос);
		}
	}
}