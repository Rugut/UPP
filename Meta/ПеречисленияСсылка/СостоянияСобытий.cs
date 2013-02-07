
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Общ)
		///</summary>
	public enum СостоянияСобытий
	{
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		Запланировано = 0,
	///<summary>
	///(Общ)
	///</summary>
		Завершено = 1,
	///<summary>
	///(Общ)
	///</summary>
		Отменено = 2,
	}
	public static partial class СостоянияСобытий_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Запланировано = new Guid("94545f81-65f9-b0d2-4ef8-a9c5e3a62af1");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Завершено = new Guid("729362bf-190b-deab-4e50-65f217d898c6");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Отменено = new Guid("53e372a0-248a-c0c7-4cca-766807faeb27");
		public static СостоянияСобытий Получить(this СостоянияСобытий Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СостоянияСобытий Получить(this СостоянияСобытий Значение, Guid Ссылка)
		{
			if(Ссылка == Запланировано)
			{
				return СостоянияСобытий.Запланировано;
			}
			else if(Ссылка == Завершено)
			{
				return СостоянияСобытий.Завершено;
			}
			else if(Ссылка == Отменено)
			{
				return СостоянияСобытий.Отменено;
			}
			return СостоянияСобытий.ПустаяСсылка;
		}
		public static byte[] Ключ(this СостоянияСобытий Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СостоянияСобытий Значение)
		{
			switch (Значение)
			{
				case СостоянияСобытий.Запланировано: return Запланировано;
				case СостоянияСобытий.Завершено: return Завершено;
				case СостоянияСобытий.Отменено: return Отменено;
			}
			return Guid.Empty;
		}
	}
}