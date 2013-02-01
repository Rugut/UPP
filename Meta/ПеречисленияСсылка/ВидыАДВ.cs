
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ВидыАДВ
	{
		ПустаяСсылка = - 1,
		АДВ2 = 0,//АДВ-2
		АДВ3 = 1,//АДВ-3
	}
	public static partial class ВидыАДВ_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid АДВ2 = new Guid("30756aad-fd27-0203-40ad-c7ec15adacfe");//АДВ-2
		public static readonly Guid АДВ3 = new Guid("f003fd8e-28c6-2cb4-4626-32ac2ac44ea9");//АДВ-3
		public static ВидыАДВ Получить(this ВидыАДВ Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыАДВ Получить(this ВидыАДВ Значение, Guid Ссылка)
		{
			if(Ссылка == АДВ2)
			{
				return ВидыАДВ.АДВ2;
			}
			else if(Ссылка == АДВ3)
			{
				return ВидыАДВ.АДВ3;
			}
			return ВидыАДВ.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыАДВ Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыАДВ Значение)
		{
			switch (Значение)
			{
				case ВидыАДВ.АДВ2: return АДВ2;
				case ВидыАДВ.АДВ3: return АДВ3;
			}
			return Guid.Empty;
		}
	}
}
