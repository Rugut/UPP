
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class БанковскиеСчета:V82.Rest.СправочникиТест.СправочникТест
	{
		public static БанковскиеСчетаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/БанковскиеСчета/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			БанковскиеСчетаЗапрос БанковскиеСчетаЗапрос = null;
			try
			{
				БанковскиеСчетаЗапрос = Клиент.Get(new БанковскиеСчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return БанковскиеСчетаЗапрос;
		}
		public static БанковскиеСчетаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/БанковскиеСчета/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			БанковскиеСчетаЗапрос БанковскиеСчетаЗапрос = null;
			try
			{
				БанковскиеСчетаЗапрос = Клиент.Get(new БанковскиеСчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return БанковскиеСчетаЗапрос;
		}
		public static БанковскиеСчетаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/БанковскиеСчета/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			БанковскиеСчетаЗапрос БанковскиеСчетаЗапрос = null;
			try
			{
				БанковскиеСчетаЗапрос = Клиент.Get(new БанковскиеСчетаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return БанковскиеСчетаЗапрос;
		}
		public static void ЗаписатьНовый(БанковскиеСчетаЗапрос БанковскиеСчетаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/БанковскиеСчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var БанковскиеСчетаОтвет = Клиент.Post(БанковскиеСчетаЗапрос);
		}
		public static void Записать(БанковскиеСчетаЗапрос БанковскиеСчетаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/БанковскиеСчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var БанковскиеСчетаОтвет = Клиент.Put(БанковскиеСчетаЗапрос);
		}
		public static void Удалить(БанковскиеСчетаЗапрос БанковскиеСчетаЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/БанковскиеСчета?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var БанковскиеСчетаОтвет = Клиент.Delete(БанковскиеСчетаЗапрос);
		}
	}
}