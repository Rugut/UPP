
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ШаблоныФормулРасчета:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ШаблоныФормулРасчетаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ШаблоныФормулРасчета/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ШаблоныФормулРасчетаЗапрос ШаблоныФормулРасчетаЗапрос = null;
			try
			{
				ШаблоныФормулРасчетаЗапрос = Клиент.Get(new ШаблоныФормулРасчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ШаблоныФормулРасчетаЗапрос;
		}
		public static ШаблоныФормулРасчетаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ШаблоныФормулРасчета/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ШаблоныФормулРасчетаЗапрос ШаблоныФормулРасчетаЗапрос = null;
			try
			{
				ШаблоныФормулРасчетаЗапрос = Клиент.Get(new ШаблоныФормулРасчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ШаблоныФормулРасчетаЗапрос;
		}
		public static ШаблоныФормулРасчетаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ШаблоныФормулРасчета/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ШаблоныФормулРасчетаЗапрос ШаблоныФормулРасчетаЗапрос = null;
			try
			{
				ШаблоныФормулРасчетаЗапрос = Клиент.Get(new ШаблоныФормулРасчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ШаблоныФормулРасчетаЗапрос;
		}
		public static void ЗаписатьНовый(ШаблоныФормулРасчетаЗапрос ШаблоныФормулРасчетаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ШаблоныФормулРасчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ШаблоныФормулРасчетаОтвет = Клиент.Post(ШаблоныФормулРасчетаЗапрос);
		}
		public static void Записать(ШаблоныФормулРасчетаЗапрос ШаблоныФормулРасчетаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ШаблоныФормулРасчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ШаблоныФормулРасчетаОтвет = Клиент.Put(ШаблоныФормулРасчетаЗапрос);
		}
		public static void Удалить(ШаблоныФормулРасчетаЗапрос ШаблоныФормулРасчетаЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ШаблоныФормулРасчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ШаблоныФормулРасчетаОтвет = Клиент.Delete(ШаблоныФормулРасчетаЗапрос);
		}
	}
}