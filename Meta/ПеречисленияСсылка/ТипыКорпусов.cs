
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ТипыКорпусов
	{
		ПустаяСсылка = - 1,
		Корпус = 0,
		Строение = 1,
	}
	public static partial class ТипыКорпусов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Корпус = new Guid("98b05c82-3741-c438-4b45-a15d9df7bc46");
		public static readonly Guid Строение = new Guid("113a64bc-0892-fa74-46a6-dc04e1b454ec");
		public static ТипыКорпусов Получить(this ТипыКорпусов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыКорпусов Получить(this ТипыКорпусов Значение, Guid Ссылка)
		{
			if(Ссылка == Корпус)
			{
				return ТипыКорпусов.Корпус;
			}
			else if(Ссылка == Строение)
			{
				return ТипыКорпусов.Строение;
			}
			return ТипыКорпусов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыКорпусов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыКорпусов Значение)
		{
			switch (Значение)
			{
				case ТипыКорпусов.Корпус: return Корпус;
				case ТипыКорпусов.Строение: return Строение;
			}
			return Guid.Empty;
		}
	}
}