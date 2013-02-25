
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
	public enum ВходящееИсходящееСобытие
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"3642a5f3-3c02-4f08-acaa-fa6ec6531b70\", \"Представление\":\"Входящее\"}")]
		Входящее = 0,
		[EnumMember(Value = "{\"Ссылка\":\"ac5a6c99-c9be-4ed8-970d-8ab0b8d636ed\", \"Представление\":\"Исходящее\"}")]
		Исходящее = 1,
	}
	public static partial class ВходящееИсходящееСобытие_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Входящее = new Guid("6efaaaac-53c6-701b-4f08-3c023642a5f3");
		public static readonly Guid Исходящее = new Guid("b08a0d97-d6b8-ed36-4ed8-c9beac5a6c99");
		public static ВходящееИсходящееСобытие Получить(this ВходящееИсходящееСобытие Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВходящееИсходящееСобытие Получить(this ВходящееИсходящееСобытие Значение, Guid Ссылка)
		{
			if(Ссылка == Входящее)
			{
				return ВходящееИсходящееСобытие.Входящее;
			}
			else if(Ссылка == Исходящее)
			{
				return ВходящееИсходящееСобытие.Исходящее;
			}
			return ВходящееИсходящееСобытие.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВходящееИсходящееСобытие Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВходящееИсходящееСобытие Значение)
		{
			switch (Значение)
			{
				case ВходящееИсходящееСобытие.Входящее: return Входящее;
				case ВходящееИсходящееСобытие.Исходящее: return Исходящее;
			}
			return Guid.Empty;
		}
	}
}