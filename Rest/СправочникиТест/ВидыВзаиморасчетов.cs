
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыВзаиморасчетов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыВзаиморасчетовЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВидыВзаиморасчетов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыВзаиморасчетовЗапрос ВидыВзаиморасчетовЗапрос = null;
			try
			{
				ВидыВзаиморасчетовЗапрос = Клиент.Get(new ВидыВзаиморасчетовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыВзаиморасчетовЗапрос;
		}
		public static ВидыВзаиморасчетовЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ВидыВзаиморасчетов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыВзаиморасчетовЗапрос ВидыВзаиморасчетовЗапрос = null;
			try
			{
				ВидыВзаиморасчетовЗапрос = Клиент.Get(new ВидыВзаиморасчетовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыВзаиморасчетовЗапрос;
		}
		public static ВидыВзаиморасчетовЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВидыВзаиморасчетов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыВзаиморасчетовЗапрос ВидыВзаиморасчетовЗапрос = null;
			try
			{
				ВидыВзаиморасчетовЗапрос = Клиент.Get(new ВидыВзаиморасчетовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыВзаиморасчетовЗапрос;
		}
		public static void ЗаписатьНовый(ВидыВзаиморасчетовЗапрос ВидыВзаиморасчетовЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ВидыВзаиморасчетов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыВзаиморасчетовОтвет = Клиент.Post(ВидыВзаиморасчетовЗапрос);
		}
		public static void Записать(ВидыВзаиморасчетовЗапрос ВидыВзаиморасчетовЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ВидыВзаиморасчетов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыВзаиморасчетовОтвет = Клиент.Put(ВидыВзаиморасчетовЗапрос);
		}
		public static void Удалить(ВидыВзаиморасчетовЗапрос ВидыВзаиморасчетовЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ВидыВзаиморасчетов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыВзаиморасчетовОтвет = Клиент.Delete(ВидыВзаиморасчетовЗапрос);
		}
	}
}