
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ВходящееИсходящееСобытие
	{
		ПустаяСсылка = - 1,
		Входящее = 0,
		Исходящее = 1,
	}
	public static partial class ВходящееИсходящееСобытие_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Входящее = new Guid("6efaaaac-53c6-701b-4f08-3c023642a5f3");
		public static readonly Guid Исходящее = new Guid("b08a0d97-d6b8-ed36-4ed8-c9beac5a6c99");
		public static ВходящееИсходящееСобытие Получить(this ВходящееИсходящееСобытие Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВходящееИсходящееСобытие Получить(this ВходящееИсходящееСобытие Значение, Guid Ссылка)
		{
			if(Ссылка == Входящее)
			{
				return ВходящееИсходящееСобытие.Входящее;
			}
			else if(Ссылка == Исходящее)
			{
				return ВходящееИсходящееСобытие.Исходящее;
			}
			return ВходящееИсходящееСобытие.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВходящееИсходящееСобытие Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВходящееИсходящееСобытие Значение)
		{
			switch (Значение)
			{
				case ВходящееИсходящееСобытие.Входящее: return Входящее;
				case ВходящееИсходящееСобытие.Исходящее: return Исходящее;
			}
			return Guid.Empty;
		}
	}
}