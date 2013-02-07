
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ТипыШаблонов
	{
		ПустаяСсылка = - 1,
		Текстовый = 0,
		HTML = 1,
		Табличный = 2,
	}
	public static partial class ТипыШаблонов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Текстовый = new Guid("01fbabbe-0000-1b32-43ba-4fc8a037bbcb");
		public static readonly Guid HTML = new Guid("be8273aa-ba7e-0267-4f87-97d1aba94c0b");
		public static readonly Guid Табличный = new Guid("8e8d4688-7d79-daf0-45ff-6bbd74944e52");
		public static ТипыШаблонов Получить(this ТипыШаблонов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыШаблонов Получить(this ТипыШаблонов Значение, Guid Ссылка)
		{
			if(Ссылка == Текстовый)
			{
				return ТипыШаблонов.Текстовый;
			}
			else if(Ссылка == HTML)
			{
				return ТипыШаблонов.HTML;
			}
			else if(Ссылка == Табличный)
			{
				return ТипыШаблонов.Табличный;
			}
			return ТипыШаблонов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыШаблонов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыШаблонов Значение)
		{
			switch (Значение)
			{
				case ТипыШаблонов.Текстовый: return Текстовый;
				case ТипыШаблонов.HTML: return HTML;
				case ТипыШаблонов.Табличный: return Табличный;
			}
			return Guid.Empty;
		}
	}
}