
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class НалоговыеОрганы:V82.Rest.СправочникиТест.СправочникТест
	{
		public static НалоговыеОрганыЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НалоговыеОрганы/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НалоговыеОрганыЗапрос НалоговыеОрганыЗапрос = null;
			try
			{
				НалоговыеОрганыЗапрос = Клиент.Get(new НалоговыеОрганыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НалоговыеОрганыЗапрос;
		}
		public static НалоговыеОрганыЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/НалоговыеОрганы/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НалоговыеОрганыЗапрос НалоговыеОрганыЗапрос = null;
			try
			{
				НалоговыеОрганыЗапрос = Клиент.Get(new НалоговыеОрганыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НалоговыеОрганыЗапрос;
		}
		public static НалоговыеОрганыЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/НалоговыеОрганы/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			НалоговыеОрганыЗапрос НалоговыеОрганыЗапрос = null;
			try
			{
				НалоговыеОрганыЗапрос = Клиент.Get(new НалоговыеОрганыЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return НалоговыеОрганыЗапрос;
		}
		public static void ЗаписатьНовый(НалоговыеОрганыЗапрос НалоговыеОрганыЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/НалоговыеОрганы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НалоговыеОрганыОтвет = Клиент.Post(НалоговыеОрганыЗапрос);
		}
		public static void Записать(НалоговыеОрганыЗапрос НалоговыеОрганыЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/НалоговыеОрганы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НалоговыеОрганыОтвет = Клиент.Put(НалоговыеОрганыЗапрос);
		}
		public static void Удалить(НалоговыеОрганыЗапрос НалоговыеОрганыЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/НалоговыеОрганы?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var НалоговыеОрганыОтвет = Клиент.Delete(НалоговыеОрганыЗапрос);
		}
	}
}