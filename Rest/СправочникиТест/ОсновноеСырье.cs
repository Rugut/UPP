
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОсновноеСырье:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОсновноеСырьеЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ОсновноеСырье/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОсновноеСырьеЗапрос ОсновноеСырьеЗапрос = null;
			try
			{
				ОсновноеСырьеЗапрос = Клиент.Get(new ОсновноеСырьеЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОсновноеСырьеЗапрос;
		}
		public static ОсновноеСырьеЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ОсновноеСырье/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОсновноеСырьеЗапрос ОсновноеСырьеЗапрос = null;
			try
			{
				ОсновноеСырьеЗапрос = Клиент.Get(new ОсновноеСырьеЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОсновноеСырьеЗапрос;
		}
		public static ОсновноеСырьеЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ОсновноеСырье/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОсновноеСырьеЗапрос ОсновноеСырьеЗапрос = null;
			try
			{
				ОсновноеСырьеЗапрос = Клиент.Get(new ОсновноеСырьеЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОсновноеСырьеЗапрос;
		}
		public static void ЗаписатьНовый(ОсновноеСырьеЗапрос ОсновноеСырьеЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ОсновноеСырье?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОсновноеСырьеОтвет = Клиент.Post(ОсновноеСырьеЗапрос);
		}
		public static void Записать(ОсновноеСырьеЗапрос ОсновноеСырьеЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ОсновноеСырье?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОсновноеСырьеОтвет = Клиент.Put(ОсновноеСырьеЗапрос);
		}
		public static void Удалить(ОсновноеСырьеЗапрос ОсновноеСырьеЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ОсновноеСырье?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОсновноеСырьеОтвет = Клиент.Delete(ОсновноеСырьеЗапрос);
		}
	}
}