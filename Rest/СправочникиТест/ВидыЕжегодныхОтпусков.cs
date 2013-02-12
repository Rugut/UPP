
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыЕжегодныхОтпусков:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыЕжегодныхОтпусковЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЕжегодныхОтпусков/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыЕжегодныхОтпусковЗапрос ВидыЕжегодныхОтпусковЗапрос = null;
			try
			{
				ВидыЕжегодныхОтпусковЗапрос = Клиент.Get(new ВидыЕжегодныхОтпусковЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыЕжегодныхОтпусковЗапрос;
		}
		public static ВидыЕжегодныхОтпусковЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЕжегодныхОтпусков/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыЕжегодныхОтпусковЗапрос ВидыЕжегодныхОтпусковЗапрос = null;
			try
			{
				ВидыЕжегодныхОтпусковЗапрос = Клиент.Get(new ВидыЕжегодныхОтпусковЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыЕжегодныхОтпусковЗапрос;
		}
		public static ВидыЕжегодныхОтпусковЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЕжегодныхОтпусков/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыЕжегодныхОтпусковЗапрос ВидыЕжегодныхОтпусковЗапрос = null;
			try
			{
				ВидыЕжегодныхОтпусковЗапрос = Клиент.Get(new ВидыЕжегодныхОтпусковЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыЕжегодныхОтпусковЗапрос;
		}
		public static void ЗаписатьНовый(ВидыЕжегодныхОтпусковЗапрос ВидыЕжегодныхОтпусковЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЕжегодныхОтпусков?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыЕжегодныхОтпусковОтвет = Клиент.Post(ВидыЕжегодныхОтпусковЗапрос);
		}
		public static void Записать(ВидыЕжегодныхОтпусковЗапрос ВидыЕжегодныхОтпусковЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЕжегодныхОтпусков?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыЕжегодныхОтпусковОтвет = Клиент.Put(ВидыЕжегодныхОтпусковЗапрос);
		}
		public static void Удалить(ВидыЕжегодныхОтпусковЗапрос ВидыЕжегодныхОтпусковЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВидыЕжегодныхОтпусков?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыЕжегодныхОтпусковОтвет = Клиент.Delete(ВидыЕжегодныхОтпусковЗапрос);
		}
	}
}