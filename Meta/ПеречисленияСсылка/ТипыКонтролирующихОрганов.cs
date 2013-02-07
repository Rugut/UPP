
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ТипыКонтролирующихОрганов
	{
		ПустаяСсылка = - 1,
		ФНС = 0,
		ПФР = 1,
		ФСС = 2,
		ФСГС = 3,//Росстат
	}
	public static partial class ТипыКонтролирующихОрганов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ФНС = new Guid("ee0888af-f5ae-9d5e-4861-897334a9057c");
		public static readonly Guid ПФР = new Guid("3de14e9f-c189-409f-4375-f8f6742fde9a");
		public static readonly Guid ФСС = new Guid("934cb6a9-e0e0-993d-4453-e75851b5abbe");
		public static readonly Guid ФСГС = new Guid("ec0f4598-054f-7d80-48be-359c3dfeb33c");//Росстат
		public static ТипыКонтролирующихОрганов Получить(this ТипыКонтролирующихОрганов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыКонтролирующихОрганов Получить(this ТипыКонтролирующихОрганов Значение, Guid Ссылка)
		{
			if(Ссылка == ФНС)
			{
				return ТипыКонтролирующихОрганов.ФНС;
			}
			else if(Ссылка == ПФР)
			{
				return ТипыКонтролирующихОрганов.ПФР;
			}
			else if(Ссылка == ФСС)
			{
				return ТипыКонтролирующихОрганов.ФСС;
			}
			else if(Ссылка == ФСГС)
			{
				return ТипыКонтролирующихОрганов.ФСГС;
			}
			return ТипыКонтролирующихОрганов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыКонтролирующихОрганов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыКонтролирующихОрганов Значение)
		{
			switch (Значение)
			{
				case ТипыКонтролирующихОрганов.ФНС: return ФНС;
				case ТипыКонтролирующихОрганов.ПФР: return ПФР;
				case ТипыКонтролирующихОрганов.ФСС: return ФСС;
				case ТипыКонтролирующихОрганов.ФСГС: return ФСГС;
			}
			return Guid.Empty;
		}
	}
}