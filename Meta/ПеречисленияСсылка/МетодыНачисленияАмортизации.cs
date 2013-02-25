
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Общ)
	///</summary>
	[DataContract]
	public enum МетодыНачисленияАмортизации
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"e167a445-8e5f-49e0-97b5-cd5466c8873e\", \"Представление\":\"Линейный\"}")]
		Линейный = 0,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"84ad0046-ba35-42bc-b1b7-38aa29a92508\", \"Представление\":\"Нелинейный\"}")]
		Нелинейный = 1,
	}
	public static partial class МетодыНачисленияАмортизации_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Линейный = new Guid("54cdb597-c866-3e87-49e0-8e5fe167a445");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Нелинейный = new Guid("aa38b7b1-a929-0825-42bc-ba3584ad0046");
		public static МетодыНачисленияАмортизации Получить(this МетодыНачисленияАмортизации Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static МетодыНачисленияАмортизации Получить(this МетодыНачисленияАмортизации Значение, Guid Ссылка)
		{
			if(Ссылка == Линейный)
			{
				return МетодыНачисленияАмортизации.Линейный;
			}
			else if(Ссылка == Нелинейный)
			{
				return МетодыНачисленияАмортизации.Нелинейный;
			}
			return МетодыНачисленияАмортизации.ПустаяСсылка;
		}
		public static byte[] Ключ(this МетодыНачисленияАмортизации Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this МетодыНачисленияАмортизации Значение)
		{
			switch (Значение)
			{
				case МетодыНачисленияАмортизации.Линейный: return Линейный;
				case МетодыНачисленияАмортизации.Нелинейный: return Нелинейный;
			}
			return Guid.Empty;
		}
	}
}