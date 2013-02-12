
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ГруппыПользователей:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ГруппыПользователейЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ГруппыПользователей/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГруппыПользователейЗапрос ГруппыПользователейЗапрос = null;
			try
			{
				ГруппыПользователейЗапрос = Клиент.Get(new ГруппыПользователейЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГруппыПользователейЗапрос;
		}
		public static ГруппыПользователейЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ГруппыПользователей/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГруппыПользователейЗапрос ГруппыПользователейЗапрос = null;
			try
			{
				ГруппыПользователейЗапрос = Клиент.Get(new ГруппыПользователейЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГруппыПользователейЗапрос;
		}
		public static ГруппыПользователейЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ГруппыПользователей/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ГруппыПользователейЗапрос ГруппыПользователейЗапрос = null;
			try
			{
				ГруппыПользователейЗапрос = Клиент.Get(new ГруппыПользователейЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ГруппыПользователейЗапрос;
		}
		public static void ЗаписатьНовый(ГруппыПользователейЗапрос ГруппыПользователейЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ГруппыПользователей?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГруппыПользователейОтвет = Клиент.Post(ГруппыПользователейЗапрос);
		}
		public static void Записать(ГруппыПользователейЗапрос ГруппыПользователейЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ГруппыПользователей?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГруппыПользователейОтвет = Клиент.Put(ГруппыПользователейЗапрос);
		}
		public static void Удалить(ГруппыПользователейЗапрос ГруппыПользователейЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ГруппыПользователей?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ГруппыПользователейОтвет = Клиент.Delete(ГруппыПользователейЗапрос);
		}
	}
}