
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВариантыОтветовОпросов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВариантыОтветовОпросовЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыОтветовОпросов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВариантыОтветовОпросовЗапрос ВариантыОтветовОпросовЗапрос = null;
			try
			{
				ВариантыОтветовОпросовЗапрос = Клиент.Get(new ВариантыОтветовОпросовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВариантыОтветовОпросовЗапрос;
		}
		public static ВариантыОтветовОпросовЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыОтветовОпросов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВариантыОтветовОпросовЗапрос ВариантыОтветовОпросовЗапрос = null;
			try
			{
				ВариантыОтветовОпросовЗапрос = Клиент.Get(new ВариантыОтветовОпросовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВариантыОтветовОпросовЗапрос;
		}
		public static ВариантыОтветовОпросовЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыОтветовОпросов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВариантыОтветовОпросовЗапрос ВариантыОтветовОпросовЗапрос = null;
			try
			{
				ВариантыОтветовОпросовЗапрос = Клиент.Get(new ВариантыОтветовОпросовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВариантыОтветовОпросовЗапрос;
		}
		public static void ЗаписатьНовый(ВариантыОтветовОпросовЗапрос ВариантыОтветовОпросовЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыОтветовОпросов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВариантыОтветовОпросовОтвет = Клиент.Post(ВариантыОтветовОпросовЗапрос);
		}
		public static void Записать(ВариантыОтветовОпросовЗапрос ВариантыОтветовОпросовЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыОтветовОпросов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВариантыОтветовОпросовОтвет = Клиент.Put(ВариантыОтветовОпросовЗапрос);
		}
		public static void Удалить(ВариантыОтветовОпросовЗапрос ВариантыОтветовОпросовЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыОтветовОпросов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВариантыОтветовОпросовОтвет = Клиент.Delete(ВариантыОтветовОпросовЗапрос);
		}
	}
}