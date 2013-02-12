
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыАнализовНоменклатуры:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыАнализовНоменклатурыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыАнализовНоменклатуры/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыАнализовНоменклатурыЗапрос ВидыАнализовНоменклатурыЗапрос = null;
			try
			{
				ВидыАнализовНоменклатурыЗапрос = Клиент.Get(new ВидыАнализовНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыАнализовНоменклатурыЗапрос;
		}
		public static ВидыАнализовНоменклатурыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыАнализовНоменклатуры/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыАнализовНоменклатурыЗапрос ВидыАнализовНоменклатурыЗапрос = null;
			try
			{
				ВидыАнализовНоменклатурыЗапрос = Клиент.Get(new ВидыАнализовНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыАнализовНоменклатурыЗапрос;
		}
		public static ВидыАнализовНоменклатурыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыАнализовНоменклатуры/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыАнализовНоменклатурыЗапрос ВидыАнализовНоменклатурыЗапрос = null;
			try
			{
				ВидыАнализовНоменклатурыЗапрос = Клиент.Get(new ВидыАнализовНоменклатурыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыАнализовНоменклатурыЗапрос;
		}
		public static void ЗаписатьНовый(ВидыАнализовНоменклатурыЗапрос ВидыАнализовНоменклатурыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыАнализовНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыАнализовНоменклатурыОтвет = Клиент.Post(ВидыАнализовНоменклатурыЗапрос);
		}
		public static void Записать(ВидыАнализовНоменклатурыЗапрос ВидыАнализовНоменклатурыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыАнализовНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыАнализовНоменклатурыОтвет = Клиент.Put(ВидыАнализовНоменклатурыЗапрос);
		}
		public static void Удалить(ВидыАнализовНоменклатурыЗапрос ВидыАнализовНоменклатурыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыАнализовНоменклатуры?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыАнализовНоменклатурыОтвет = Клиент.Delete(ВидыАнализовНоменклатурыЗапрос);
		}
	}
}