
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОтправкиФСС:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОтправкиФССЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ОтправкиФСС/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОтправкиФССЗапрос ОтправкиФССЗапрос = null;
			try
			{
				ОтправкиФССЗапрос = Клиент.Get(new ОтправкиФССЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОтправкиФССЗапрос;
		}
		public static ОтправкиФССЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ОтправкиФСС/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОтправкиФССЗапрос ОтправкиФССЗапрос = null;
			try
			{
				ОтправкиФССЗапрос = Клиент.Get(new ОтправкиФССЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОтправкиФССЗапрос;
		}
		public static ОтправкиФССЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ОтправкиФСС/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОтправкиФССЗапрос ОтправкиФССЗапрос = null;
			try
			{
				ОтправкиФССЗапрос = Клиент.Get(new ОтправкиФССЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОтправкиФССЗапрос;
		}
		public static void ЗаписатьНовый(ОтправкиФССЗапрос ОтправкиФССЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ОтправкиФСС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОтправкиФССОтвет = Клиент.Post(ОтправкиФССЗапрос);
		}
		public static void Записать(ОтправкиФССЗапрос ОтправкиФССЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ОтправкиФСС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОтправкиФССОтвет = Клиент.Put(ОтправкиФССЗапрос);
		}
		public static void Удалить(ОтправкиФССЗапрос ОтправкиФССЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ОтправкиФСС?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОтправкиФССОтвет = Клиент.Delete(ОтправкиФССЗапрос);
		}
	}
}