
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum СистемыНалогообложения
	{
		ПустаяСсылка = - 1,
	///<summary>
	///ОСН
	///</summary>
		Общая = 0,
	///<summary>
	///УСН
	///</summary>
		Упрощенная = 1,
	}
	public static partial class СистемыНалогообложения_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///ОСН
		///</summary>
		public static readonly Guid Общая = new Guid("56692aa9-c347-ba0c-4da8-06626e1c630f");
		///<summary>
		///УСН
		///</summary>
		public static readonly Guid Упрощенная = new Guid("17a5ca86-900c-4a5a-4886-d0cf75aa500e");
		public static СистемыНалогообложения Получить(this СистемыНалогообложения Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СистемыНалогообложения Получить(this СистемыНалогообложения Значение, Guid Ссылка)
		{
			if(Ссылка == Общая)
			{
				return СистемыНалогообложения.Общая;
			}
			else if(Ссылка == Упрощенная)
			{
				return СистемыНалогообложения.Упрощенная;
			}
			return СистемыНалогообложения.ПустаяСсылка;
		}
		public static byte[] Ключ(this СистемыНалогообложения Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СистемыНалогообложения Значение)
		{
			switch (Значение)
			{
				case СистемыНалогообложения.Общая: return Общая;
				case СистемыНалогообложения.Упрощенная: return Упрощенная;
			}
			return Guid.Empty;
		}
	}
}