
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КлючиАналитикиВидаУчета:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КлючиАналитикиВидаУчетаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/КлючиАналитикиВидаУчета/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КлючиАналитикиВидаУчетаЗапрос КлючиАналитикиВидаУчетаЗапрос = null;
			try
			{
				КлючиАналитикиВидаУчетаЗапрос = Клиент.Get(new КлючиАналитикиВидаУчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КлючиАналитикиВидаУчетаЗапрос;
		}
		public static КлючиАналитикиВидаУчетаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/КлючиАналитикиВидаУчета/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КлючиАналитикиВидаУчетаЗапрос КлючиАналитикиВидаУчетаЗапрос = null;
			try
			{
				КлючиАналитикиВидаУчетаЗапрос = Клиент.Get(new КлючиАналитикиВидаУчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КлючиАналитикиВидаУчетаЗапрос;
		}
		public static void ЗаписатьНовый(КлючиАналитикиВидаУчетаЗапрос КлючиАналитикиВидаУчетаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/КлючиАналитикиВидаУчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КлючиАналитикиВидаУчетаОтвет = Клиент.Post(КлючиАналитикиВидаУчетаЗапрос);
		}
		public static void Записать(КлючиАналитикиВидаУчетаЗапрос КлючиАналитикиВидаУчетаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/КлючиАналитикиВидаУчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КлючиАналитикиВидаУчетаОтвет = Клиент.Put(КлючиАналитикиВидаУчетаЗапрос);
		}
		public static void Удалить(КлючиАналитикиВидаУчетаЗапрос КлючиАналитикиВидаУчетаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/КлючиАналитикиВидаУчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КлючиАналитикиВидаУчетаОтвет = Клиент.Delete(КлючиАналитикиВидаУчетаЗапрос);
		}
	}
}