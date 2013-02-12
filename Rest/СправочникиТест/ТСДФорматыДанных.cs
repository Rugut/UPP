
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ТСДФорматыДанных:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ТСДФорматыДанныхЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТСДФорматыДанных/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТСДФорматыДанныхЗапрос ТСДФорматыДанныхЗапрос = null;
			try
			{
				ТСДФорматыДанныхЗапрос = Клиент.Get(new ТСДФорматыДанныхЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТСДФорматыДанныхЗапрос;
		}
		public static ТСДФорматыДанныхЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ТСДФорматыДанных/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТСДФорматыДанныхЗапрос ТСДФорматыДанныхЗапрос = null;
			try
			{
				ТСДФорматыДанныхЗапрос = Клиент.Get(new ТСДФорматыДанныхЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТСДФорматыДанныхЗапрос;
		}
		public static ТСДФорматыДанныхЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ТСДФорматыДанных/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ТСДФорматыДанныхЗапрос ТСДФорматыДанныхЗапрос = null;
			try
			{
				ТСДФорматыДанныхЗапрос = Клиент.Get(new ТСДФорматыДанныхЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ТСДФорматыДанныхЗапрос;
		}
		public static void ЗаписатьНовый(ТСДФорматыДанныхЗапрос ТСДФорматыДанныхЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ТСДФорматыДанных?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТСДФорматыДанныхОтвет = Клиент.Post(ТСДФорматыДанныхЗапрос);
		}
		public static void Записать(ТСДФорматыДанныхЗапрос ТСДФорматыДанныхЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ТСДФорматыДанных?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТСДФорматыДанныхОтвет = Клиент.Put(ТСДФорматыДанныхЗапрос);
		}
		public static void Удалить(ТСДФорматыДанныхЗапрос ТСДФорматыДанныхЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ТСДФорматыДанных?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ТСДФорматыДанныхОтвет = Клиент.Delete(ТСДФорматыДанныхЗапрос);
		}
	}
}