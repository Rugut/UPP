
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ТипыНоменклатуры
	{
		ПустаяСсылка = - 1,
		Товар = 0,
		Услуга = 1,
		Набор = 2,//Набор-пакет
		Комплект = 3,//Набор-комплект
	}
	public static partial class ТипыНоменклатуры_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Товар = new Guid("5061ae9f-04d2-6e4e-4e79-2b61e30f755b");
		public static readonly Guid Услуга = new Guid("7fa6f5b4-8f04-db61-46d9-86307cf04a0c");
		public static readonly Guid Набор = new Guid("792bcbba-0fb1-7b02-4d62-3097cba7b276");//Набор-пакет
		public static readonly Guid Комплект = new Guid("a5e61c97-36d5-c4ea-4ba7-0ee7fbd5b16b");//Набор-комплект
		public static ТипыНоменклатуры Получить(this ТипыНоменклатуры Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыНоменклатуры Получить(this ТипыНоменклатуры Значение, Guid Ссылка)
		{
			if(Ссылка == Товар)
			{
				return ТипыНоменклатуры.Товар;
			}
			else if(Ссылка == Услуга)
			{
				return ТипыНоменклатуры.Услуга;
			}
			else if(Ссылка == Набор)
			{
				return ТипыНоменклатуры.Набор;
			}
			else if(Ссылка == Комплект)
			{
				return ТипыНоменклатуры.Комплект;
			}
			return ТипыНоменклатуры.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыНоменклатуры Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыНоменклатуры Значение)
		{
			switch (Значение)
			{
				case ТипыНоменклатуры.Товар: return Товар;
				case ТипыНоменклатуры.Услуга: return Услуга;
				case ТипыНоменклатуры.Набор: return Набор;
				case ТипыНоменклатуры.Комплект: return Комплект;
			}
			return Guid.Empty;
		}
	}
}
