
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ВерсииРегламентаОбмена1С
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"8eb436fb-280c-407c-ba6d-e4ab8d26aaed\", \"Представление\":\"Версия10\"}")]
		Версия10 = 0,//1.0
		[EnumMember(Value = "{\"Ссылка\":\"189c597a-714f-4482-975f-47c5ac5511f9\", \"Представление\":\"Версия20\"}")]
		Версия20 = 1,//2.0
	}
	public static partial class ВерсииРегламентаОбмена1С_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Версия10 = new Guid("abe46dba-268d-edaa-407c-280c8eb436fb");//1.0
		public static readonly Guid Версия20 = new Guid("c5475f97-55ac-f911-4482-714f189c597a");//2.0
		public static ВерсииРегламентаОбмена1С Получить(this ВерсииРегламентаОбмена1С Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВерсииРегламентаОбмена1С Получить(this ВерсииРегламентаОбмена1С Значение, Guid Ссылка)
		{
			if(Ссылка == Версия10)
			{
				return ВерсииРегламентаОбмена1С.Версия10;
			}
			else if(Ссылка == Версия20)
			{
				return ВерсииРегламентаОбмена1С.Версия20;
			}
			return ВерсииРегламентаОбмена1С.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВерсииРегламентаОбмена1С Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВерсииРегламентаОбмена1С Значение)
		{
			switch (Значение)
			{
				case ВерсииРегламентаОбмена1С.Версия10: return Версия10;
				case ВерсииРегламентаОбмена1С.Версия20: return Версия20;
			}
			return Guid.Empty;
		}
	}
}