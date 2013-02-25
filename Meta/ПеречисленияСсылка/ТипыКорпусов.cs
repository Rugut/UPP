
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипыКорпусов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"9df7bc46-a15d-4b45-825c-b098413738c4\", \"Представление\":\"Корпус\"}")]
		Корпус = 0,
		[EnumMember(Value = "{\"Ссылка\":\"e1b454ec-dc04-46a6-bc64-3a11920874fa\", \"Представление\":\"Строение\"}")]
		Строение = 1,
	}
	public static partial class ТипыКорпусов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Корпус = new Guid("98b05c82-3741-c438-4b45-a15d9df7bc46");
		public static readonly Guid Строение = new Guid("113a64bc-0892-fa74-46a6-dc04e1b454ec");
		public static ТипыКорпусов Получить(this ТипыКорпусов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыКорпусов Получить(this ТипыКорпусов Значение, Guid Ссылка)
		{
			if(Ссылка == Корпус)
			{
				return ТипыКорпусов.Корпус;
			}
			else if(Ссылка == Строение)
			{
				return ТипыКорпусов.Строение;
			}
			return ТипыКорпусов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыКорпусов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыКорпусов Значение)
		{
			switch (Значение)
			{
				case ТипыКорпусов.Корпус: return Корпус;
				case ТипыКорпусов.Строение: return Строение;
			}
			return Guid.Empty;
		}
	}
}