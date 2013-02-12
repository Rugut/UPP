
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВариантыCхемМотивации:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВариантыCхемМотивацииЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыCхемМотивации/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВариантыCхемМотивацииЗапрос ВариантыCхемМотивацииЗапрос = null;
			try
			{
				ВариантыCхемМотивацииЗапрос = Клиент.Get(new ВариантыCхемМотивацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВариантыCхемМотивацииЗапрос;
		}
		public static ВариантыCхемМотивацииЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыCхемМотивации/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВариантыCхемМотивацииЗапрос ВариантыCхемМотивацииЗапрос = null;
			try
			{
				ВариантыCхемМотивацииЗапрос = Клиент.Get(new ВариантыCхемМотивацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВариантыCхемМотивацииЗапрос;
		}
		public static ВариантыCхемМотивацииЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыCхемМотивации/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВариантыCхемМотивацииЗапрос ВариантыCхемМотивацииЗапрос = null;
			try
			{
				ВариантыCхемМотивацииЗапрос = Клиент.Get(new ВариантыCхемМотивацииЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВариантыCхемМотивацииЗапрос;
		}
		public static void ЗаписатьНовый(ВариантыCхемМотивацииЗапрос ВариантыCхемМотивацииЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыCхемМотивации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВариантыCхемМотивацииОтвет = Клиент.Post(ВариантыCхемМотивацииЗапрос);
		}
		public static void Записать(ВариантыCхемМотивацииЗапрос ВариантыCхемМотивацииЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыCхемМотивации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВариантыCхемМотивацииОтвет = Клиент.Put(ВариантыCхемМотивацииЗапрос);
		}
		public static void Удалить(ВариантыCхемМотивацииЗапрос ВариантыCхемМотивацииЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВариантыCхемМотивации?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВариантыCхемМотивацииОтвет = Клиент.Delete(ВариантыCхемМотивацииЗапрос);
		}
	}
}