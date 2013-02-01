
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum Периодичность
	{
		ПустаяСсылка = - 1,
		День = 0,
		Неделя = 1,
		Месяц = 2,
		Квартал = 3,
		Год = 4,
		Декада = 5,
		Полугодие = 6,
	}
	public static partial class Периодичность_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid День = new Guid("a9f87ca7-532a-cca0-460b-2a2a45bfa26a");
		public static readonly Guid Неделя = new Guid("921397b1-7f1b-c393-4163-9eb3448e2ef1");
		public static readonly Guid Месяц = new Guid("c0d4a4ae-4319-3159-4add-5854c56db50d");
		public static readonly Guid Квартал = new Guid("85463fa5-7746-9855-4e8d-e262f2f7135d");
		public static readonly Guid Год = new Guid("bd62e0a7-e0c8-1c2f-4c7e-9b44e4ee6590");
		public static readonly Guid Декада = new Guid("550f428c-7295-7220-4e75-a2f48c4e1b6b");
		public static readonly Guid Полугодие = new Guid("55fede8e-fc2f-d18a-4f02-a3674f31faac");
		public static Периодичность Получить(this Периодичность Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static Периодичность Получить(this Периодичность Значение, Guid Ссылка)
		{
			if(Ссылка == День)
			{
				return Периодичность.День;
			}
			else if(Ссылка == Неделя)
			{
				return Периодичность.Неделя;
			}
			else if(Ссылка == Месяц)
			{
				return Периодичность.Месяц;
			}
			else if(Ссылка == Квартал)
			{
				return Периодичность.Квартал;
			}
			else if(Ссылка == Год)
			{
				return Периодичность.Год;
			}
			else if(Ссылка == Декада)
			{
				return Периодичность.Декада;
			}
			else if(Ссылка == Полугодие)
			{
				return Периодичность.Полугодие;
			}
			return Периодичность.ПустаяСсылка;
		}
		public static byte[] Ключ(this Периодичность Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this Периодичность Значение)
		{
			switch (Значение)
			{
				case Периодичность.День: return День;
				case Периодичность.Неделя: return Неделя;
				case Периодичность.Месяц: return Месяц;
				case Периодичность.Квартал: return Квартал;
				case Периодичность.Год: return Год;
				case Периодичность.Декада: return Декада;
				case Периодичность.Полугодие: return Полугодие;
			}
			return Guid.Empty;
		}
	}
}
