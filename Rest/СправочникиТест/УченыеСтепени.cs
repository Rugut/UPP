
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class УченыеСтепени:V82.Rest.СправочникиТест.СправочникТест
	{
		public static УченыеСтепениЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/УченыеСтепени/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УченыеСтепениЗапрос УченыеСтепениЗапрос = null;
			try
			{
				УченыеСтепениЗапрос = Клиент.Get(new УченыеСтепениЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УченыеСтепениЗапрос;
		}
		public static УченыеСтепениЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/УченыеСтепени/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УченыеСтепениЗапрос УченыеСтепениЗапрос = null;
			try
			{
				УченыеСтепениЗапрос = Клиент.Get(new УченыеСтепениЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УченыеСтепениЗапрос;
		}
		public static УченыеСтепениЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/УченыеСтепени/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			УченыеСтепениЗапрос УченыеСтепениЗапрос = null;
			try
			{
				УченыеСтепениЗапрос = Клиент.Get(new УченыеСтепениЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return УченыеСтепениЗапрос;
		}
		public static void ЗаписатьНовый(УченыеСтепениЗапрос УченыеСтепениЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/УченыеСтепени?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УченыеСтепениОтвет = Клиент.Post(УченыеСтепениЗапрос);
		}
		public static void Записать(УченыеСтепениЗапрос УченыеСтепениЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/УченыеСтепени?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УченыеСтепениОтвет = Клиент.Put(УченыеСтепениЗапрос);
		}
		public static void Удалить(УченыеСтепениЗапрос УченыеСтепениЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/УченыеСтепени?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var УченыеСтепениОтвет = Клиент.Delete(УченыеСтепениЗапрос);
		}
	}
}