
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum НазначенияПомещения
	{
		ПустаяСсылка = - 1,
		Жилое = 0,
		Нежилое = 1,
	}
	public static partial class НазначенияПомещения_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Жилое = new Guid("647e5b9c-2fbf-d0ea-4204-4de3a7c618d5");
		public static readonly Guid Нежилое = new Guid("745b96af-1957-cce4-41f2-d4c9fc84c01b");
		public static НазначенияПомещения Получить(this НазначенияПомещения Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static НазначенияПомещения Получить(this НазначенияПомещения Значение, Guid Ссылка)
		{
			if(Ссылка == Жилое)
			{
				return НазначенияПомещения.Жилое;
			}
			else if(Ссылка == Нежилое)
			{
				return НазначенияПомещения.Нежилое;
			}
			return НазначенияПомещения.ПустаяСсылка;
		}
		public static byte[] Ключ(this НазначенияПомещения Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this НазначенияПомещения Значение)
		{
			switch (Значение)
			{
				case НазначенияПомещения.Жилое: return Жилое;
				case НазначенияПомещения.Нежилое: return Нежилое;
			}
			return Guid.Empty;
		}
	}
}
