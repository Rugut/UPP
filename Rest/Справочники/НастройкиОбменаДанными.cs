﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Справочники
{
	//NastrojjkiObmenaDannymi
	[Маршрут("Справочники/НастройкиОбменаДанными","")]
	public class НастройкиОбменаДаннымиЗапрос: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<НастройкиОбменаДаннымиЗапрос>
	{
	}
	[Маршрут("Справочники/НастройкиОбменаДанными/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Справочники/НастройкиОбменаДанными/ПоСсылке","{Ссылка}")]
	public class НастройкиОбменаДаннымиНайтиПоСсылке: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<НастройкиОбменаДаннымиНайтиПоСсылке>
	{
	}
	[Маршрут("Справочники/НастройкиОбменаДанными/НайтиПоКоду","{Код}")]
	[Маршрут("Справочники/НастройкиОбменаДанными/ПоКоду","{Код}")]
	public class НастройкиОбменаДаннымиНайтиПоКоду: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<НастройкиОбменаДаннымиНайтиПоКоду>
	{
	}
	[Маршрут("Справочники/НастройкиОбменаДанными/НайтиПоНаименованию","{Наименование}")]
	[Маршрут("Справочники/НастройкиОбменаДанными/ПоНаименованию","{Наименование}")]
	public class НастройкиОбменаДаннымиНайтиПоНаименованию: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<НастройкиОбменаДаннымиНайтиПоНаименованию>
	{
	}
	[Маршрут("Справочники/НастройкиОбменаДанными/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Справочники/НастройкиОбменаДанными/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/НастройкиОбменаДанными/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class НастройкиОбменаДаннымиВыбратьПоСсылке: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<НастройкиОбменаДаннымиВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Справочники/НастройкиОбменаДанными/ВыбратьПоКоду","{___Первые}")]
	[Маршрут("Справочники/НастройкиОбменаДанными/ВыбратьПоКоду","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/НастройкиОбменаДанными/ВыбратьПоКоду","{___Первые}/{___Мин}/{___Макс}")]
	public class НастройкиОбменаДаннымиВыбратьПоКоду: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<НастройкиОбменаДаннымиВыбратьПоКоду>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/НастройкиОбменаДанными/ВыбратьПоНаименованию","{___Первые}")]
	[Маршрут("Справочники/НастройкиОбменаДанными/ВыбратьПоНаименованию","{___Первые}/{___Мин}")]
	[Маршрут("Справочники/НастройкиОбменаДанными/ВыбратьПоНаименованию","{___Первые}/{___Мин}/{___Макс}")]
	public class НастройкиОбменаДаннымиВыбратьПоНаименованию: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<НастройкиОбменаДаннымиВыбратьПоНаименованию>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Справочники/НастройкиОбменаДанными/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class НастройкиОбменаДаннымиСтраницаПоСсылке: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<НастройкиОбменаДаннымиСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/НастройкиОбменаДанными/СтраницаПоКоду","{___Размер}/{___Номер}")]
	public class НастройкиОбменаДаннымиСтраницаПоКоду: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<НастройкиОбменаДаннымиСтраницаПоКоду>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Справочники/НастройкиОбменаДанными/СтраницаПоНаименованию","{___Размер}/{___Номер}")]
	public class НастройкиОбменаДаннымиСтраницаПоНаименованию: V82.СправочникиСсылка.НастройкиОбменаДанными,IReturn<НастройкиОбменаДаннымиСтраницаПоНаименованию>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class НастройкиОбменаДаннымиОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class НастройкиОбменаДаннымиСервис : Service
	{
		
		public object Get(НастройкиОбменаДаннымиЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиОбменаДаннымиНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Справочники.НастройкиОбменаДанными.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new НастройкиОбменаДаннымиОтвет() { Ответ = "НастройкиОбменаДанными c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(НастройкиОбменаДаннымиНайтиПоКоду Запрос)
		{
			if(Запрос.Код == null)
			{
				return null;
			}
			var СтрокаКод = System.Uri.UnescapeDataString(Запрос.Код);
			var Ссылка = V82.Справочники.НастройкиОбменаДанными.НайтиПоКоду(СтрокаКод);
			if (Ссылка == null)
			{
				return new НастройкиОбменаДаннымиОтвет() {Ответ = "НастройкиОбменаДанными c кодом '" + Запрос.Код + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(НастройкиОбменаДаннымиНайтиПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиОбменаДаннымиВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Справочники.НастройкиОбменаДанными.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(НастройкиОбменаДаннымиВыбратьПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиОбменаДаннымиВыбратьПоНаименованию Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиОбменаДаннымиСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиОбменаДаннымиСтраницаПоКоду Запрос)
		{
			return null;
		}
		
		public object Get(НастройкиОбменаДаннымиСтраницаПоНаименованию Запрос)
		{
			return null;
		}

		public object Any(НастройкиОбменаДаннымиЗапрос Запрос)
		{
			return new НастройкиОбменаДаннымиОтвет {Ответ = "НастройкиОбменаДанными, "};
		}

		public object Post(НастройкиОбменаДаннымиЗапрос ЗапросНастройкиОбменаДанными)
		{
			var Ссылка = (СправочникиСсылка.НастройкиОбменаДанными)ЗапросНастройкиОбменаДанными;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}