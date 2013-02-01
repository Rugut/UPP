
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum СостоянияРабочихЦентров
	{
		ПустаяСсылка = - 1,
		Занят = 0,
		Свободен = 1,
	}
	public static partial class СостоянияРабочихЦентров_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Занят = new Guid("2bd6b3aa-ec80-4fb5-41db-c0b38a11f558");
		public static readonly Guid Свободен = new Guid("6f541daf-93fd-081c-4dc0-25506cda7e53");
		public static СостоянияРабочихЦентров Получить(this СостоянияРабочихЦентров Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СостоянияРабочихЦентров Получить(this СостоянияРабочихЦентров Значение, Guid Ссылка)
		{
			if(Ссылка == Занят)
			{
				return СостоянияРабочихЦентров.Занят;
			}
			else if(Ссылка == Свободен)
			{
				return СостоянияРабочихЦентров.Свободен;
			}
			return СостоянияРабочихЦентров.ПустаяСсылка;
		}
		public static byte[] Ключ(this СостоянияРабочихЦентров Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СостоянияРабочихЦентров Значение)
		{
			switch (Значение)
			{
				case СостоянияРабочихЦентров.Занят: return Занят;
				case СостоянияРабочихЦентров.Свободен: return Свободен;
			}
			return Guid.Empty;
		}
	}
}
