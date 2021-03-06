﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	//VersiiFajjlov
	[Маршрут("Справочники/ВерсииФайлов","")]
	public class ВерсииФайловЗапрос: V82.СправочникиСсылка.ВерсииФайлов,IReturn<ВерсииФайловЗапрос>
	{
	}
	[Маршрут("Справочники/ВерсииФайлов/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Справочники/ВерсииФайлов/ПоСсылке","{Ссылка}")]
	public class ВерсииФайловНайтиПоСсылке: V82.СправочникиСсылка.ВерсииФайлов,IReturn<ВерсииФайловНайтиПоСсылке>
	{
	}
	[Маршрут("Справочники/ВерсииФайлов/НайтиПоКоду","{Код}")]
	[Маршрут("Справочники/ВерсииФайлов/ПоКоду","{Код}")]
	public class ВерсииФайловНайтиПоКоду: V82.СправочникиСсылка.ВерсииФайлов,IReturn<ВерсииФайловНайтиПоКоду>
	{
	}
	[Маршрут("Справочники/ВерсииФайлов/НайтиПоНаименованию","{Наименование}")]
	[Маршрут("Справочники/ВерсииФайлов/ПоНаименованию","{Наименование}")]
	public class ВерсииФайловНайтиПоНаименованию: V82.СправочникиСсылка.ВерсииФайлов,IReturn<ВерсииФайловНайтиПоНаименованию>
	{
	}
	[Маршрут("Справочники/ВерсииФайлов/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Справочники/ВерсииФайлов/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ВерсииФайлов/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ВерсииФайловВыбратьПоСсылке: V82.СправочникиСсылка.ВерсииФайлов,IReturn<ВерсииФайловВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Справочники/ВерсииФайлов/ВыбратьПоКоду","{___Первые}")]
	[Маршрут("Справочники/ВерсииФайлов/ВыбратьПоКоду","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ВерсииФайлов/ВыбратьПоКоду","{___Первые}/{___Мин}/{___Макс}")]
	public class ВерсииФайловВыбратьПоКоду: V82.СправочникиСсылка.ВерсииФайлов,IReturn<ВерсииФайловВыбратьПоКоду>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/ВерсииФайлов/ВыбратьПоНаименованию","{___Первые}")]
	[Маршрут("Справочники/ВерсииФайлов/ВыбратьПоНаименованию","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/ВерсииФайлов/ВыбратьПоНаименованию","{___Первые}/{___Мин}/{___Макс}")]
	public class ВерсииФайловВыбратьПоНаименованию: V82.СправочникиСсылка.ВерсииФайлов,IReturn<ВерсииФайловВыбратьПоНаименованию>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/ВерсииФайлов/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ВерсииФайловСтраницаПоСсылке: V82.СправочникиСсылка.ВерсииФайлов,IReturn<ВерсииФайловСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/ВерсииФайлов/СтраницаПоКоду","{___Размер}/{___Номер}")]
	public class ВерсииФайловСтраницаПоКоду: V82.СправочникиСсылка.ВерсииФайлов,IReturn<ВерсииФайловСтраницаПоКоду>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/ВерсииФайлов/СтраницаПоНаименованию","{___Размер}/{___Номер}")]
	public class ВерсииФайловСтраницаПоНаименованию: V82.СправочникиСсылка.ВерсииФайлов,IReturn<ВерсииФайловСтраницаПоНаименованию>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ВерсииФайловОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ВерсииФайловСервис : Service
	{
		
		public object Get(ВерсииФайловЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ВерсииФайловНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Справочники.ВерсииФайлов.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ВерсииФайловОтвет() { Ответ = "ВерсииФайлов c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ВерсииФайловНайтиПоКоду Запрос)
		{
			if(Запрос.Код == null)
			{
				return null;
			}
			var СтрокаКод = System.Uri.UnescapeDataString(Запрос.Код);
			var Ссылка = V82.Справочники.ВерсииФайлов.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new ВерсииФайловОтвет() {Ответ = "ВерсииФайлов c кодом '" + Запрос.Код + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ВерсииФайловНайтиПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(ВерсииФайловВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Справочники.ВерсииФайлов.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ВерсииФайловВыбратьПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(ВерсииФайловВыбратьПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(ВерсииФайловСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ВерсииФайловСтраницаПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(ВерсииФайловСтраницаПоНаименованию Запрос)
		{
			return null;
		}

		public object Any(ВерсииФайловЗапрос Запрос)
		{
			return new ВерсииФайловОтвет {Ответ = "ВерсииФайлов, "};
		}

		public object Post(ВерсииФайловЗапрос ЗапросВерсииФайлов)
		{
			var Ссылка = (СправочникиСсылка.ВерсииФайлов)ЗапросВерсииФайлов;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}