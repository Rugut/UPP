
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class Качество:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КачествоЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Качество/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КачествоЗапрос КачествоЗапрос = null;
			try
			{
				КачествоЗапрос = Клиент.Get(new КачествоЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КачествоЗапрос;
		}
		public static КачествоЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/Качество/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КачествоЗапрос КачествоЗапрос = null;
			try
			{
				КачествоЗапрос = Клиент.Get(new КачествоЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КачествоЗапрос;
		}
		public static КачествоЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/Качество/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КачествоЗапрос КачествоЗапрос = null;
			try
			{
				КачествоЗапрос = Клиент.Get(new КачествоЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КачествоЗапрос;
		}
		public static void ЗаписатьНовый(КачествоЗапрос КачествоЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/Качество?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КачествоОтвет = Клиент.Post(КачествоЗапрос);
		}
		public static void Записать(КачествоЗапрос КачествоЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/Качество?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КачествоОтвет = Клиент.Put(КачествоЗапрос);
		}
		public static void Удалить(КачествоЗапрос КачествоЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/Качество?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КачествоОтвет = Клиент.Delete(КачествоЗапрос);
		}
	}
}