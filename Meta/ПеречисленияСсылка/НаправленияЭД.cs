
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum НаправленияЭД
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"abef7262-5fb1-4894-a65b-6535f3a768a2\", \"Представление\":\"Входящий\"}")]
		Входящий = 0,
		[EnumMember(Value = "{\"Ссылка\":\"03ddc270-bf90-4826-8c30-84903fbe1bb0\", \"Представление\":\"Интеркампани\"}")]
		Интеркампани = 1,//Между организациями
		[EnumMember(Value = "{\"Ссылка\":\"b68175ec-9020-42bf-bbc6-73c07b6c6ec3\", \"Представление\":\"Исходящий\"}")]
		Исходящий = 2,
	}
	public static partial class НаправленияЭД_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Входящий = new Guid("35655ba6-a7f3-a268-4894-5fb1abef7262");
		public static readonly Guid Интеркампани = new Guid("9084308c-be3f-b01b-4826-bf9003ddc270");//Между организациями
		public static readonly Guid Исходящий = new Guid("c073c6bb-6c7b-c36e-42bf-9020b68175ec");
		public static НаправленияЭД Получить(this НаправленияЭД Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static НаправленияЭД Получить(this НаправленияЭД Значение, Guid Ссылка)
		{
			if(Ссылка == Входящий)
			{
				return НаправленияЭД.Входящий;
			}
			else if(Ссылка == Интеркампани)
			{
				return НаправленияЭД.Интеркампани;
			}
			else if(Ссылка == Исходящий)
			{
				return НаправленияЭД.Исходящий;
			}
			return НаправленияЭД.ПустаяСсылка;
		}
		public static byte[] Ключ(this НаправленияЭД Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this НаправленияЭД Значение)
		{
			switch (Значение)
			{
				case НаправленияЭД.Входящий: return Входящий;
				case НаправленияЭД.Интеркампани: return Интеркампани;
				case НаправленияЭД.Исходящий: return Исходящий;
			}
			return Guid.Empty;
		}
	}
}