﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//SpisanieOS
	[Маршрут("Документы/СписаниеОС","")]
	public class СписаниеОСЗапрос: V82.ДокументыСсылка.СписаниеОС,IReturn<СписаниеОСЗапрос>
	{
	}
	[Маршрут("Документы/СписаниеОС/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/СписаниеОС/ПоСсылке","{Ссылка}")]
	public class СписаниеОСНайтиПоСсылке: V82.ДокументыСсылка.СписаниеОС,IReturn<СписаниеОСНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/СписаниеОС/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/СписаниеОС/ПоНомеру","{Номер}")]
	public class СписаниеОСНайтиПоНомеру: V82.ДокументыСсылка.СписаниеОС,IReturn<СписаниеОСНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/СписаниеОС/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/СписаниеОС/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/СписаниеОС/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class СписаниеОСВыбратьПоСсылке: V82.ДокументыСсылка.СписаниеОС,IReturn<СписаниеОСВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/СписаниеОС/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/СписаниеОС/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/СписаниеОС/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class СписаниеОСВыбратьПоНомеру: V82.ДокументыСсылка.СписаниеОС,IReturn<СписаниеОСВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/СписаниеОС/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class СписаниеОССтраницаПоСсылке: V82.ДокументыСсылка.СписаниеОС,IReturn<СписаниеОССтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/СписаниеОС/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class СписаниеОССтраницаПоНомеру: V82.ДокументыСсылка.СписаниеОС,IReturn<СписаниеОССтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class СписаниеОСОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class СписаниеОССервис : Service
	{
		
		public object Get(СписаниеОСЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(СписаниеОСНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.СписаниеОС.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new СписаниеОСОтвет() { Ответ = "СписаниеОС c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(СписаниеОСНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.СписаниеОС.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new СписаниеОСОтвет() {Ответ = "СписаниеОС c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(СписаниеОСВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.СписаниеОС.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(СписаниеОСВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(СписаниеОССтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(СписаниеОССтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(СписаниеОСЗапрос Запрос)
		{
			return new СписаниеОСОтвет {Ответ = "СписаниеОС, "};
		}

		public object Post(СписаниеОСЗапрос ЗапросСписаниеОС)
		{
			var Ссылка = (ДокументыСсылка.СписаниеОС)ЗапросСписаниеОС;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}