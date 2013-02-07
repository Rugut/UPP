
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ОжидаемоеДействиеЭД
	{
		ПустаяСсылка = - 1,
		НеТребуется = 0,//Не требуется
		Отправить = 1,
		Подписать = 2,
		Сформировать = 3,
		Утвердить = 4,
	}
	public static partial class ОжидаемоеДействиеЭД_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid НеТребуется = new Guid("db4d479e-9ac5-b762-4656-40c4005f54e9");//Не требуется
		public static readonly Guid Отправить = new Guid("018e4196-ea5b-dc6f-478c-9da8cfda35b5");
		public static readonly Guid Подписать = new Guid("9563ecbe-8227-9b17-4bba-b61b00c64f1e");
		public static readonly Guid Сформировать = new Guid("21ed59bf-c7af-3498-4257-c718ee7733e1");
		public static readonly Guid Утвердить = new Guid("503e0c84-1f9f-304f-4a03-a9146a683f04");
		public static ОжидаемоеДействиеЭД Получить(this ОжидаемоеДействиеЭД Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ОжидаемоеДействиеЭД Получить(this ОжидаемоеДействиеЭД Значение, Guid Ссылка)
		{
			if(Ссылка == НеТребуется)
			{
				return ОжидаемоеДействиеЭД.НеТребуется;
			}
			else if(Ссылка == Отправить)
			{
				return ОжидаемоеДействиеЭД.Отправить;
			}
			else if(Ссылка == Подписать)
			{
				return ОжидаемоеДействиеЭД.Подписать;
			}
			else if(Ссылка == Сформировать)
			{
				return ОжидаемоеДействиеЭД.Сформировать;
			}
			else if(Ссылка == Утвердить)
			{
				return ОжидаемоеДействиеЭД.Утвердить;
			}
			return ОжидаемоеДействиеЭД.ПустаяСсылка;
		}
		public static byte[] Ключ(this ОжидаемоеДействиеЭД Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ОжидаемоеДействиеЭД Значение)
		{
			switch (Значение)
			{
				case ОжидаемоеДействиеЭД.НеТребуется: return НеТребуется;
				case ОжидаемоеДействиеЭД.Отправить: return Отправить;
				case ОжидаемоеДействиеЭД.Подписать: return Подписать;
				case ОжидаемоеДействиеЭД.Сформировать: return Сформировать;
				case ОжидаемоеДействиеЭД.Утвердить: return Утвердить;
			}
			return Guid.Empty;
		}
	}
}