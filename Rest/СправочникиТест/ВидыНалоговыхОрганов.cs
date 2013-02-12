
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыНалоговыхОрганов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыНалоговыхОргановЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВидыНалоговыхОрганов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыНалоговыхОргановЗапрос ВидыНалоговыхОргановЗапрос = null;
			try
			{
				ВидыНалоговыхОргановЗапрос = Клиент.Get(new ВидыНалоговыхОргановЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыНалоговыхОргановЗапрос;
		}
		public static ВидыНалоговыхОргановЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ВидыНалоговыхОрганов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыНалоговыхОргановЗапрос ВидыНалоговыхОргановЗапрос = null;
			try
			{
				ВидыНалоговыхОргановЗапрос = Клиент.Get(new ВидыНалоговыхОргановЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыНалоговыхОргановЗапрос;
		}
		public static ВидыНалоговыхОргановЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВидыНалоговыхОрганов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыНалоговыхОргановЗапрос ВидыНалоговыхОргановЗапрос = null;
			try
			{
				ВидыНалоговыхОргановЗапрос = Клиент.Get(new ВидыНалоговыхОргановЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыНалоговыхОргановЗапрос;
		}
		public static void ЗаписатьНовый(ВидыНалоговыхОргановЗапрос ВидыНалоговыхОргановЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ВидыНалоговыхОрганов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыНалоговыхОргановОтвет = Клиент.Post(ВидыНалоговыхОргановЗапрос);
		}
		public static void Записать(ВидыНалоговыхОргановЗапрос ВидыНалоговыхОргановЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ВидыНалоговыхОрганов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыНалоговыхОргановОтвет = Клиент.Put(ВидыНалоговыхОргановЗапрос);
		}
		public static void Удалить(ВидыНалоговыхОргановЗапрос ВидыНалоговыхОргановЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ВидыНалоговыхОрганов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыНалоговыхОргановОтвет = Клиент.Delete(ВидыНалоговыхОргановЗапрос);
		}
	}
}