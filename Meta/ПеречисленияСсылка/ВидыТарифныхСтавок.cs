
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Общ)
		///</summary>
	public enum ВидыТарифныхСтавок
	{
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		Месячная = 0,
	///<summary>
	///(Общ)
	///</summary>
		Дневная = 1,
	///<summary>
	///(Общ)
	///</summary>
		Часовая = 2,
	}
	public static partial class ВидыТарифныхСтавок_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Месячная = new Guid("fdb60fb9-06ba-0446-4f5b-44bf044e60a3");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Дневная = new Guid("fc4edd9d-6b0b-7620-4a73-240e0daf7c58");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Часовая = new Guid("42ed25b3-e2a4-f28d-470a-43f3d56f600a");
		public static ВидыТарифныхСтавок Получить(this ВидыТарифныхСтавок Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыТарифныхСтавок Получить(this ВидыТарифныхСтавок Значение, Guid Ссылка)
		{
			if(Ссылка == Месячная)
			{
				return ВидыТарифныхСтавок.Месячная;
			}
			else if(Ссылка == Дневная)
			{
				return ВидыТарифныхСтавок.Дневная;
			}
			else if(Ссылка == Часовая)
			{
				return ВидыТарифныхСтавок.Часовая;
			}
			return ВидыТарифныхСтавок.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыТарифныхСтавок Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыТарифныхСтавок Значение)
		{
			switch (Значение)
			{
				case ВидыТарифныхСтавок.Месячная: return Месячная;
				case ВидыТарифныхСтавок.Дневная: return Дневная;
				case ВидыТарифныхСтавок.Часовая: return Часовая;
			}
			return Guid.Empty;
		}
	}
}