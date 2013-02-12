
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОстаткиОтпусков:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОстаткиОтпусковЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ОстаткиОтпусков/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОстаткиОтпусковЗапрос ОстаткиОтпусковЗапрос = null;
			try
			{
				ОстаткиОтпусковЗапрос = Клиент.Get(new ОстаткиОтпусковЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОстаткиОтпусковЗапрос;
		}
		public static ОстаткиОтпусковЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ОстаткиОтпусков/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОстаткиОтпусковЗапрос ОстаткиОтпусковЗапрос = null;
			try
			{
				ОстаткиОтпусковЗапрос = Клиент.Get(new ОстаткиОтпусковЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОстаткиОтпусковЗапрос;
		}
		public static void ЗаписатьНовый(ОстаткиОтпусковЗапрос ОстаткиОтпусковЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ОстаткиОтпусков?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОстаткиОтпусковОтвет = Клиент.Post(ОстаткиОтпусковЗапрос);
		}
		public static void Записать(ОстаткиОтпусковЗапрос ОстаткиОтпусковЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ОстаткиОтпусков?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОстаткиОтпусковОтвет = Клиент.Put(ОстаткиОтпусковЗапрос);
		}
		public static void Удалить(ОстаткиОтпусковЗапрос ОстаткиОтпусковЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ОстаткиОтпусков?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОстаткиОтпусковОтвет = Клиент.Delete(ОстаткиОтпусковЗапрос);
		}
	}
}