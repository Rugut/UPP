
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
	public enum СостоянияСобытий
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"e3a62af1-a9c5-4ef8-815f-5494f965d2b0\", \"Представление\":\"Запланировано\"}")]
		Запланировано = 0,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"17d898c6-65f2-4e50-bf62-93720b19abde\", \"Представление\":\"Завершено\"}")]
		Завершено = 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"07faeb27-7668-4cca-a072-e3538a24c7c0\", \"Представление\":\"Отменено\"}")]
		Отменено = 2,
	}
	public static partial class СостоянияСобытий_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Запланировано = new Guid("94545f81-65f9-b0d2-4ef8-a9c5e3a62af1");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Завершено = new Guid("729362bf-190b-deab-4e50-65f217d898c6");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Отменено = new Guid("53e372a0-248a-c0c7-4cca-766807faeb27");
		public static СостоянияСобытий Получить(this СостоянияСобытий Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СостоянияСобытий Получить(this СостоянияСобытий Значение, Guid Ссылка)
		{
			if(Ссылка == Запланировано)
			{
				return СостоянияСобытий.Запланировано;
			}
			else if(Ссылка == Завершено)
			{
				return СостоянияСобытий.Завершено;
			}
			else if(Ссылка == Отменено)
			{
				return СостоянияСобытий.Отменено;
			}
			return СостоянияСобытий.ПустаяСсылка;
		}
		public static byte[] Ключ(this СостоянияСобытий Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СостоянияСобытий Значение)
		{
			switch (Значение)
			{
				case СостоянияСобытий.Запланировано: return Запланировано;
				case СостоянияСобытий.Завершено: return Завершено;
				case СостоянияСобытий.Отменено: return Отменено;
			}
			return Guid.Empty;
		}
	}
}