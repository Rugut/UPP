
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum Важность
	{
		ПустаяСсылка = - 1,
		Высокая = 0,
		Средняя = 1,
		Низкая = 2,
	}
	public static partial class Важность_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Высокая = new Guid("db3bdfb6-b294-eac7-4b5a-af5606d76e9a");
		public static readonly Guid Средняя = new Guid("4f20cea6-3699-b341-4239-6fe544af5928");
		public static readonly Guid Низкая = new Guid("43f46a84-6f41-254f-4471-ba9393e0e603");
		public static Важность Получить(this Важность Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static Важность Получить(this Важность Значение, Guid Ссылка)
		{
			if(Ссылка == Высокая)
			{
				return Важность.Высокая;
			}
			else if(Ссылка == Средняя)
			{
				return Важность.Средняя;
			}
			else if(Ссылка == Низкая)
			{
				return Важность.Низкая;
			}
			return Важность.ПустаяСсылка;
		}
		public static byte[] Ключ(this Важность Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this Важность Значение)
		{
			switch (Значение)
			{
				case Важность.Высокая: return Высокая;
				case Важность.Средняя: return Средняя;
				case Важность.Низкая: return Низкая;
			}
			return Guid.Empty;
		}
	}
}