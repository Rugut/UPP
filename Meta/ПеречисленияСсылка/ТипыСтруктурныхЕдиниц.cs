
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Общ.)
		///</summary>
	public enum ТипыСтруктурныхЕдиниц
	{
		ПустаяСсылка = - 1,
		Склад = 0,
		Касса = 1,
	}
	public static partial class ТипыСтруктурныхЕдиниц_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Склад = new Guid("c729ac80-2e21-605e-4e96-7e734984bbba");
		public static readonly Guid Касса = new Guid("896552b5-b9a7-b876-4aca-8d718320845c");
		public static ТипыСтруктурныхЕдиниц Получить(this ТипыСтруктурныхЕдиниц Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыСтруктурныхЕдиниц Получить(this ТипыСтруктурныхЕдиниц Значение, Guid Ссылка)
		{
			if(Ссылка == Склад)
			{
				return ТипыСтруктурныхЕдиниц.Склад;
			}
			else if(Ссылка == Касса)
			{
				return ТипыСтруктурныхЕдиниц.Касса;
			}
			return ТипыСтруктурныхЕдиниц.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыСтруктурныхЕдиниц Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыСтруктурныхЕдиниц Значение)
		{
			switch (Значение)
			{
				case ТипыСтруктурныхЕдиниц.Склад: return Склад;
				case ТипыСтруктурныхЕдиниц.Касса: return Касса;
			}
			return Guid.Empty;
		}
	}
}
