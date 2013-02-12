
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыЦФО:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыЦФОЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЦФО/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыЦФОЗапрос ВидыЦФОЗапрос = null;
			try
			{
				ВидыЦФОЗапрос = Клиент.Get(new ВидыЦФОЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыЦФОЗапрос;
		}
		public static ВидыЦФОЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЦФО/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыЦФОЗапрос ВидыЦФОЗапрос = null;
			try
			{
				ВидыЦФОЗапрос = Клиент.Get(new ВидыЦФОЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыЦФОЗапрос;
		}
		public static ВидыЦФОЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЦФО/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыЦФОЗапрос ВидыЦФОЗапрос = null;
			try
			{
				ВидыЦФОЗапрос = Клиент.Get(new ВидыЦФОЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыЦФОЗапрос;
		}
		public static void ЗаписатьНовый(ВидыЦФОЗапрос ВидыЦФОЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЦФО?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыЦФООтвет = Клиент.Post(ВидыЦФОЗапрос);
		}
		public static void Записать(ВидыЦФОЗапрос ВидыЦФОЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЦФО?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыЦФООтвет = Клиент.Put(ВидыЦФОЗапрос);
		}
		public static void Удалить(ВидыЦФОЗапрос ВидыЦФОЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЦФО?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыЦФООтвет = Клиент.Delete(ВидыЦФОЗапрос);
		}
	}
}