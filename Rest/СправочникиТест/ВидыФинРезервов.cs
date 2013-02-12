
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыФинРезервов:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыФинРезервовЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВидыФинРезервов/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыФинРезервовЗапрос ВидыФинРезервовЗапрос = null;
			try
			{
				ВидыФинРезервовЗапрос = Клиент.Get(new ВидыФинРезервовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыФинРезервовЗапрос;
		}
		public static ВидыФинРезервовЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ВидыФинРезервов/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыФинРезервовЗапрос ВидыФинРезервовЗапрос = null;
			try
			{
				ВидыФинРезервовЗапрос = Клиент.Get(new ВидыФинРезервовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыФинРезервовЗапрос;
		}
		public static ВидыФинРезервовЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВидыФинРезервов/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыФинРезервовЗапрос ВидыФинРезервовЗапрос = null;
			try
			{
				ВидыФинРезервовЗапрос = Клиент.Get(new ВидыФинРезервовЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыФинРезервовЗапрос;
		}
		public static void ЗаписатьНовый(ВидыФинРезервовЗапрос ВидыФинРезервовЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ВидыФинРезервов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыФинРезервовОтвет = Клиент.Post(ВидыФинРезервовЗапрос);
		}
		public static void Записать(ВидыФинРезервовЗапрос ВидыФинРезервовЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ВидыФинРезервов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыФинРезервовОтвет = Клиент.Put(ВидыФинРезервовЗапрос);
		}
		public static void Удалить(ВидыФинРезервовЗапрос ВидыФинРезервовЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ВидыФинРезервов?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыФинРезервовОтвет = Клиент.Delete(ВидыФинРезервовЗапрос);
		}
	}
}