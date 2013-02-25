
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
	public enum Занятость
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"5d5947aa-9c73-4268-88e6-4be75cd5f5b6\", \"Представление\":\"Свободно\"}")]
		Свободно = 0,
		[EnumMember(Value = "{\"Ссылка\":\"2fa05dc3-4bec-4ab0-ba96-61d676114e63\", \"Представление\":\"Занято\"}")]
		Занято = 1,
		[EnumMember(Value = "{\"Ссылка\":\"fb8e7538-a139-4c9f-a0d9-117bef3e0506\", \"Представление\":\"Недоступно\"}")]
		Недоступно = 2,
	}
	public static partial class Занятость_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Свободно = new Guid("e74be688-d55c-b6f5-4268-9c735d5947aa");
		public static readonly Guid Занято = new Guid("d66196ba-1176-634e-4ab0-4bec2fa05dc3");
		public static readonly Guid Недоступно = new Guid("7b11d9a0-3eef-0605-4c9f-a139fb8e7538");
		public static Занятость Получить(this Занятость Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static Занятость Получить(this Занятость Значение, Guid Ссылка)
		{
			if(Ссылка == Свободно)
			{
				return Занятость.Свободно;
			}
			else if(Ссылка == Занято)
			{
				return Занятость.Занято;
			}
			else if(Ссылка == Недоступно)
			{
				return Занятость.Недоступно;
			}
			return Занятость.ПустаяСсылка;
		}
		public static byte[] Ключ(this Занятость Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this Занятость Значение)
		{
			switch (Значение)
			{
				case Занятость.Свободно: return Свободно;
				case Занятость.Занято: return Занято;
				case Занятость.Недоступно: return Недоступно;
			}
			return Guid.Empty;
		}
	}
}