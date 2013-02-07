
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum СостоянияУтверждения
	{
		ПустаяСсылка = - 1,
		Утвержден = 0,
		НеУтвержден = 1,//Не утвержден
		Отклонен = 2,
	}
	public static partial class СостоянияУтверждения_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Утвержден = new Guid("8037a3bb-0b1b-7f88-4fd7-e0a0e9afd3ce");
		public static readonly Guid НеУтвержден = new Guid("e9c3d59e-bdb4-dbd3-4a04-baccad43d4f2");//Не утвержден
		public static readonly Guid Отклонен = new Guid("24b0c09b-4dc4-451c-45fa-033d2f4026ab");
		public static СостоянияУтверждения Получить(this СостоянияУтверждения Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СостоянияУтверждения Получить(this СостоянияУтверждения Значение, Guid Ссылка)
		{
			if(Ссылка == Утвержден)
			{
				return СостоянияУтверждения.Утвержден;
			}
			else if(Ссылка == НеУтвержден)
			{
				return СостоянияУтверждения.НеУтвержден;
			}
			else if(Ссылка == Отклонен)
			{
				return СостоянияУтверждения.Отклонен;
			}
			return СостоянияУтверждения.ПустаяСсылка;
		}
		public static byte[] Ключ(this СостоянияУтверждения Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СостоянияУтверждения Значение)
		{
			switch (Значение)
			{
				case СостоянияУтверждения.Утвержден: return Утвержден;
				case СостоянияУтверждения.НеУтвержден: return НеУтвержден;
				case СостоянияУтверждения.Отклонен: return Отклонен;
			}
			return Guid.Empty;
		}
	}
}