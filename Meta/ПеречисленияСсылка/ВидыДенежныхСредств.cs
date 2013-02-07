
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ВидыДенежныхСредств
	{
		ПустаяСсылка = - 1,
		Наличные = 0,
		Безналичные = 1,
	}
	public static partial class ВидыДенежныхСредств_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Наличные = new Guid("74ff2eb2-0c25-6375-4852-f580c4a92552");
		public static readonly Guid Безналичные = new Guid("8446c6b7-7b13-add0-40d7-4997770c5ff4");
		public static ВидыДенежныхСредств Получить(this ВидыДенежныхСредств Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыДенежныхСредств Получить(this ВидыДенежныхСредств Значение, Guid Ссылка)
		{
			if(Ссылка == Наличные)
			{
				return ВидыДенежныхСредств.Наличные;
			}
			else if(Ссылка == Безналичные)
			{
				return ВидыДенежныхСредств.Безналичные;
			}
			return ВидыДенежныхСредств.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыДенежныхСредств Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыДенежныхСредств Значение)
		{
			switch (Значение)
			{
				case ВидыДенежныхСредств.Наличные: return Наличные;
				case ВидыДенежныхСредств.Безналичные: return Безналичные;
			}
			return Guid.Empty;
		}
	}
}