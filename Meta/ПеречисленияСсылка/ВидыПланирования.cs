
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Упр)
	///</summary>
	[DataContract]
	public enum ВидыПланирования
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"3bf8ab60-c4ef-4dae-b920-21c34718e324\", \"Представление\":\"Продажи\"}")]
		Продажи = 0,
		[EnumMember(Value = "{\"Ссылка\":\"35909411-cf97-4ac0-bad2-ffb8ff88dcbe\", \"Представление\":\"Производство\"}")]
		Производство = 1,
		[EnumMember(Value = "{\"Ссылка\":\"93a0963d-7cb0-4bdd-b67d-d2a921b64bc5\", \"Представление\":\"Закупки\"}")]
		Закупки = 2,
	}
	public static partial class ВидыПланирования_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Продажи = new Guid("c32120b9-1847-24e3-4dae-c4ef3bf8ab60");
		public static readonly Guid Производство = new Guid("b8ffd2ba-88ff-bedc-4ac0-cf9735909411");
		public static readonly Guid Закупки = new Guid("a9d27db6-b621-c54b-4bdd-7cb093a0963d");
		public static ВидыПланирования Получить(this ВидыПланирования Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыПланирования Получить(this ВидыПланирования Значение, Guid Ссылка)
		{
			if(Ссылка == Продажи)
			{
				return ВидыПланирования.Продажи;
			}
			else if(Ссылка == Производство)
			{
				return ВидыПланирования.Производство;
			}
			else if(Ссылка == Закупки)
			{
				return ВидыПланирования.Закупки;
			}
			return ВидыПланирования.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыПланирования Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыПланирования Значение)
		{
			switch (Значение)
			{
				case ВидыПланирования.Продажи: return Продажи;
				case ВидыПланирования.Производство: return Производство;
				case ВидыПланирования.Закупки: return Закупки;
			}
			return Guid.Empty;
		}
	}
}