
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КомпетенцииРаботников:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КомпетенцииРаботниковЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КомпетенцииРаботников/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КомпетенцииРаботниковЗапрос КомпетенцииРаботниковЗапрос = null;
			try
			{
				КомпетенцииРаботниковЗапрос = Клиент.Get(new КомпетенцииРаботниковЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КомпетенцииРаботниковЗапрос;
		}
		public static КомпетенцииРаботниковЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/КомпетенцииРаботников/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КомпетенцииРаботниковЗапрос КомпетенцииРаботниковЗапрос = null;
			try
			{
				КомпетенцииРаботниковЗапрос = Клиент.Get(new КомпетенцииРаботниковЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КомпетенцииРаботниковЗапрос;
		}
		public static void ЗаписатьНовый(КомпетенцииРаботниковЗапрос КомпетенцииРаботниковЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/КомпетенцииРаботников?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КомпетенцииРаботниковОтвет = Клиент.Post(КомпетенцииРаботниковЗапрос);
		}
		public static void Записать(КомпетенцииРаботниковЗапрос КомпетенцииРаботниковЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/КомпетенцииРаботников?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КомпетенцииРаботниковОтвет = Клиент.Put(КомпетенцииРаботниковЗапрос);
		}
		public static void Удалить(КомпетенцииРаботниковЗапрос КомпетенцииРаботниковЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/КомпетенцииРаботников?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КомпетенцииРаботниковОтвет = Клиент.Delete(КомпетенцииРаботниковЗапрос);
		}
	}
}