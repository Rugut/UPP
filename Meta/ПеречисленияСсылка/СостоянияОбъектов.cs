
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum СостоянияОбъектов
	{
		ПустаяСсылка = - 1,
		Подготовлен = 0,
		Утвержден = 1,
		Отложен = 2,
		Согласован = 3,
		Отклонен = 4,
	}
	public static partial class СостоянияОбъектов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Подготовлен = new Guid("091d8eb0-b04c-3b92-4105-d8619d3093c1");
		public static readonly Guid Утвержден = new Guid("3c6307a9-5050-d652-4a06-e8608f2e04c6");
		public static readonly Guid Отложен = new Guid("c83fddb6-fe3e-2603-4059-4bafc0316856");
		public static readonly Guid Согласован = new Guid("c77dfea2-5b5f-66e5-45e0-a209fcbcd6a4");
		public static readonly Guid Отклонен = new Guid("32498d8b-635c-f186-4fa0-3d7cedf3b172");
		public static СостоянияОбъектов Получить(this СостоянияОбъектов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СостоянияОбъектов Получить(this СостоянияОбъектов Значение, Guid Ссылка)
		{
			if(Ссылка == Подготовлен)
			{
				return СостоянияОбъектов.Подготовлен;
			}
			else if(Ссылка == Утвержден)
			{
				return СостоянияОбъектов.Утвержден;
			}
			else if(Ссылка == Отложен)
			{
				return СостоянияОбъектов.Отложен;
			}
			else if(Ссылка == Согласован)
			{
				return СостоянияОбъектов.Согласован;
			}
			else if(Ссылка == Отклонен)
			{
				return СостоянияОбъектов.Отклонен;
			}
			return СостоянияОбъектов.ПустаяСсылка;
		}
		public static byte[] Ключ(this СостоянияОбъектов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СостоянияОбъектов Значение)
		{
			switch (Значение)
			{
				case СостоянияОбъектов.Подготовлен: return Подготовлен;
				case СостоянияОбъектов.Утвержден: return Утвержден;
				case СостоянияОбъектов.Отложен: return Отложен;
				case СостоянияОбъектов.Согласован: return Согласован;
				case СостоянияОбъектов.Отклонен: return Отклонен;
			}
			return Guid.Empty;
		}
	}
}