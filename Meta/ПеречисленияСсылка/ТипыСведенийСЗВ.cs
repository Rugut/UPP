
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипыСведенийСЗВ
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"3621c5e7-8ab4-4473-8f77-da0fa75131eb\", \"Представление\":\"ИСХОДНАЯ\"}")]
		ИСХОДНАЯ = 0,
		[EnumMember(Value = "{\"Ссылка\":\"8424e951-0532-4b3b-a003-d0d87b8be630\", \"Представление\":\"ПЕНСИОННАЯ\"}")]
		ПЕНСИОННАЯ = 1,
		[EnumMember(Value = "{\"Ссылка\":\"7ac52df7-8850-41bf-b118-3b2e98864c55\", \"Представление\":\"КОРРЕКТИРУЮЩАЯ\"}")]
		КОРРЕКТИРУЮЩАЯ = 2,
		[EnumMember(Value = "{\"Ссылка\":\"bc1472ee-394f-4719-92af-d5b166de6d27\", \"Представление\":\"ОТМЕНЯЮЩАЯ\"}")]
		ОТМЕНЯЮЩАЯ = 3,
	}
	public static partial class ТипыСведенийСЗВ_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ИСХОДНАЯ = new Guid("0fda778f-51a7-eb31-4473-8ab43621c5e7");
		public static readonly Guid ПЕНСИОННАЯ = new Guid("d8d003a0-8b7b-30e6-4b3b-05328424e951");
		public static readonly Guid КОРРЕКТИРУЮЩАЯ = new Guid("2e3b18b1-8698-554c-41bf-88507ac52df7");
		public static readonly Guid ОТМЕНЯЮЩАЯ = new Guid("b1d5af92-de66-276d-4719-394fbc1472ee");
		public static ТипыСведенийСЗВ Получить(this ТипыСведенийСЗВ Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыСведенийСЗВ Получить(this ТипыСведенийСЗВ Значение, Guid Ссылка)
		{
			if(Ссылка == ИСХОДНАЯ)
			{
				return ТипыСведенийСЗВ.ИСХОДНАЯ;
			}
			else if(Ссылка == ПЕНСИОННАЯ)
			{
				return ТипыСведенийСЗВ.ПЕНСИОННАЯ;
			}
			else if(Ссылка == КОРРЕКТИРУЮЩАЯ)
			{
				return ТипыСведенийСЗВ.КОРРЕКТИРУЮЩАЯ;
			}
			else if(Ссылка == ОТМЕНЯЮЩАЯ)
			{
				return ТипыСведенийСЗВ.ОТМЕНЯЮЩАЯ;
			}
			return ТипыСведенийСЗВ.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыСведенийСЗВ Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыСведенийСЗВ Значение)
		{
			switch (Значение)
			{
				case ТипыСведенийСЗВ.ИСХОДНАЯ: return ИСХОДНАЯ;
				case ТипыСведенийСЗВ.ПЕНСИОННАЯ: return ПЕНСИОННАЯ;
				case ТипыСведенийСЗВ.КОРРЕКТИРУЮЩАЯ: return КОРРЕКТИРУЮЩАЯ;
				case ТипыСведенийСЗВ.ОТМЕНЯЮЩАЯ: return ОТМЕНЯЮЩАЯ;
			}
			return Guid.Empty;
		}
	}
}