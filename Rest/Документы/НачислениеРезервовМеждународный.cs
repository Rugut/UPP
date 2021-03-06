﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//NachislenieRezervovMezhdunarodnyjj
	[Маршрут("Документы/НачислениеРезервовМеждународный","")]
	public class НачислениеРезервовМеждународныйЗапрос: V82.ДокументыСсылка.НачислениеРезервовМеждународный,IReturn<НачислениеРезервовМеждународныйЗапрос>
	{
	}
	[Маршрут("Документы/НачислениеРезервовМеждународный/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/НачислениеРезервовМеждународный/ПоСсылке","{Ссылка}")]
	public class НачислениеРезервовМеждународныйНайтиПоСсылке: V82.ДокументыСсылка.НачислениеРезервовМеждународный,IReturn<НачислениеРезервовМеждународныйНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/НачислениеРезервовМеждународный/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/НачислениеРезервовМеждународный/ПоНомеру","{Номер}")]
	public class НачислениеРезервовМеждународныйНайтиПоНомеру: V82.ДокументыСсылка.НачислениеРезервовМеждународный,IReturn<НачислениеРезервовМеждународныйНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/НачислениеРезервовМеждународный/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/НачислениеРезервовМеждународный/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/НачислениеРезервовМеждународный/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class НачислениеРезервовМеждународныйВыбратьПоСсылке: V82.ДокументыСсылка.НачислениеРезервовМеждународный,IReturn<НачислениеРезервовМеждународныйВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/НачислениеРезервовМеждународный/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/НачислениеРезервовМеждународный/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/НачислениеРезервовМеждународный/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class НачислениеРезервовМеждународныйВыбратьПоНомеру: V82.ДокументыСсылка.НачислениеРезервовМеждународный,IReturn<НачислениеРезервовМеждународныйВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/НачислениеРезервовМеждународный/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class НачислениеРезервовМеждународныйСтраницаПоСсылке: V82.ДокументыСсылка.НачислениеРезервовМеждународный,IReturn<НачислениеРезервовМеждународныйСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/НачислениеРезервовМеждународный/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class НачислениеРезервовМеждународныйСтраницаПоНомеру: V82.ДокументыСсылка.НачислениеРезервовМеждународный,IReturn<НачислениеРезервовМеждународныйСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class НачислениеРезервовМеждународныйОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class НачислениеРезервовМеждународныйСервис : Service
	{
		
		public object Get(НачислениеРезервовМеждународныйЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(НачислениеРезервовМеждународныйНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.НачислениеРезервовМеждународный.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new НачислениеРезервовМеждународныйОтвет() { Ответ = "НачислениеРезервовМеждународный c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(НачислениеРезервовМеждународныйНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.НачислениеРезервовМеждународный.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new НачислениеРезервовМеждународныйОтвет() {Ответ = "НачислениеРезервовМеждународный c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(НачислениеРезервовМеждународныйВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.НачислениеРезервовМеждународный.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(НачислениеРезервовМеждународныйВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(НачислениеРезервовМеждународныйСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(НачислениеРезервовМеждународныйСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(НачислениеРезервовМеждународныйЗапрос Запрос)
		{
			return new НачислениеРезервовМеждународныйОтвет {Ответ = "НачислениеРезервовМеждународный, "};
		}

		public object Post(НачислениеРезервовМеждународныйЗапрос ЗапросНачислениеРезервовМеждународный)
		{
			var Ссылка = (ДокументыСсылка.НачислениеРезервовМеждународный)ЗапросНачислениеРезервовМеждународный;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}