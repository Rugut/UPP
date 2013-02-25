
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипДоговораСЗВ63
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"97637526-3ed2-4469-966a-54fea2d58c49\", \"Представление\":\"Трудовой\"}")]
		Трудовой = 0,
		[EnumMember(Value = "{\"Ссылка\":\"f3585aba-f68c-4ff6-83b8-8fa4d5cf4de8\", \"Представление\":\"ГражданскоПравовой\"}")]
		ГражданскоПравовой = 1,//ГРАЖДАНСКО-ПРАВОВОЙ
	}
	public static partial class ТипДоговораСЗВ63_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Трудовой = new Guid("fe546a96-d5a2-498c-4469-3ed297637526");
		public static readonly Guid ГражданскоПравовой = new Guid("a48fb883-cfd5-e84d-4ff6-f68cf3585aba");//ГРАЖДАНСКО-ПРАВОВОЙ
		public static ТипДоговораСЗВ63 Получить(this ТипДоговораСЗВ63 Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипДоговораСЗВ63 Получить(this ТипДоговораСЗВ63 Значение, Guid Ссылка)
		{
			if(Ссылка == Трудовой)
			{
				return ТипДоговораСЗВ63.Трудовой;
			}
			else if(Ссылка == ГражданскоПравовой)
			{
				return ТипДоговораСЗВ63.ГражданскоПравовой;
			}
			return ТипДоговораСЗВ63.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипДоговораСЗВ63 Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипДоговораСЗВ63 Значение)
		{
			switch (Значение)
			{
				case ТипДоговораСЗВ63.Трудовой: return Трудовой;
				case ТипДоговораСЗВ63.ГражданскоПравовой: return ГражданскоПравовой;
			}
			return Guid.Empty;
		}
	}
}