
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ВидыДвиженийПартий
	{
		ПустаяСсылка = - 1,
		Поступление = 0,
		Реализация = 1,
	}
	public static partial class ВидыДвиженийПартий_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Поступление = new Guid("6cd12b81-6fbe-fde7-4f39-cb7409d98381");
		public static readonly Guid Реализация = new Guid("2859939c-a21c-1209-4f85-3f740ebb2474");
		public static ВидыДвиженийПартий Получить(this ВидыДвиженийПартий Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыДвиженийПартий Получить(this ВидыДвиженийПартий Значение, Guid Ссылка)
		{
			if(Ссылка == Поступление)
			{
				return ВидыДвиженийПартий.Поступление;
			}
			else if(Ссылка == Реализация)
			{
				return ВидыДвиженийПартий.Реализация;
			}
			return ВидыДвиженийПартий.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыДвиженийПартий Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыДвиженийПартий Значение)
		{
			switch (Значение)
			{
				case ВидыДвиженийПартий.Поступление: return Поступление;
				case ВидыДвиженийПартий.Реализация: return Реализация;
			}
			return Guid.Empty;
		}
	}
}