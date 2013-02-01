
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ВидыСкидок
	{
		ПустаяСсылка = - 1,
		Оптовая = 0,
		Розничная = 1,
	}
	public static partial class ВидыСкидок_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Оптовая = new Guid("3043d496-19fe-a9cf-4dc3-54a0e56dacec");
		public static readonly Guid Розничная = new Guid("f0071482-dfe5-1475-4225-0ceca1a984f8");
		public static ВидыСкидок Получить(this ВидыСкидок Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыСкидок Получить(this ВидыСкидок Значение, Guid Ссылка)
		{
			if(Ссылка == Оптовая)
			{
				return ВидыСкидок.Оптовая;
			}
			else if(Ссылка == Розничная)
			{
				return ВидыСкидок.Розничная;
			}
			return ВидыСкидок.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыСкидок Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыСкидок Значение)
		{
			switch (Значение)
			{
				case ВидыСкидок.Оптовая: return Оптовая;
				case ВидыСкидок.Розничная: return Розничная;
			}
			return Guid.Empty;
		}
	}
}
