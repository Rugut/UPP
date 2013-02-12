
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ТипыДомов
	{
		ПустаяСсылка = - 1,
		Дом = 0,
		Владение = 1,
	}
	public static partial class ТипыДомов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Дом = new Guid("86bce5ae-4291-f897-402a-e21c9836bf4d");
		public static readonly Guid Владение = new Guid("da2216a4-bb59-6fb6-43a8-76af73a5cfd7");
		public static ТипыДомов Получить(this ТипыДомов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыДомов Получить(this ТипыДомов Значение, Guid Ссылка)
		{
			if(Ссылка == Дом)
			{
				return ТипыДомов.Дом;
			}
			else if(Ссылка == Владение)
			{
				return ТипыДомов.Владение;
			}
			return ТипыДомов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыДомов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыДомов Значение)
		{
			switch (Значение)
			{
				case ТипыДомов.Дом: return Дом;
				case ТипыДомов.Владение: return Владение;
			}
			return Guid.Empty;
		}
	}
}