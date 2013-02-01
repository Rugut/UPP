
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ТООшибкиЭВ
	{
		ПустаяСсылка = - 1,
	}
	public static partial class ТООшибкиЭВ_Значения//:ПеречислениеСсылка
	{
		public static ТООшибкиЭВ Получить(this ТООшибкиЭВ Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТООшибкиЭВ Получить(this ТООшибкиЭВ Значение, Guid Ссылка)
		{
			return ТООшибкиЭВ.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТООшибкиЭВ Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТООшибкиЭВ Значение)
		{
			switch (Значение)
			{
			}
			return Guid.Empty;
		}
	}
}
