
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class СерверыДокументооборота:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СерверыДокументооборотаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СерверыДокументооборота/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СерверыДокументооборотаЗапрос СерверыДокументооборотаЗапрос = null;
			try
			{
				СерверыДокументооборотаЗапрос = Клиент.Get(new СерверыДокументооборотаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СерверыДокументооборотаЗапрос;
		}
		public static СерверыДокументооборотаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/СерверыДокументооборота/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СерверыДокументооборотаЗапрос СерверыДокументооборотаЗапрос = null;
			try
			{
				СерверыДокументооборотаЗапрос = Клиент.Get(new СерверыДокументооборотаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СерверыДокументооборотаЗапрос;
		}
		public static СерверыДокументооборотаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/СерверыДокументооборота/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СерверыДокументооборотаЗапрос СерверыДокументооборотаЗапрос = null;
			try
			{
				СерверыДокументооборотаЗапрос = Клиент.Get(new СерверыДокументооборотаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СерверыДокументооборотаЗапрос;
		}
		public static void ЗаписатьНовый(СерверыДокументооборотаЗапрос СерверыДокументооборотаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/СерверыДокументооборота?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СерверыДокументооборотаОтвет = Клиент.Post(СерверыДокументооборотаЗапрос);
		}
		public static void Записать(СерверыДокументооборотаЗапрос СерверыДокументооборотаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/СерверыДокументооборота?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СерверыДокументооборотаОтвет = Клиент.Put(СерверыДокументооборотаЗапрос);
		}
		public static void Удалить(СерверыДокументооборотаЗапрос СерверыДокументооборотаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/СерверыДокументооборота?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СерверыДокументооборотаОтвет = Клиент.Delete(СерверыДокументооборотаЗапрос);
		}
	}
}