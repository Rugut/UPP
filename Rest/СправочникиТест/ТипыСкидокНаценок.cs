
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТипыСкидокНаценок:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТипыСкидокНаценокЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТипыСкидокНаценок/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТипыСкидокНаценокЗапрос ТипыСкидокНаценокЗапрос = null;
			try
			{
				ТипыСкидокНаценокЗапрос = Клиент.Get(new ТипыСкидокНаценокЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТипыСкидокНаценокЗапрос;
		}
		public static ТипыСкидокНаценокЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ТипыСкидокНаценок/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТипыСкидокНаценокЗапрос ТипыСкидокНаценокЗапрос = null;
			try
			{
				ТипыСкидокНаценокЗапрос = Клиент.Get(new ТипыСкидокНаценокЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТипыСкидокНаценокЗапрос;
		}
		public static ТипыСкидокНаценокЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТипыСкидокНаценок/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТипыСкидокНаценокЗапрос ТипыСкидокНаценокЗапрос = null;
			try
			{
				ТипыСкидокНаценокЗапрос = Клиент.Get(new ТипыСкидокНаценокЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТипыСкидокНаценокЗапрос;
		}
		public static void ЗаписатьНовый(ТипыСкидокНаценокЗапрос ТипыСкидокНаценокЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ТипыСкидокНаценок?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТипыСкидокНаценокОтвет = Клиент.Post(ТипыСкидокНаценокЗапрос);
		}
		public static void Записать(ТипыСкидокНаценокЗапрос ТипыСкидокНаценокЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ТипыСкидокНаценок?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТипыСкидокНаценокОтвет = Клиент.Put(ТипыСкидокНаценокЗапрос);
		}
		public static void Удалить(ТипыСкидокНаценокЗапрос ТипыСкидокНаценокЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ТипыСкидокНаценок?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТипыСкидокНаценокОтвет = Клиент.Delete(ТипыСкидокНаценокЗапрос);
		}
	}
}