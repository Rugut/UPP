
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ВидыПланирования
	{
		ПустаяСсылка = - 1,
		Продажи = 0,
		Производство = 1,
		Закупки = 2,
	}
	public static partial class ВидыПланирования_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Продажи = new Guid("c32120b9-1847-24e3-4dae-c4ef3bf8ab60");
		public static readonly Guid Производство = new Guid("b8ffd2ba-88ff-bedc-4ac0-cf9735909411");
		public static readonly Guid Закупки = new Guid("a9d27db6-b621-c54b-4bdd-7cb093a0963d");
		public static ВидыПланирования Получить(this ВидыПланирования Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыПланирования Получить(this ВидыПланирования Значение, Guid Ссылка)
		{
			if(Ссылка == Продажи)
			{
				return ВидыПланирования.Продажи;
			}
			else if(Ссылка == Производство)
			{
				return ВидыПланирования.Производство;
			}
			else if(Ссылка == Закупки)
			{
				return ВидыПланирования.Закупки;
			}
			return ВидыПланирования.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыПланирования Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыПланирования Значение)
		{
			switch (Значение)
			{
				case ВидыПланирования.Продажи: return Продажи;
				case ВидыПланирования.Производство: return Производство;
				case ВидыПланирования.Закупки: return Закупки;
			}
			return Guid.Empty;
		}
	}
}
