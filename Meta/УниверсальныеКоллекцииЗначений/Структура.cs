
using System;
using System.Collections.Generic;
using System.Linq;
using V82;
namespace V82.УниверсальныеКоллекцииЗначений
{
	public partial class Структура: Dictionary<string, object>
	{
		public Структура()
		{
			
		}
		public Структура(string Ключи, params object[] Значения)
		{
			var МассивКлючей = Ключи.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
			if (МассивКлючей.Length != Значения.Length)
			{
				throw new Exception("Создание дефолтовых ключей пока не реализовано.");
			}
			if (МассивКлючей.Length != МассивКлючей.Distinct(StringComparer.InvariantCultureIgnoreCase).Count())
			{
				throw new Exception("Ключи с одинаковыми именами запрещены.");
			}
			for (var НомерКлюча = 0; НомерКлюча < МассивКлючей.Length; НомерКлюча++)
			{
				Add(МассивКлючей[НомерКлюча],Значения[НомерКлюча]);
			}
		}
		public void Вставить(string Ключ,object Значение)
		{
			
		}
		public int Количество()
		{
			return 0;
		}
		public void Очистить()
		{
			
		}
		public bool Свойство(string Ключ, object НайденноеЗначение)
		{
			return true;
		}
		public void Удалить(string Ключ)
		{
			
		}
		public object Получить(string Ключ)
		{
			return null;
		}
		
		public object this[string Ключ]
		{
			get
			{
				return this.Получить(Ключ);
			}
			set
			{
				this.Вставить(Ключ, value);
			}
		}
	}
}