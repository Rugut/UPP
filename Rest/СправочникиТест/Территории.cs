
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Территории:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТерриторииЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Территории/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТерриторииЗапрос ТерриторииЗапрос = null;
			try
			{
				ТерриторииЗапрос = Клиент.Get(new ТерриторииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТерриторииЗапрос;
		}
		public static ТерриторииЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/Территории/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТерриторииЗапрос ТерриторииЗапрос = null;
			try
			{
				ТерриторииЗапрос = Клиент.Get(new ТерриторииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТерриторииЗапрос;
		}
		public static ТерриторииЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Территории/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТерриторииЗапрос ТерриторииЗапрос = null;
			try
			{
				ТерриторииЗапрос = Клиент.Get(new ТерриторииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТерриторииЗапрос;
		}
		public static void ЗаписатьНовый(ТерриторииЗапрос ТерриторииЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/Территории?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТерриторииОтвет = Клиент.Post(ТерриторииЗапрос);
		}
		public static void Записать(ТерриторииЗапрос ТерриторииЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/Территории?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТерриторииОтвет = Клиент.Put(ТерриторииЗапрос);
		}
		public static void Удалить(ТерриторииЗапрос ТерриторииЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/Территории?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТерриторииОтвет = Клиент.Delete(ТерриторииЗапрос);
		}
	}
}