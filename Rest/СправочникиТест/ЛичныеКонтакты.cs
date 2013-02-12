
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ЛичныеКонтакты:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ЛичныеКонтактыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ЛичныеКонтакты/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЛичныеКонтактыЗапрос ЛичныеКонтактыЗапрос = null;
			try
			{
				ЛичныеКонтактыЗапрос = Клиент.Get(new ЛичныеКонтактыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЛичныеКонтактыЗапрос;
		}
		public static ЛичныеКонтактыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ЛичныеКонтакты/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЛичныеКонтактыЗапрос ЛичныеКонтактыЗапрос = null;
			try
			{
				ЛичныеКонтактыЗапрос = Клиент.Get(new ЛичныеКонтактыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЛичныеКонтактыЗапрос;
		}
		public static ЛичныеКонтактыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ЛичныеКонтакты/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЛичныеКонтактыЗапрос ЛичныеКонтактыЗапрос = null;
			try
			{
				ЛичныеКонтактыЗапрос = Клиент.Get(new ЛичныеКонтактыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЛичныеКонтактыЗапрос;
		}
		public static void ЗаписатьНовый(ЛичныеКонтактыЗапрос ЛичныеКонтактыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ЛичныеКонтакты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЛичныеКонтактыОтвет = Клиент.Post(ЛичныеКонтактыЗапрос);
		}
		public static void Записать(ЛичныеКонтактыЗапрос ЛичныеКонтактыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ЛичныеКонтакты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЛичныеКонтактыОтвет = Клиент.Put(ЛичныеКонтактыЗапрос);
		}
		public static void Удалить(ЛичныеКонтактыЗапрос ЛичныеКонтактыЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ЛичныеКонтакты?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЛичныеКонтактыОтвет = Клиент.Delete(ЛичныеКонтактыЗапрос);
		}
	}
}